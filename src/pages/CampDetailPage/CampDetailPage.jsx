import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//local imports
import Topbar from "components/Topbar";
import "./CampDetailPage.scss";
import Map from "components/Map/Map";
import CampDetail from "components/CampDetail";
import Comments from "components/Comments";
import { getCampInfo } from "redux/apiCalls";
import { useParams } from "react-router";

const CampDetailPage = () => {
  const dispatch = useDispatch();
  const { campId } = useParams();
  const campInfo = useSelector(state => state.camp.campInfo);

  useEffect(() => {
    getCampInfo(dispatch, campId);
  }, [campId, dispatch]);

  return (
    <div className="campDetailPage">
      <Topbar isBack={false} />
      <div className="campDetailPage__wrapper">
        <div className="campDetailPage__left">
          <Map />
        </div>
        <div className="campDetailPage__right">
          <CampDetail campInfo={campInfo} />
          <Comments campInfo={campInfo} />
        </div>
      </div>
    </div>
  );
};

export default CampDetailPage;
