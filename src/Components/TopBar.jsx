import { useEffect, useState } from "react"


function TopBar() {
  useEffect(() => {
    function makeitRoundedFullOnScroll(){
      setRounded("lg:rounded-full")
    }
    window.addEventListener("scroll",makeitRoundedFullOnScroll)
    return(() => 
    window.removeEventListener("scroll",makeitRoundedFullOnScroll)
    )
  },[])
  const [rounded,setRounded] = useState('')
  return (
    <div className={`sticky z-50 top-0 text-xs lg:text-lg lg:top-1 right-1 lg:mt-1 flex items-center justify-evenly bg-indigo-950 text-white p-2 mx-auto w-full lg:w-1/2 ease-in-out transition duration-200 delay-500 ${rounded}`}>
        <div className='flex space-x-5 gap-2'>
        <a href="#">Right to Information</a> |
        <a href="#">Governess Redressai</a> |
        <a href="#">English</a> |
        <a href="#">മലയാളം</a>

        </div>
    </div>
  )
}

export default TopBar