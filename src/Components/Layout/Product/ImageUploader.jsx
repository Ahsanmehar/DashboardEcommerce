import { useState } from "react";

function ImageUploader() {
  let [images, setImages] = useState([]);

  function handleClick(e) {
    const files = Array.from(e.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));

    // Purani images ko retain karna + naye images add karna
    setImages((prevImages) => [...prevImages, ...imageUrls]);
  }

  return (
    <div className="flex w-[100%] h-[40vh] bg-secondary">
      {/* Images Preview */}
      <div className="w-[30%] h-[60%] border-[1px] border-border flex flex-wrap gap-2">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            className="w-16 h-16 object-cover"
          />
        ))}
      </div>

      {/* Upload Box */}
      <div className="w-[15%] h-[60%] border-[1px] border-border">
        <label>
          yes
          <input
            type="file"
            onChange={handleClick}
            className="hidden"
            multiple
          />
        </label>
      </div>
    </div>
  );
}

export default ImageUploader;
