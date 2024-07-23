import Footer from "./Footer";
import Navbar from "./Navbar";
import Popular from "./Popular";
import Recommended from "./Recommended";

import Saleimage from "./Saleimage";
import Second from "./Second";
import Topics from "./Topics";

function App(){
    return(
        
        <div>
        <Navbar />
        <Second />
        <Saleimage/>
        <Recommended/>
        <Topics/>
        <Popular/>
        <Footer/>
    
        </div>
        
        
    
    )
}


export default App