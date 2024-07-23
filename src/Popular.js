import React from "react";
import c6 from "./assets/images/c6 copy.jpg";
import c5 from "./assets/images/c5.jpg";
import c7 from "./assets/images/c7.jpg";
import c8 from "./assets/images/c8.jpg";

function Popular() {
    return (
        <div className="popular">
            <h1 className="popular-title">Most Popular</h1>
            <p className="popular-subtitle">The best fit one</p>
            <div className="popular-container">
                <div className="course-card">
                    <img src={c6} alt="Python Data Visualization Masterclass" />
                    <h3>Python Data Visualization Masterclass</h3>
                    <p>Col Steele</p>
                    <p>4.9⭐⭐⭐⭐</p>
                    <p><del>1999</del></p>
                </div>

                <div className="course-card">
                    <img src={c5} alt="Web Development" />
                    <h3>Web Development</h3>
                    <p>Col Steele</p>
                    <p>3.2⭐⭐⭐</p>
                    <p>499 <del>2999</del></p>
                </div>

                <div className="course-card">
                    <img src={c7} alt="Master UI/UX Design Figma" />
                    <h3>Master UI/UX Design Figma</h3>
                    <p>Col Steele</p>
                    <p>4.5⭐⭐⭐⭐</p>
                    <p>499 <del>1599</del></p>
                </div>

                <div className="course-card">
                    <img src={c8} alt="Basic to Advance Programming with EMC" />
                    <h3>Basic to Advance Programming with EMC</h3>
                    <p>Col Steele</p>
                    <p>3.4⭐⭐⭐</p>
                    <p>499 <del>1555</del></p>
                </div>

                <div className="course-card">
                    <img src={c6} alt="Python Data Visualization Masterclass" />
                    <h3>Python Data Visualization Masterclass</h3>
                    <p>Col Steele</p>
                    <p>4.9⭐⭐⭐⭐</p>
                    <p><del>1999</del></p>
                </div>

                <div className="course-card">
                    <img src={c5} alt="Web Development" />
                    <h3>Web Development</h3>
                    <p>Col Steele</p>
                    <p>3.2⭐⭐⭐</p>
                    <p>499 <del>2999</del></p>
                </div>

                <div className="course-card">
                    <img src={c7} alt="Master UI/UX Design Figma" />
                    <h3>Master UI/UX Design Figma</h3>
                    <p>Col Steele</p>
                    <p>4.5⭐⭐⭐⭐</p>
                    <p>499 <del>1599</del></p>
                </div>

                <div className="course-card">
                    <img src={c8} alt="Basic to Advance Programming with EMC" />
                    <h3>Basic to Advance Programming with EMC</h3>
                    <p>Col Steele</p>
                    <p>3.4⭐⭐⭐</p>
                    <p>499 <del>1555</del></p>
                </div>
            </div>
        </div>
    );
}

export default Popular;
