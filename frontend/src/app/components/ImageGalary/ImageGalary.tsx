"use client";
import React, { ChangeEvent, useState } from "react";

type InputImage = {
  url: string;
};

const ImageGallery = () => {
  const [inputValue, setInputValue] = useState("");
  const [images, setImages] = useState<InputImage[]>([]);
  const [message, setMessage] = useState("");

  // Handle input change
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // Validate URL
  const isValidUrl = (urlString: string) => {
    try {
      new URL(urlString);
      return true;
    } catch {
      return false;
    }
  };

  // Add image
  const handleAddImage = () => {
    if (!inputValue) {
      setMessage("Please enter an image URL");
      return;
    }

    if (!isValidUrl(inputValue)) {
      setMessage("Invalid URL format");
      return;
    }

    setImages((prev) => [...prev, { url: inputValue }]);
    setInputValue("");
    setMessage("");
  };

  // Delete image
  const handleDelete = (indexToRemove: number) => {
    setImages((prev) =>
      prev.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <div className="min-h-screen bg-green-200 flex justify-center items-center">
      <div className="max-w-3xl mx-auto p-4 w-full">
        <h1 className="text-2xl font-bold mb-4">
          Image Gallery Application
        </h1>

        {/* Input */}
        <div className="flex mb-4">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="p-2 rounded-l-md border bg-white w-full"
            placeholder="Enter your image URL"
          />
          <button
            onClick={handleAddImage}
            className="bg-gray-200 border px-4 py-2 font-bold rounded-r-md"
          >
            Add Image
          </button>
        </div>

        {/* Message */}
        {message && (
          <p className="text-red-500 mb-2">{message}</p>
        )}

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.length === 0 ? (
            <p className="text-center col-span-full">
              No images added yet.
            </p>
          ) : (
            images.map((img, index) => (
              <div key={index} className="relative group">
                <img
                  src={img.url}
                  alt={`img-${index}`}
                  className="w-full h-auto rounded shadow"
                />
                <button
                  onClick={() => handleDelete(index)}
                  className="absolute top-2 right-2 bg-red-500 text-white rounded-full h-8 w-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
                  title="Delete"
                >
                  🗑️
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
