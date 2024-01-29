import axios from "axios";
import React, { useEffect, useState } from "react";

const index = () => {
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
  });

  const [editingNote, setEditingNote] = useState(null);

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      if (editingNote) {
        // Update mode
        const res = await axios.put(`/api/crud/${editingNote._id}`, formData);
        if (res.data.success) {
          setEditingNote(null); // Reset editing state after successful update
          window.location.reload();
        }
      } else {
        // Add mode
        const res = await axios.post("/api/crud/add", formData);
        if (res.data.success) {
          window.location.reload();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  //   fetch all Notes for blogs
  const [Notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    const { data } = await axios.get("api/crud/add");
    setNotes(data.message);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const delNote = async (id) => {
    try {
      const res = await fetch(`/api/crud/${id}`, {
        method: "DELETE",
      });

      if (res.ok == true) {
        window.location.reload();
        alert("deleted!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const editNote = (note) => {
    // Set the form data with the values of the notebook item being edited
    setFormData({
      title: note.title,
      desc: note.desc,
    });

    // Set the notebook item being edited in the state
    setEditingNote(note);
  };

  return (
    <div className="h-screen">
      <div className=" mt-8">
        <form
          onSubmit={submitForm}
          className=" flex flex-col border max-w-2xl m-auto p-4"
        >
          <label htmlFor="title"></label>
          <input
            id="title"
            type="text"
            name="title"
            value={formData.title}
            onChange={changeHandler}
            placeholder="enter title"
            className=" border px-2 py-2 text-sm rounded-lg my-2"
          />

          <label htmlFor="desc"></label>
          <input
            id="desc"
            type="text"
            name="desc"
            value={formData.desc}
            onChange={changeHandler}
            placeholder="enter description"
            className=" border px-2 py-2 text-sm rounded-lg my-2"
          />

          <button className=" border">submit</button>
        </form>
      </div>

      {/* Table  Here */}

      <div className="relative overflow-x-auto my-8">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th scope="col" className="px-6 py-3">
                Title
              </th>

              <th scope="col" className="px-6 py-3">
                Desc
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {Notes?.map((v, i) => {
              return (
                <tr key={i}>
                  <td>{v.title}</td>
                  <td>{v.desc}</td>
                  <td>
                    <i
                      onClick={() => editNote(v)}
                      className="fa-solid fa-pen-to-square"
                    ></i>
                    <i
                      onClick={() => delNote(v._id)}
                      className="fa-solid fa-trash text-red-400 hover:text-red-500 cursor-pointer"
                    ></i>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default index;
