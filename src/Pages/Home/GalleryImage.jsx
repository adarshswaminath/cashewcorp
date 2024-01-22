import { Link } from "react-router-dom"
import "./style/gallery.css"

function GalleryImage() {
  return (
    <div className="w-full  rounded-md shadow-md p-6">
          <h2 className="text-center text-xl font-bold mb-2">Images</h2>
          <div className="box ">
          <img className="image object-cover" src="https://cashewcorporation.com/wp-content/uploads/2021/10/WhatsApp-Image-2021-10-05-at-3.16.12-PM-1024x768.jpeg" />
	            <img className="image object-cover" src="https://cashewcorporation.com/wp-content/uploads/2017/09/T8A0351-1024x683.jpg" />
	            <img className="image object-cover" src="https://cashewcorporation.com/wp-content/uploads/2015/03/1.jpg" />
            </div>
          <Link to="/gallery">
            <button className="px-5 py-2 bg-red-500 text-white rounded-md mt-4 hover:bg-red-600 transition duration-300">
              Visit Images
            </button>
          </Link>
        </div>
  )
}

export default GalleryImage