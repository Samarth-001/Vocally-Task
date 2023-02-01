//libraries import
import React from "react";

//components import
import Navbar from "./components/navbar.js"
import Footer from "./components/footer.js"
import Homepage from "./pages/homepage.js"

function App() {
  return (
    <>
    <div
    //  style={{padding:"0px 8%",backgroundColor:"#10171e"}}
     >
      <Navbar />
      <Homepage/>
      <Footer />
    </div>
    </>
  );
}

export default App;
