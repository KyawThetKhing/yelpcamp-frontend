import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

//local imports
import { ReactComponent as SearchIcon } from "../../assets/images/Search Icon.svg";
import Topbar from "../../components/Topbar";
import { getAllCamps } from "../../redux/apiCalls";
import "./CampPage.scss";

const CampPage = () => {
  const campList = useSelector(state => state.camp.campList);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    getAllCamps(dispatch);
  }, [dispatch]);

  console.log("campList", campList);

  return (
    <div className="camp">
      <div className="camp__designer">
        This project was made by Colt Steele and designed by Codewell
      </div>
      <div className="camp__container">
        <div className="camp__topbar">
          <Topbar isBack={false} />
        </div>
        <div className="camp_searchBanner">
          <div className="camp__searchContent">
            <h3 className="camp__searchTitle">Welcome to YelpCamp</h3>
            <p className="camp__searchSubTitle">
              View our hand-picked campgrounds from all over the world or add
              your own
            </p>
            <div className="camp__searchInputContainer">
              <SearchIcon className="camp__searchIcon" />
              <input
                className="camp__searchInput"
                type="text"
                placeholder="Serach for camps"
              />
              <button className="camp__searchBtn">Search</button>
            </div>
            <div
              className="camp__addUROwnCamp"
              onClick={() => navigate("/newcamp")}
            >
              Or add your own camp ground
            </div>
          </div>
        </div>
        <div className="camp__campListWrapper">
          {campList.map((camp, index) => (
            <div className="camp__campListContainer" key={index}>
              <img src={camp.imageUrl} alt={camp.name} className="camp__img" />
              <div className="camp__name">{camp?.name} </div>
              <div className="camp__desc">{camp?.description} </div>
              <button
                className="camp__campBtn"
                onClick={() => navigate(`/camps/${camp._id}`)}
              >
                View Campground
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CampPage;
