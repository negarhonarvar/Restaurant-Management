import React, { useState } from "react";
import { IoLogoSlack } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { login_API } from "../../api/AuthController";
import "./AdminLogin.css";
export const AdminLogin = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.username === "" || data.password === "") {
      notify("please fill all fields!", "error");
    } else {
      const loginData = { email: data.email, password: data.password };
      try {
        const res = await login_API(loginData);
        localStorage.setItem("Token", JSON.stringify(res.data.token));
        notify("successfylly logged in!", "success");
      } catch (error) {
        notify(error.response.data, "error");
      }
    }
  };

  const notify = (msg, type) => {
    if (type === "error") {
      toast.error(msg, {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
    } else if (type === "success") {
      toast.success(msg, {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div className="Auth">
      {/* left side */}
      <div className="a-left">
        <IoLogoSlack
          style={{ color: "var(--blue)", width: "4rem", height: "4rem" }}
        />
        <div className="Wbname">
          <h1>Restaurant</h1>
          <h6>Your favorite Restaurant app</h6>
        </div>
      </div>
      {/* right side */}
      <div className="right">
        <form className="infoForm">
          <h3>{"Web Admin Login"}</h3>
          <div>
            <input
              type="text"
              className="infoInput"
              name="text"
              placeholder="Username"
              onChange={handleChange}
              value={data.email}
            />
          </div>
          <div>
            <input
              type="password"
              className="infoInput"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={data.password}
            />
          </div>

          <button
            className="button"
            id="infoButton"
            type="submit"
            onClick={handleSubmit}
          >
            Login
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};
