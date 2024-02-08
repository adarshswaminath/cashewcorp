import { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
// accordion 
function Accordion({title,content}){
    const [isOpen, setIsOpen] = useState(false);
    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };

    const isUrl = (content) => {
      const urlRegex = /^(http|https):\/\/[^ "]+$/
      return urlRegex.test(content)
    }
  
    return (
      <div className="border border-red-100 rounded-lg bg-[#0757A9] text-black  mb-2">
        <div
          className="flex justify-between items-center p-4 cursor-pointer"
          onClick={toggleAccordion}
        >
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <span className={`transform text-white ${isOpen ? 'rotate-180' : 'rotate-0'} transition-transform`}>
            &#9660;
          </span>
        </div>
        {isOpen && (
          <div className="p-4 bg-gray-100 flex justify-center">
            {isUrl(content) ? (
              <div>
                <a href={content} className="flex items-center gap-3 hover:underline" target="_blank" rel="noopener noreferrer">
                Open <FaExternalLinkAlt/>
                </a>
              </div>
            ) : content}
          </div>
        )}
      </div>
    );
  }

  export default Accordion
  