import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

//local imports
import { login, register } from "../../redux/apiCalls";
import "./Auth.scss";

const Auth = () => {
  const currentUser = useSelector(state => state.user.currentUser);
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Current User", currentUser);
    if (currentUser) {
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
      navigate("/", { replace: true });
    }
  }, [currentUser]);

  const handleLogin = e => {
    e.preventDefault();
    console.log("E", username, password);
    login(dispatch, { username, password });
  };

  const handleRegister = e => {
    e.preventDefault();
    console.log("E", username, password);
    register({ username, password });
  };
  return (
    <div className="auth">
      <h4 className="auth__title">
        Start exploring camps from all aroung the world
      </h4>
      <form className="auth__form">
        <label className="auth__label" htmlFor="username">
          Username
        </label>
        <input
          className="auth__input"
          type="text"
          id="username"
          placeholder="johndoe91"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <label className="auth__label" htmlFor="password">
          Password
        </label>
        <input
          className="auth__input"
          type="password"
          id="password"
          placeholder="johndoe91"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        {isLogin && (
          <button type="submit" className="auth__button" onClick={handleLogin}>
            Login
          </button>
        )}
        {!isLogin && (
          <button
            type="submit"
            className="auth__button"
            onClick={handleRegister}
          >
            Create
          </button>
        )}
      </form>
      <div className="auth__notUser">
        Not a user yet?{" "}
        {isLogin ? (
          <span onClick={e => setIsLogin(false)}>Create and account</span>
        ) : (
          <span onClick={e => setIsLogin(true)}>Sign In</span>
        )}
      </div>
    </div>
  );
};

export default Auth;
