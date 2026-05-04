import React, { useEffect, useState } from "react";

const MenuGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch the list of images dynamically
    const fetchImages = async () => {
      try {
        const response = await fetch("/api/get-images"); // API route to fetch images
        const data = await response.json();
        setImages(data.images);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      <h1>Menu Gallery</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {images.map((image) => (
          <img
            key={image}
            src={`${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_PUBLIC_URL}/${image}`}
            alt={image}
            style={{ width: "200px", height: "auto" }}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuGallery;