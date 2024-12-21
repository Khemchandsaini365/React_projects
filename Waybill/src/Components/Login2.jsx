import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../Image/EasyTrade.png";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const navigate = useNavigate();

  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [focus, setFocus] = useState(1);
  const phoneRef = useRef(null);
  const passwordRef = useRef(null);
  const btnRef = useRef(null);
  console.log(focus, "focus");

  const Login = (user, pwd) => {
    // console.log({ user, pwd }, "i am inside top of the function");
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify({
      tokenData:
        "b2dBQUFCK0xDQUFBQUFBQUJBQ3JWZ3BPTFNwTExmSkx6RTFWc2xJcVRqZkt5OG10TEM3TU1TL0lLYzdXSzA1TkxpMUtMUVlyMGN0TExWSFNnYW9QeUM4cUFhbzNOall3ZzR1RkF0VUJ4VUpjZzBNOC9kemp3eDBqblR4OWZCQmFFb3VMeS9PTFVvQktEQlF6RFhOTWlzMEQ0Wkl1VGxBWG9PdXVCUUNEbHRXQ29nQUFBQT09",
      user,
      pwd,
    });
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://waybillback.eterp.in/VerifyLogin", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.status) {
          toast("Login Successfully!");
          navigate("/Dashboard");
          localStorage.setItem("user", result?.data?.UserName);
        } else {
          toast(result.error);
        }
      })
      .catch((error) => console.error(error));
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   alert(`Phone number in E.164 format: ${phoneNumber}`);
  // };

  return (
    <div>
      <ToastContainer />
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-4 col-md-6 col-sm-12 m-auto">
            <div className="card p-5 bg-transparent">
              <img src={logo} style={{ width: "100%" }} />
              <div
                className="text-center"
                style={{ fontSize: "26px", fontWeight: 400, color: "#fff" }}
              >
                E-Way Bill Recharge
              </div>
              {/* <div
                className="text-center"
                style={{
                  fontSize: "16px",
                  fontWeight: 400,
                  color: "#ffffff60",
                }}
              >
                Continue with your number and password
              </div> */}
              <div className="mt-4">
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "#ffffff",
                  }}
                >
                  Username:
                </div>

                <input
                  ref={phoneRef}
                  autoFocus={focus === 1}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  onKeyDown={(e) => {
                    const { key } = e;
                    if (key === "Enter") {
                      // setPhoneNumber(target.value);
                      passwordRef.current.focus();
                      setFocus(2);
                    }
                  }}
                  className="form-control username"
                  type="text"
                  placeholder="User"
                />
                {/* <div
                  className="text-start"
                  style={{
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "#ffffff60",
                  }}
                >
                  Be sure to enter your WhatsApp Number
                </div> */}
                <div className="mt-3">
                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: 400,
                      color: "#ffffff",
                    }}
                  >
                    Password
                  </div>
                  <input
                    ref={passwordRef}
                    autoFocus={focus === 2}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={(e) => {
                      const { key, target } = e;
                      if (key === "Enter") {
                        // setPassword(target.value);
                        btnRef.current.focus();
                        setFocus(3);
                      }
                    }}
                    className="form-control password"
                    type="password"
                    name="password"
                    placeholder="*****"
                  />
                </div>
              </div>
              {/* <Link
                className="text-center mt-3"
                style={{
                  fontSize: "16px",
                  fontWeight: 400,
                  color: "#ffffff",
                  cursor: "pointer",
                }}
              >
                Forgot Your Password
              </Link> */}
              <button
                ref={btnRef}
                autoFocus={focus === 3}
                onClick={() => Login(phoneNumber, password)}
                className="btn btn-light mt-3 lg-btn"
                style={{ fontSize: "15px", fontWeight: 500, color: "#000" }}
              >
                {/* Continue with my account */}
                Login
              </button>
              {/* <div className="p-3 mb-3">
                <div
                  className="text-center"
                  style={{
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "#ffffff60",
                  }}
                >
                  By clicking continue, you agree to our{" "}
                  <Link
                    className="text-center mt-3"
                    style={{
                      fontSize: "16px",
                      fontWeight: 400,
                      color: "#ffffff",
                      cursor: "pointer",
                    }}
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    className="text-center mt-3"
                    style={{
                      fontSize: "16px",
                      fontWeight: 400,
                      color: "#ffffff",
                      cursor: "pointer",
                    }}
                  >
                    Privacy Policy
                  </Link>
                  .
                </div>
              </div> */}
              {/* <Link
                className="text-center mt-2"
                style={{
                  fontSize: "16px",
                  fontWeight: 400,
                  color: "#ffffff",
                  cursor: "pointer",
                }}
              >
                Not a user? Sign up now
              </Link> */}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="alert alert-info mt-3" style={{ display: phoneNumber ? 'block' : 'none' }}>
        Phone number in E.164 format: <strong>{phoneNumber}</strong>
      </div> */}
    </div>
  );
}

// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import logo from "../Image/EasyTrade.png";
// import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function Login() {
//   const navigate = useNavigate();

//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [password, setPassword] = useState("");
//   const [focus, setFocus] = useState(1);

//   const handleLogin = (e) => {
//     e.preventDefault(); // Prevent default form submission

//     const myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");
//     const raw = JSON.stringify({
//       tokenData:
//         "b2dBQUFCK0xDQUFBQUFBQUJBQ3JWZ3BPTFNwTExmSkx6RTFWc2xJcVRqZkt5OG10TEM3TU1TL0lLYzdXSzA1TkxpMUtMUVlyMGN0TExWSFNnYW9QeUM4cUFhbzNOall3ZzR1RkF0VUJ4VUpjZzBNOC9kemp3eDBqblR4OWZCQmFFb3VMeS9PTFVvQktEQlF6RFhOTWlzMEQ0Wkl1VGxBWG9PdXVCUUNEbHRXQ29nQUFBQT09",
//       user: phoneNumber,
//       pwd: password,
//     });

//     const requestOptions = {
//       method: "POST",
//       headers: myHeaders,
//       body: raw,
//       redirect: "follow",
//     };

//     fetch("https://waybillback.eterp.in/VerifyLogin", requestOptions)
//       .then((response) => response.json())
//       .then((result) => {
//         if (result.status) {
//           toast("Login Successfully!");
//           navigate("/Dashboard");
//           localStorage.setItem("user", result?.data?.UserName);
//         } else {
//           toast(result.error || "Login failed. Please try again.");
//         }
//       })
//       .catch((error) => toast.error("An error occurred: " + error.message));
//   };

//   return (
//     <div>
//       <ToastContainer />
//       <div className="container">
//         <div className="row mt-5">
//           <div className="col-lg-4 col-md-6 col-sm-12 m-auto">
//             <div className="card p-5 bg-transparent">
//               <img src={logo} style={{ width: "100%" }} alt="Logo" />
//               <div
//                 className="text-center"
//                 style={{ fontSize: "26px", fontWeight: 400, color: "#fff" }}
//               >
//                 E-Way Bill Recharge
//               </div>

//               <form onSubmit={handleLogin} className="mt-4">
//                 <div
//                   style={{
//                     fontSize: "16px",
//                     fontWeight: 400,
//                     color: "#ffffff",
//                   }}
//                 >
//                   Username:
//                 </div>
//                 <input
//                   autoFocus={focus == 1}
//                   className="form-control username"
//                   type="text"
//                   placeholder="User"
//                   value={phoneNumber}
//                   onChange={(e) => {
//                     setPhoneNumber(e.target.value);
//                     setFocus(2);
//                   }}
//                 />

//                 <div className="mt-3">
//                   <div
//                     style={{
//                       fontSize: "16px",
//                       fontWeight: 400,
//                       color: "#ffffff",
//                     }}
//                   >
//                     Password
//                   </div>
//                   <input
//                     autoFocus={focus == 2}
//                     className="form-control password"
//                     type="password"
//                     name="password"
//                     placeholder="*****"
//                     value={password}
//                     onChange={(e) => {
//                       setPassword(e.target.value);
//                       setFocus(3);
//                     }}
//                   />
//                 </div>

//                 <div className="mt-3">
//                   <button
//                     type="submit"
//                     className="btn btn-light mt-3 lg-btn"
//                     style={{ fontSize: "15px", fontWeight: 500, color: "#000" }}
//                   >
//                     Login
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
