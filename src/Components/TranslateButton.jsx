import React from "react";
import "./style/Translate.css";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineGTranslate } from "react-icons/md";
function TranslateButton() {
  return (
    <div>
      <button className="cta flex items-center justify-center text-white bg-orange-500 border-2 border-orange-500">
        <i className="text-2xl">
        <MdOutlineGTranslate/>
        </i>
        <span className="button-text text-white">മലയാളം</span>
      </button>
    </div>
  );
}

export default TranslateButton;
