import React from "react";

export default function Footer() {
  return (

    <footer className=" bg-[#255c39] text-white py-8">
      <div className="container mx-auto flex flex-col items-center">
        <a href="/donate" className="bg-green-700  px-4 py-2 my-5 rounded hover:bg-green-600">
          Support the Cause
        </a>
        <div className="flex-col sm:flex-row px-4">
        <p className="text-lg mb-4">Contact Us:</p>
        <ul className="flex space-x-4  pb-6">
          <li>
            <a href="tel:+1234567890" className="text-blue-300 hover:text-blue-500">
              Phone: +918888888888
            </a>
          </li>
          <li>
            <a href="mailto:info@example.com" className="text-blue-300 hover:text-blue-500">
              Email: info@example.com
            </a>
          </li>
        </ul>
        </div>


        <div style={{ overflow: "hidden", maxWidth: "100%", width: "80vw", height: "500px" }}>
          <div id="gmap-canvas" style={{ height: "100%", width: "100%", maxWidth: "100%" }}>
            <iframe style={{ height: "100%", width: "100%", border: 0 }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9340.469346759412!2d78.07195846330686!3d21.904378174623233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd5e54a7078c72b%3A0x9762d011f2fa8566!2sOjas%20Educational%20%26%20Training%20Institute!5e0!3m2!1sen!2sin!4v1719468668885!5m2!1sen!2sin"></iframe>
          </div>
          <a className="our-googlemap-code" rel="nofollow" href="https://www.bootstrapskins.com/themes" id="get-map-data">
            premium bootstrap themes
          </a>
          <style>
            #gmap-canvas img.text-marker{"{"}max-width:none!important;background:none!important;{"}"}
            img{"{"}max-width:none{"}"}
          </style>
        </div>

        <div className="mt-4 text-sm text-gray-400">
          <p>© 2024 school All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
