import { useEffect, useState } from "react";
import { IoChevronForward } from "react-icons/io5";
import { Theme } from "../Theme";

interface TokohCard {
  id: number;
  title: string;
  slug: string;
  body: string;
  image: string;
  author: string;
  date: string;
  theme?: Theme;
}

type defaultTokohCardProps = {
  theme: Theme.primary;
};

function TokohCard() {
  const [tokoh, setTokoh] = useState([]);
  const getData = async () => {
    const res = await fetch("https://mwcjson.vercel.app/warta");
    const data = await res.json();
    setTokoh(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-between w-full gap-2">
        {tokoh.map((data: TokohCard) => (
          <div
            className="flex items-center justify-between p-2 bg-neutral shadow-md w-full h-24 rounded-md gap-2"
            key={data.id}
          >
            <div className="flex h-20 w-3/12 overflow-hidden relative rounded-md">
              <img
                src={data.image}
                alt={data.title}
                className="object-cover bg-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col w-8/12 h-20 justify-center">
              <h3 className="font-semibold text-sm text-dark">{data.title}</h3>
              <p className="text-xs leading-relaxed font-light line-clamp-2">
                {data.body}
              </p>
            </div>
            <div className="flex flex-row w-1/12 h-20 items-center justify-end">
              <span className="flex items-center">
                <IoChevronForward className="text-dark h-5 w-5" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default TokohCard;
