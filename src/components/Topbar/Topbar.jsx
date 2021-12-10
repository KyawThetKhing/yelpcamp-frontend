import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ArrowBack } from "@material-ui/icons";
import { ReactComponent as Logo } from "../../assets/images/Logo.svg";
import { removeUser } from "redux/userSlice";
import "./Topbar.scss";

const Topbar = ({ isBack = true }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.currentUser);

  const handleLogout = e => {
    dispatch(removeUser);
    localStorage.clear();
    navigate("auth");
  };

  return (
    <div className="topbar">
      <div className="topbar__left">
        <Logo className="topbar__logo" onClick={() => navigate("/")} />
        <div className="topbar__home" onClick={() => navigate("camps")}>
          Home
        </div>
      </div>
      {isBack && (
        <div className="topbar__back">
          <ArrowBack className="topbar__backIcon" />
          <p className="topbar__backText">Back to campgrounds</p>
        </div>
      )}
      <div className="topbar__right">
        <div className="topbar__userName">{user?.username}</div>
        <div className="topbar__logout" onClick={handleLogout}>
          {pathname !== "/auth" && (user ? "Logout" : "Login")}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
