import React from "react";
import c1 from "./assets/images/c1.jpg";
import c2 from "./assets/images/c2.jpg";
import c3 from "./assets/images/c3.jpg";
import c4 from "./assets/images/c4.jpg";



function Recommended() {
  return (
    <div class="Recommended">
      <h1 class="recommended__title">recommended for you </h1>
      <p>pic the best fit </p>
      <div class="recommended__container">
        <div class="course-card">
          <img src={ c1 } alt=""/>
          <h3> python data visaulisation mastercalss</h3>
          <p> col steele</p>
          <p>4.9⭐⭐⭐⭐</p>
          <p>
          
            <del>1999</del>
          </p>
        </div>

        <div class="course-card">
          <img src={ c2 } alt="" />
          <h3> web development </h3>
          <p> col steele</p>
          <p>3.2⭐⭐⭐</p>
          <p>
            499 <del>2999</del>
          </p>
        </div>

        <div class="course-card">
          <img src={ c3 } alt=" " />
          <h3> master ui/ux design figma</h3>
          <p> col steele</p>
          <p>4.5⭐⭐⭐⭐</p>
          <p>
            499 <del>1599</del>
          </p>
        </div>

        <div class="course-card">
          <img src={ c4 } alt="pasupathi" />
          <h3> basic to advance programming with emc</h3>
          <p> col steele</p>
          <p>3.4⭐⭐⭐</p>
          <p>
            499 <del>1555</del>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Recommended
