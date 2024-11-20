import Image from "next/image";
interface CardProps {
  item: {
    id: number;
    title: string;
    description: string;
    image: string;
  }
}

export const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <div className=" w-full h-[35rem] flex flex-col border border-solid border-black rounded-md">
      <div className="h-full w-full relative">
        <Image
          fill
          src={item.image}
          alt={item.description}
        />
      </div>
      <div className="h-full w-ful ">
        <div className="text-2xl font-extrabold p-5 overflow-hidden">
          {item.title}
        </div>
        <div className="text-sm flex p-5 text-wrap  ">
          {item.description}
        </div>

      </div>
    </div>
  )
}