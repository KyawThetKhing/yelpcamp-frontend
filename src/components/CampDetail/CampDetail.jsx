import React from "react";

import "./CampDetail.scss";

const CampDetail = ({ campInfo }) => {
  console.log("CampInfo", campInfo);
  return (
    <div className="campDetail">
      <img
        src={campInfo?.imageUrl}
        alt={campInfo?.name}
        className="campDetail__img"
      />
      <div className="campDetail__priceWrapper">
        <div className="campDetail__name">{campInfo?.name}</div>
        <div className="campDetail__price">MMK{campInfo?.price}/night</div>
      </div>
      <div className="campDetail__desc">{campInfo?.description}</div>
      <div className="campDetail__owner">Submitted by Andrew</div>
    </div>
  );
};

export default CampDetail;
