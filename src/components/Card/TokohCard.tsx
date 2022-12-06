import { useEffect, useState } from "react";
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
      <div className="flex flex-col w-full gap-2">
        {tokoh.map((data: TokohCard) => (
          <div
            className="flex flex-row gap-2 w-full p-2 bg-neutral shadow-md h-24 rounded-md items-center overflow-hidden relative "
            key={data.id}
          >
            <div className="h-20 w-4/12 overflow-hidden relative rounded-md">
              <img
                src={data.image}
                alt={data.title}
                className="object-cover bg-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col w-8/12  items-start justify-start">
              <h3 className="font-semibold text-sm text-dark">{data.title}</h3>
              <p className="text-xs leading-relaxed font-light line-clamp-2">
                {data.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default TokohCard;
