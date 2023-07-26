// import React, { useContext } from "react";
// import { FaGoogle } from "react-icons/fa";
// import { useLocation, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../../providers/AuthProviders";

// const SocialLogin = () => {
//   const { googleSignIn } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const location = useLocation();

//   const from = location.state?.from?.pathname || "/";

//   const handleGoogleSignIn = () => {
//     googleSignIn().then((result) => {
//       const loggedInUser = result.user;

//     });
//   };

//   return (
//     <div>
//       <div className="divider"></div>
//       <div className="w-full text-center my-4">
//         <button
//           onClick={handleGoogleSignIn}
//           className="btn btn-primary w-full"
//         >
//           <FaGoogle></FaGoogle> SIGNIN WITH GOOGLE
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SocialLogin;
