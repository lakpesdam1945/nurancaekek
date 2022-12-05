import { useEffect, useState } from "react";
type Props = {};

interface Carousel {
  id: number;
  title: string;
  slug: string;
  body: string;
  image: string;
  author: string;
  date: string;
}

function Carousel(props: Props) {
  const [datacarousel, setDataCarousel] = useState([]);

  const getData = async () => {
    const res = await fetch("https://mwcjson.vercel.app/warta");
    const data = await res.json();
    setDataCarousel(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div
        id="carouselCaptions"
        className="carousel slide carousel-fade relative"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            type="button"
            data-bs-target="#carouselCaptions"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          {datacarousel.map((data: Carousel) => (
            <button
              key={data.id}
              type="button"
              data-bs-target="#carouselCaptions"
              data-bs-slide-to={data.id}
              aria-label={`Slide ${data.id + 1}`}
            />
          ))}
        </div>
        <div className="carousel-inner relative w-full overflow-hidden rounded-lg">
          <div className="carousel-item active relative float-left w-full h-[200px]">
            <div className="h-full w-full bg-black/10 absolute"></div>
            <img
              src={`/nu.jpg`}
              className="w-full h-full object-cover bg-cover"
              alt="image"
            />
            <div className="carousel-caption block absolute text-center">
              <h5 className="text-xs">Santri Go International</h5>
            </div>
          </div>
          {datacarousel.map((data: Carousel) => (
            <div
              key={data.id}
              className="carousel-item relative float-left w-full h-[200px]"
            >
              <div className="h-full w-full bg-black/10 absolute"></div>
              <img
                src={`/${data.image}`}
                className="w-full h-full object-cover bg-cover"
                alt={data.title}
              />
              <div className="carousel-caption block absolute text-center">
                <h5 className="text-xs">{data.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Carousel;
