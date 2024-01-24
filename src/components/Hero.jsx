import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { Rating } from "primereact/rating";
import "slick-carousel/slick/slick-theme.css";

const reviewData = [
  {
    img: "https://lh3.googleusercontent.com/a/ACg8ocLv3L3Y15Zgl6-J9MDWz_ZRDHEHXA0cFtLZ9YJ-jDAC=s120-c-rp-mo-br100",
    commit: "This customer did not write a review.",
    review: "5",
    name: "John",
    time: "2021-08-01",
  },
  {
    img: "https://lh3.googleusercontent.com/a/ACg8ocLkyf6MpjlC4g78V3tqKopGXHZG2DmeTnUJwnt_uhHI=s120-c-rp-mo-ba3-br100",
    commit: "Excellent food great range of different dishes 😋",
    review: "4",
    name: "Mary",
    time: "2021-08-02",
  },
  {
    img: "https://lh3.googleusercontent.com/a/ACg8ocKdg8NpulYzJBQ5-Dz9h05ZIdE9avWrmbsjiX00-9zS=s120-c-rp-mo-br100",
    commit: "Good selection of tasty food",
    review: "3",
    name: "David",
    time: "2021-08-03",
  },
  {
    img: "https://lh3.googleusercontent.com/a-/ALV-UjWl_MtWHJl8ya8hJwJK6JFI3nBDahnBTsBQimr09NVY5Q=s120-c-rp-mo-br100",
    commit: "This customer did not write a review.",
    review: "4",
    name: "Sarah",
    time: "2021-08-04",
  },
  {
    img: "https://lh3.googleusercontent.com/a/ACg8ocJmaLg8LUfGe2RdHpc6NgndQJ51whgEHdmSW-FI4G9n=s120-c-rp-mo-ba5-br100",
    commit: "Great food very hot and great choices the girls that served...",
    review: "5",
    name: "Michael",
    time: "2021-08-05",
  },
  {
    img: "https://lh3.googleusercontent.com/a-/ALV-UjX-9h7KGmB5CYGiusSf9BOo8YdIQZ3ad1E9sIwnm0xm54I=s120-c-rp-mo-ba4-br100",
    commit: "This customer did not write a review",
    review: "2",
    name: "Emily",
    time: "2021-08-06",
  },
];

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <i
      id="slickBtnNext"
      style={{ ...style }}
      onClick={onClick}
      className="fa-solid fa-chevron-right"
    ></i>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <i
      id="slickBtnPrev"
      style={{ ...style }}
      onClick={onClick}
      className="fa-solid fa-chevron-left"
    ></i>
  );
}

const Hero = () => {
  var settings = {
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    initialSlide: 0,
    dots: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <div className="bg-[url('/image/sign/hero1.webp')] h-[45vh] lg:h-[65vh] bg-center bg-cover relative">
        <div className=" flex items-center justify-center flex-col bg-[#6F5243] absolute lg:-bottom-10 shadow-2xl lg:right-48 p-2 rounded-full lg:h-80 lg:w-80 md:h-54 md:w-54 h-64 w-64 left-1/2 top-1/2 -translate-x-1/2">
          <h1 className="  text-white text-[35px] font-bold mb-4">
            Book Now!!
          </h1>
          <Link
            className=" globalShadow bg-white text-gray-600 px-5 py-2 font-semibold"
            href={"https://tableagent.com/dundee/yamm-buffet/table-search/"}
          >
            RESERVED NOW
          </Link>
        </div>
      </div>

      {/* reviews Here */}
      <div className="bg-[url('/image/sign/hero2.webp')] h-full py-10 lg:h-[100vh] bg-center bg-cover">
        <div className=" flex items-center justify-center flex-col pt-12">
          <h2 className=" text-white text-[36px] font-bold mb-1 lg:mb-8">
            REVIEWS
          </h2>
          <div className=" flex items-center gap-5">
            <div className=" bg-white h-7 w-7 rounded-full lg:block hidden">
              <Image
                height={500}
                width={500}
                priority="true"
                alt="google image"
                className=" h-full w-full rounded-full p-1.5"
                src="data:image/png;base64,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"
              />
            </div>
            <span className=" text-white font-semibold text-[35px] my-8">
              4.1
            </span>
            <div>
              <h2 className=" text-white text-2xl">Yamm Buffet</h2>

              <Rating
                value={4}
                cancel={false}
                className=" text-[#FBCF1E] my-2"
              />

              <span className=" text-white text-xl lg:block hidden">709</span>
            </div>
          </div>
        </div>

        <Slider {...settings} className=" max-w-[900px] m-auto w-[85%]">
          {reviewData.map((v, i) => {
            return (
              <div key={i} className=" px-2 lg:px-4">
                <div className=" bg-white flex flex-col justify-center items-center gap-3 px-4 py-8">
                  <Image
                    height={500}
                    width={500}
                    priority="true"
                    src={v.img}
                    alt="image here"
                    className=" h-20 w-20 mb-4"
                  />
                  <div className=" text-yellow-400 mb-3">
                    <Rating
                      cancel={false}
                      value={v.review}
                      className=" text-[#FBCF1E] my-2"
                    />
                  </div>
                  <p className="text-center text-[rgb(94,94,94)] text-sm line-clamp-1">
                    {v.commit}
                  </p>
                  <div className=" flex items-center gap-1">
                    <Image
                      height={500}
                      width={500}
                      priority="true"
                      alt="google image"
                      className=" h-6 w-6 rounded-full p-1.5"
                      src="data:image/png;base64,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"
                    />
                    <div>
                      <span className=" text-xs">{v.name}</span> {" - "}
                      <span className=" text-xs font-light"> {v.time} </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>

      <div className=" max-w-[1200px] m-auto">
        <div className=" text-center my-8">
          <h2 className=" text-2xl mb-6 font-semibold">SOCIAL</h2>
          <Link href={"https://www.facebook.com/yammdundee"} target="_black">
            <i className="fa-brands fa-facebook text-2xl"></i>
          </Link>
        </div>

        <div className=" flex gap-8 lg:items-center justify-center my-4 lg:flex-row flex-col px-5 lg:px-5 2xl:px-0">
          <Image
            height={500}
            width={500}
            priority="true"
            className=" w-full lg:w-1/2"
            src="/image/sign/hero3.webp"
            alt=""
          />
          <div>
            <h1 className=" text-3xl font-semibold mb-5 ">GIFT VOUCHERS</h1>
            <p className=" text-gray-500 text-lg leading-[1.6]">
              Send a gift voucher to friends and family or buy it now for your
              future use.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
