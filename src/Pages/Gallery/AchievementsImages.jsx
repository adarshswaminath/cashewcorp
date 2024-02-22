import useGetApi from "../../Hook/useGetApi"
import Loading from "../../Components/Loading"

function AchievementsImages() {
  const {response} = useGetApi("gallery")
  if(!response) {
    return <Loading/>
  }
  const finalImages = response.filter((data) => data.category === "achievements")
  return (
    <div className='p-3'>
        <div className="grid grid-cols-1 gap-3 place-content-center justify-items-center lg:grid-cols-3">
        {finalImages.map((data) => (
            <div key={data.id} className="h-96 w-96 flex items-center flex-col">
              <img className='h-72 w-96 object-contain' src={data.images[0].image} alt="achievments" />
              <p className="font-bold">{data.title}</p>
              <p className=" text-center text-sm">{data.description}</p>

            </div>
        ))}
        </div>
    </div>
  )
}

export default AchievementsImages