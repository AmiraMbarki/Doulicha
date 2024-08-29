// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Image from "./Image";

// function SearchBarResults() {
//   return (
//     <div className="mt-8 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
//       {places.length > 0 &&
//         places.map((place) => (
//           <Link to={"/place/" + place._id}>
//             <div className="bg-gray-500 mb-2 rounded-2xl flex">
//               {place.photos?.[0] && (
//                 <Image
//                   className="rounded-2xl object-cover aspect-square"
//                   src={place.photos?.[0]}
//                   alt=""
//                 />
//               )}
//             </div>
//             <h2 className="font-bold">{place.address}</h2>
//             <h3 className="text-sm text-gray-500">{place.title}</h3>
//             <div className="mt-1">
//               <span className="font-bold">{place.price} TND</span> per night
//             </div>
//           </Link>
//         ))}
//     </div>
//   );
// }

// export default function SearchBar() {
//   const [places, setPlaces] = useState([]);
//   const [input, setInput] = useState("");
//   const [output, setOutput] = useState([]);

//   useEffect(() => {
//     axios.get("/places").then((response) => {
//       setPlaces(response.data);
//     });
//   }, []);

//   useEffect(() => {
//     setOutput([]);
//     places.filter((place) => {
//       if (place.address.toLowerCase().includes(input.toLowerCase())) {
//         setOutput((output) => [...output, place]);
//       }
//     });
//   }, [input, places]);

//   return (
//     <div>
//       <div className="flex  items-center ">
//         <div className="Search-bar">
//           <input
//             onChange={(e) => setInput(e.target.value)}
//             type="text"
//             placeholder="Search"
//           />
//         </div>

//         <button
//           onClick={SearchBarResults}
//           className="bg-primary text-white p-4 ml-2 rounded-full"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="size-5"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
//             />
//           </svg>
//         </button>

//         {/* <div className="output">
//         {output.map((place) => (
//           <p>{place.address}</p>
//         ))}
//       </div> */}
//       </div>
//       {/* the IndexPage elements */}
//     </div>
//   );
// }
