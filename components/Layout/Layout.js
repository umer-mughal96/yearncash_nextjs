import React from "react";
import Head from "next/head";


const Layout = ({ children , title ,favicon}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href={favicon} />
        {/* <!---------------------- Required meta tags ---------------------> */}
        <meta name="description" content="All rights reserved to yearncash.io © 2021" />
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {/* <!---------------------- Bootstrap CSS ---------------------> */}

        {/* <!---------------------- Font Awesome CSS ---------------------> */}
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossOrigin="anonymous"
        />
        {/* <!-- Optional JavaScript --> */}
        {/* <!-- jQuery first, then Popper.js, then Bootstrap JS --> */}
        <script
          src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
          integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
          integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
          crossOrigin="anonymous"
        ></script>
      </Head>
      {children}
    </div>
  );
};

export default Layout;
