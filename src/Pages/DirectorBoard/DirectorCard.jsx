import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

function DirectorCard({ image, title, caption, email }) {
  return (
    <div className="w-full  h-[260px] object-cover p-5 border bg-white hover:bg-red-300 group  flex items-center gap-x-8 hover:shadow-xl">
      <img src={image} className="h-48 w-44 rounded-b-full " alt="" />
      <div>
        <h3 className="text-2xl font-bold text-red-400 group-hover:text-white">
          {title}
        </h3>
        <p className="font-bold">{caption}</p>
        {title === "Shri. S.Jayamohan" || title === "Shri. Sunil John .K" ? (
          <div>
            <a
              href={`mailto: ${email}`}
              className="flex items-center gap-2 underline"
            >
              <IoMdMail />
              {email}
            </a>
            <a
              href={`mailto: ${email}`}
              className="flex items-center gap-2 underline"
            >
              <FaPhoneAlt />
              {email}
            </a>
          </div>
        ) : (
          <div className=" gap-2">
            <a  target="_blank" className="p-2 rounded-full shadow flex items-center gap-2 font-bold cursor-pointer"><IoMdMail /> Email</a>
            <a  target="_blank" className="p-2 rounded-full shadow flex items-center gap-2 font-bold cursor-pointer"><FaPhoneAlt />Phone</a>

          </div>
        )}

        {/* <a href={`mailto: ${email}`} className="flex items-center gap-2 underline">
<IoMdMail/>
{email}
</a> */}
      </div>
    </div>
  );
}

export default DirectorCard;
