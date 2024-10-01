import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Image from "../Image.jsx";
import photo from "../assets/photo_acceuil.jpg";

export default function IndexPage() {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    axios.get("/places").then((response) => {
      setPlaces(response.data);
    });
  }, []);
  return (
    <div>
      {/* <div class="my-5 w-4/5 max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden"> */}
      <div class="my-5 w-9/10 mx-auto  bg-white shadow-md rounded-lg overflow-hidden">
        <img src={photo} alt="Description" class="w-full h-96  object-cover" />
        <div>
          <h2 class="absolute inset-0 text-5xl top-1/4  flex items-center justify-center text-blacktext-4xl italic font-serif ">
            <b>Doulicha</b>
          </h2>
        </div>
      </div>

      <div className="relative border px-4 -mr-4  mt-8 -ml-6 -mr-6 rounded-2xl overflow-hidden ">
        <div className="absolute  inset-0 bg-white bg-opacity-20 backdrop-blur-lg"></div>
        <div className="relative z-10 mt-8  grid gap-x-20 gap-y-8 grid-cols-2 md:grid-cols-4 lg:grid-cols-4 py-8">
          {places.length > 0 &&
            places.map((place) => (
              <Link key={place._id} to={"/place/" + place._id}>
                <div className="bg-gray-500 mb-2 rounded-2xl flex  w-[100%] h-[80%] ">
                  {place.photos?.[0] && (
                    <Image
                      className="rounded-2xl   object-cover aspect-square "
                      src={place.photos?.[0]}
                      alt=""
                    />
                  )}
                </div>
                <div className="">
                  <h2 className="truncate font-bold text-black font-semibold text-xl">
                    {place.address}
                  </h2>
                </div>
                <h3 className="text-l font-semibold text-gray-700 ">
                  {place.title}
                </h3>
                <div className="mt-1 text-black font-semibold text-xl ">
                  <span className="font-bold ">{place.price} TND</span> per
                  night
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
