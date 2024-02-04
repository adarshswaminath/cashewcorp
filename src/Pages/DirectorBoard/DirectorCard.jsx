import { IoMdMail } from "react-icons/io";

function DirectorCard({image,title,caption,email}) {
  return (
    <div className='w-full  h-[260px] object-cover p-5 border bg-white hover:bg-red-300 group  flex items-center gap-x-8 hover:shadow-xl'>
        <img src={image} className='h-48 w-44 rounded-b-full' alt="" />
        <div>
        <h3 className='text-2xl font-bold text-red-400 group-hover:text-white'>{title}</h3>
        <p>{caption}</p>
        <a href={`mailto: ${email}`} className="flex items-center gap-2 underline">
            <IoMdMail/>
            {email}
        </a>
        </div>
    </div>
  )
}

export default DirectorCard