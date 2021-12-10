import React from "react";
import "./LoginPage.scss";
import Topbar from "../../components/Topbar";
import Auth from "../../components/Auth";

const LoginPage = () => {
  return (
    <div className="loginPage">
      <div className="loginPage__leftWrapper">
        <div className="loginPage__topbar">
          <Topbar isBack={false} />
        </div>
        <div>
          <Auth />
        </div>
      </div>
      <div className="loginPage__rightWrapper">
        <p>
          "YelpCamp has honestly saved me hours of research time and the camps
          on here are definitely well picked and added."
        </p>
        <div className="loginPage__user">
          <img
            className="loginPage__userLogo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDH9xgP9Bc9uM2kbyb9uXNpdKONt7Veg_sMQ&usqp=CAU"
            alt="user-logo"
          />
          <div className="loginPage__userInfo">
            <h3>May Andrews</h3>
            <span>Professional Hiker</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
