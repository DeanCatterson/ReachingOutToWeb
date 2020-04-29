import React, { Component } from "react";

import "./Banner.css";

class Banner extends Component {
  render() {
    return (
      <article className="Banner">
        <h1 className='Title'>Deans Post generator</h1>
        <div className="BannerInfo">
          <div className="BannerDesc">
            Below are examples of some common Posts that can be used to reach
            out to the web.
          </div>
          <div className="BannerFoot">
            =========================
          </div>
        </div>
      </article>
    );
  }
}

export default Banner;
