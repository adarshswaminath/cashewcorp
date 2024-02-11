import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

let blogDetils = [
  {
    id: 1,
    image: "/images/blog/blog-1.png",
    title: "Kollam ‘The Cashew Capital’",
    caption:
      "Situated in the southern coast of India.This ancient port town has hundred years of heritage to its credit.",
  },
  {
    id: 2,
    image: "/images/blog/blog-2.png",
    title: "Kerala Budget 2024",
    caption:
      "Kerala government has allocated 53.36 crore rupees for the cashew sector in the Kerala budget presented 2024",
  },
  {
    id: 3,
    image: "/images/blog/blog-3.png",
    title: "KSCDC Launched 24 premium products",
    caption:
      "In order to activate value added products in the domastic and international market KSCDC launched ",
  },
];

const BlogAndNews = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  //   const {state} = props.location
  //   const { index } = state;

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center p-2">
        <img src={blogDetils[0].image} alt="" />
        <h3 className="text-3xl font-bold mt-4">{blogDetils[0].title}</h3>
        <p className="mt-4 text-center flex">{blogDetils[0].caption}</p>
        <p className="mt-4  text-justify mx-auto max-w-4xl">
          Mollit et tempor sint duis veniam ipsum ea. Qui est laboris esse esse
          quis sunt tempor ad aute. Adipisicing cillum sunt commodo cillum
          labore occaecat enim amet anim laboris nisi. Voluptate desUt in
          pariatur irure consectetur eiusmod elit irure consectetur dolore ut
          enim laboris sit. Id tempor ullamco occaecat dolor non. Cupidatat
          velit ad commodo enim amet et eiusmod veniam aliquip sint amet sint.
          Culpa minim enim id do aute in. Reprehenderit pariatur culpa officia
          est in adipisicing.erunt occaecat veniam veniam minim ipsum aliqua
          laboris ex exercitation in.Laboris aliqua adipisicing deserunt dolor ex mollit ex adipisicing sint. Eu consectetur eu quis aliqua dolore amet pariatur dolor pariatur aute pariatur sunt eiusmod. Adipisicing consequat dolore labore dolor excepteur ad dolor ad minim consectetur dolore. Lorem labore ex non dolore minim do veniam exercitation minim culpa ullamco laboris non quis. Laborum ut esse adipisicing duis tempor ad cillum eiusmod voluptate fugiat. Ullamco laboris adipisicing laborum sint voluptate et sint dolore laborum anim. Quis minim mollit dolor irure eiusmod ea consectetur minim sunt.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default BlogAndNews;
