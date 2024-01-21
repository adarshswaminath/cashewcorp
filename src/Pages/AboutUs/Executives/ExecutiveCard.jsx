import { AiFillMail } from "react-icons/ai";

function ExecutiveCard({ name, image, designation, contact }) {
  return (
    <div data-aos="fade-up" className="w-80 rounded overflow-hidden shadow-lg">
      <div className="flex items-center justify-center">
        <img className="w h-60" src={image} alt={name} />
      </div>
      <div className="flex flex-col items-center justify-center">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{designation}</p>
      </div>
      <div className="px-6 py-4">
        <ul>
          {contact.map((value, index) => (
            <li key={index} className="mb-2">
              {value}
            </li>
          ))}
        </ul>
      </div>
      </div>
    </div>
  );
}

export default ExecutiveCard;
