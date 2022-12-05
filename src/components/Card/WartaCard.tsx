import { useEffect, useState } from "react";
import { IoChevronForward } from "react-icons/io5";

interface Warta {
  id: number;
  title: string;
  slug: string;
  body: string;
  image: string;
  author: string;
  date: string;
}

function WartaCard() {
  const [warta, setWarta] = useState([]);
  const getData = async () => {
    const res = await fetch("https://mwcjson.vercel.app/warta");
    const data = await res.json();
    setWarta(data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="w-full h-[210px] flex flex-row gap-4 overflow-auto snap-mandatory snap-x scrollbar">
        {warta.map((data: Warta) => (
          <div
            key={data.id}
            className="snap-center flex-shrink-0 w-[180px] h-[200px] overflow-hidden relative rounded-md shadow-sm"
          >
            <div className="w-full h-full bg-white flex flex-col">
              <div className=""></div>
              <div className="w-full h-3/4">
                <img
                  src={`/${data.image}`}
                  alt={data.title}
                  className="w-full h-full bg-cover object-cover"
                />
              </div>
              <div className="w-full h-1/4 p-2">
                <div className="flex flex-row justify-between items-center">
                  <div className="flex flex-col items-start justify-around">
                    <span className="text-dark text-xs font-semibold">
                      {data.title}
                    </span>
                    <span className="mt-1 text-xs font-light text-slate-700">
                      Oleh : {data.author}
                    </span>
                  </div>
                  <IoChevronForward className="text-dark" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default WartaCard;
