"use client";

import React from "react";
import SmartHtml from "./components/SmartHtml";

const HtmlParser = () => {
  const html = `
    <h1>Hello World</h1>

    <img 
      src="https://res.cloudinary.com/dl9r2fs0r/image/upload/v1765312582/waijjvcazpdk1t8ghszo.jpg"
      alt="Dummy Banner"
    />

    <p>This is <strong>parsed</strong> HTML</p>
  `;

  return (
    <div>
      <SmartHtml
        html={html}
        components={{
          img: (props) => (
            <img
              {...props}
              loading="lazy"
              className="rounded-lg"
            />
          ),
        }}
        classMap={{
          h1: "text-2xl font-bold mb-4",
          p: "text-sm text-gray-700",
        }}
      />
    </div>
  );
};

export default HtmlParser;
