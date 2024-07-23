import React from "react";
function Navbar(){
    return(
        <div class="navbar">
     
        <div class="navbar__s1">
        <h1 class="navbar__s1__title">udemy</h1>
        </div>

        <div class="navbar__s2">
            <i class="fa-solid fa-magnifying-glass"  style={{color: "black"}}></i>
            <input type="text" placeholder="search for any thing here"/>
        </div>

        <div class="navbar__s3">
         <p>course</p>
          <p>mylearning</p> 
         <div class="mylearning">
            <p>my learning</p>
            <div class="mylearning__popup"><p>you did not purchaseing yet</p></div>
            
         </div>
         <i class="fa-solid fa-cart-shopping" style={{color: "#000000"}}></i>
         <i class="fa-solid fa-bell" style={{color: "#010409"}}></i>
         <i class="fa-solid fa-user" style={{color: "#010813"}}></i>  
        </div>
        
        <div class="navbar__s4">
            <i class="fa-solid fa-bars"></i>
        </div>

    </div>
    )
}

export default Navbar