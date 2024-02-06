import React, { useState } from 'react';
import { FaExternalLinkAlt } from "react-icons/fa";

const FunctionImage = () => {
  const functionaImages = [
    { id: 1,images: "/images/gallery/functions/1.jpg",type: "inaguration" },
    { id: 2,images: "/images/gallery/functions/2.jpg",type: "inaguration" },
    { id: 3,images: "/images/gallery/functions/3.jpg",type: "inaguration" },
    { id: 4,images: "/images/gallery/functions/4.jpg",type: "meeting" },
    { id: 5,images: "/images/gallery/functions/5.jpg",type: "meeting" },
    { id: 6,images: "/images/gallery/functions/6.jpg",type: "inaguration" },
    { id: 7,images: "/images/gallery/functions/7.jpg",type: "product" },
    { id: 8,images: "/images/gallery/functions/8.jpg",type: "meeting" },
    { id: 9,images: "/images/gallery/functions/9.jpg",type: "meeting" },
    { id: 10,images: "/images/gallery/functions/10.jpg",type: "inaguration" },
    { id: 11,images: "/images/gallery/functions/11.jpg",type: "meeting" },
    
  ]
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);


  const toggleModal = (type, image) => {
    setModalVisible(!modalVisible);
    setSelectedType(type);
    setSelectedImage(image);
  };

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-5 p-3">
      {Array.from(new Set(functionaImages.map((img) => img.type))).map((type) => (
        <div key={type} type="button" onClick={() => toggleModal(type)} className="relative" data-aos="fade-up">
        <div className="relative">
          <img
            className="cursor-pointer"
            src={functionaImages.find((img) => img.type === type).images}
            alt={`${type} Thumbnail`}
          />
          <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-80">
              <p className="text-white font-bold flex items-center gap-2">
                Open Images
                <span><FaExternalLinkAlt/></span>
              </p>
            </div>
          </div>
        </div>
        <p className="absolute bottom-8 lg:bottom-14 left-2 text-white font-bold">{type}</p>
        <div>
          <p>Aute pariatur duis elit dolor adipisicing reprehenderit.</p>
        </div>
      </div>
      
      ))}

      {modalVisible && (
        <div className="fixed inset-0 overflow-y-auto flex items-center justify-center z-50" data-aos="fade">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="bg-white mx-auto my-8 p-6 rounded-md shadow-lg z-10 overflow-hidden max-w-3xl" data-aos="zoom-in">
            <div className="flex justify-end">
              <button
                onClick={() => toggleModal(null)}
                className="text-gray-600 hover:text-gray-800"
              >
                Close
              </button>
            </div>

            {selectedImage ? (
              <a href={selectedImage} target='_blank'>
              <img
                src={selectedImage}
                alt={`${selectedType} Image`}
                className="w-full h-auto cursor-pointer"
              />
            </a>
            
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                {functionaImages
                  .filter((img) => img.type === selectedType)
                  .map((img) => (
                    <img
                      key={img.id}
                      src={img.images}
                      alt={`${selectedType} Image`}
                      className="w-full h-auto cursor-pointer"
                      onClick={() => toggleModal(selectedType, img.images)}
                      data-aos="fade-up"
                    />
                  ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FunctionImage;
