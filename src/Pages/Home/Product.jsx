import { FaShoppingCart } from "react-icons/fa";
import "./style/product.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Product = () => {
  useEffect(() => {
    const root = document.documentElement;
    const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
      "--marquee-elements-displayed"
    );
    const marqueeContent = document.querySelector("ul.marquee-content");

    root.style.setProperty(
      "--marquee-elements",
      marqueeContent.children.length
    );

    for (let i = 0; i < marqueeElementsDisplayed; i++) {
      marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
    }
  }, []);
  return (
    <div className="marquee w-full">
      <h2 className="text-3xl font-bold m-4 text-center text-red-500">
        Our Products
      </h2>
      <ul className="marquee-content">
        {Array.from({ length: 12 }).map((_, index) => (
          <li>
            <div className="bg-white shadow-lg h-80 flex flex-col items-center justify-center">
            <img
            className=""
              src={`/images/home/product-${index+1}.png`}
              alt="Product"
            />
            {/* <p className="bottom-0 text-xl font-bold text-black text-left">Product Name</p> */}
            <Link to="/product" className="text-sm px-5 py-1.5 bg-red-500 text-white font-bold flex items-center gap-2 ">
              Buy Now
              <FaShoppingCart/>
            </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const productCard = ({ index }) => {
  return (
    <div className="shadow-lg bg-white">
      <img src={`images/products/product-${index + 1}.png`} alt="Product" />
      <p className="text-black">Product Name</p>
    </div>
  );
};

export default Product;
