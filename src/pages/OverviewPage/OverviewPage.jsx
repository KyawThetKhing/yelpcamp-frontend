import React from "react";
import { useNavigate } from "react-router-dom";

//local imports
import Topbar from "components/Topbar";
import { ReactComponent as Checkmark } from "assets/images/Checkmark.svg";
import { ReactComponent as Airbnb } from "assets/images/Airbnb.svg";
import { ReactComponent as Booking } from "assets/images/Booking.svg";
import { ReactComponent as PlumGuide } from "assets/images/Plum Guide.svg";
import "./OverviewPage.scss";

const OverviewPage = () => {
  const navigate = useNavigate();
  return (
    <div className="overview">
      <div className="overview__left">
        <div className="overveiw__topbar">
          <Topbar isBack={false} />
        </div>
        <div className="overview__desc">
          <div className="overview__descTitle">
            Explore the best camp on earth
          </div>
          <div className="overview__descSubtitle">
            Yelp camp is curated list of best camping spots on Earth.Unfiltered
            and unbiased reviews.
          </div>
          <div className="overview__list">
            <Checkmark className="overview__checkIcon" />
            <span className="overview__checkIconText">
              Add your own camp suggestions
            </span>
          </div>
          <div className="overview__list">
            <Checkmark className="overview__checkIcon" />
            <span className="overview__checkIconText">
              Leave reviews and experiences
            </span>
          </div>
          <div className="overview__list">
            <Checkmark className="overview__checkIcon" />
            <span className="overview__checkIconText">
              See locations for all camps
            </span>
          </div>
          <button className="overview__btn" onClick={() => navigate("/camps")}>
            View Campgrouds
          </button>
          <div className="overview__partner">
            <p>Partner with:</p>
            <div>
              <Airbnb className="overview_PartnerImg" />
              <Booking className="overview_PartnerImg" />
              <PlumGuide className="overview_PartnerImg" />
            </div>
          </div>
        </div>
      </div>
      <div className="overview__Right">
        {/* <img src={HeroImage} alt="" /> */}
      </div>
    </div>
  );
};
export default OverviewPage;
