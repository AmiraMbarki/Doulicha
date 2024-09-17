// import { Link, Navigate } from "react-router-dom";
// import { useContext, useState } from "react";
// import axios from "axios";
// import { UserContext } from "../UserContext.jsx";

// export default function LoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [redirect, setRedirect] = useState(false);
//   const { setUser } = useContext(UserContext);

//   async function handleLoginSubmit(ev) {
//     ev.preventDefault();
//     try {
//       const { data } = await axios.post("/login", { email, password });
//       setUser(data);
//       alert("Login successful");

//       setRedirect(true);
//     } catch (error) {
//       alert("Login failed");
//     }
//   }

//   if (redirect) {
//     return <Navigate to={"/"} />;
//   }

//   return (
//     <div className="mt-4 grow flex items-center justify-around">
//       <div className="mb-64">
//         <h1 className="font-bold text-2xl text-center mb-4">Login</h1>
//         <form className="max-w-md mx-auto" onSubmit={handleLoginSubmit}>
//           <input
//             type="email"
//             placeholder="your@email.com"
//             value={email}
//             onChange={(ev) => setEmail(ev.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="password"
//             value={password}
//             onChange={(ev) => setPassword(ev.target.value)}
//           />
//           <button className="primary border border-black">Login</button>
//           <div className="text-center py-2 text-gray-200">
//             Don't have an account yet?
//             <Link className="underline text-black" to={"/register"}>
//               Register now
//             </Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// VERSION improuved of the LoginPage down

import { Link, Navigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../UserContext.jsx";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUser } = useContext(UserContext);
  // const navigate = useNavigate();

  async function handleLoginSubmit(ev) {
    ev.preventDefault();
    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }
    try {
      const { data } = await axios.post("/login", { email, password });
      setUser(data);
      alert("Login successful");
      setRedirect(true);
      // if (data.isAdmin) {
      //   navigate("/admin");
      // } else {
      //   navigate("/");
      // }
    } catch (error) {
      if (error.response) {
        alert(error.response.data.error || "Login failed");
      } else if (error.request) {
        alert("No response from server");
      } else {
        alert("Error in request setup");
      }
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="font-bold text-2xl text-center mb-4">Login</h1>
        <form className="max-w-md mx-auto" onSubmit={handleLoginSubmit}>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            className="border p-2 rounded mb-4 w-full"
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
            className="border p-2 rounded mb-4 w-full"
          />
          <button className="primary border border-black p-2 rounded">
            Login
          </button>
          <div className="text-center py-2 text-gray-200">
            Don't have an account yet?
            <Link className="underline text-black" to={"/register"}>
              Register now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
