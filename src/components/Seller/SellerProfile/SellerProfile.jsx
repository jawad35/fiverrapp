import React from "react";
import "./style.css";
const SellerProfile = () => {
  return (
    <div className="container card">
      <div className="row">
        <div className="col-lg-3 col-md-3 col-xl-3 profile-card">
          <div className="avatar">
            <img
              src="https://img.etimg.com/thumb/msid-69381991,width-650,imgsize-594328,,resizemode-4,quality-100/hacker-1.jpg"
              alt="profile"
              width="140px"
              height="140px"
            />
            <div className="online-status">online</div>
          </div>
        </div>
        <div className="col-lg-9 col-md-9 col-xl-9">
          <div className="gigs">ACTIVE GIGS</div>
        </div>
      </div>
    </div>
  );
};

export default SellerProfile;
