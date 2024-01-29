import { Html, Head, Main, NextScript } from "next/document";
import { createIcons } from 'duo-icons';

export default function Document() {
  return (
    <Html lang="en">
      <Head />

      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      />

      <script
        src="https://kit.fontawesome.com/00753165f6.js"
        crossOrigin="anonymous"
      ></script>

      <script src="https://unpkg.com/duo-icons@latest"></script>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
