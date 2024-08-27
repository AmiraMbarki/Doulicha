import axios from "axios";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Image from "./Image";

function SearchBarResults() {
  return <div>hirrrrrrrrrrrrrr</div>;
}

export default function SearchBar() {
  const [places, setPlaces] = useState([]);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);

  useEffect(() => {
    axios.get("/places").then((response) => {
      setPlaces(response.data);
    });
  }, []);

  useEffect(() => {
    setOutput([]);
    places.filter((place) => {
      if (place.address.toLowerCase().includes(input.toLowerCase())) {
        setOutput((output) => [...output, place]);
      }
    });
  }, [input, places]);

  return (
    <div>
      <div className="flex  items-center ">
        <div className="Search-bar">
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Search"
          />
        </div>

        <button
          onClick={SearchBarResults}
          className="bg-primary text-white p-4 ml-2 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
        {/* <div className="output">
        {output.map((place) => (
          <p>{place.address}</p>
        ))}
      </div> */}
      </div>
      {/* the IndexPage elements */}
    </div>
  );
}
