import React, { useState } from 'react';

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
    <div className="grid grid-cols-1 gap-2 lg:grid-cols-5">
      {Array.from(new Set(functionaImages.map((img) => img.type))).map((type) => (
        <div key={type} className="relative" data-aos="fade-up">
          <img
            className="cursor-pointer"
            src={functionaImages.find((img) => img.type === type).images}
            alt={`${type} Thumbnail`}
            onClick={() => toggleModal(type)}
          />
          <p className="absolute bottom-2 left-2 text-white font-bold">{type}</p>
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
