import React from "react";
import TopLinks from "./Components/TopLinks";
import Header from "./Components/Header";
import FirstSlide from "./Components/FirstSlide";
import SecondSlide from "./Components/SecondSlide";
import ThirdSlide from "./Components/ThirdSlide";
import FourthSlide from "./Components/FourthSlide";
import Services from "./Components/Services";
import Team from "./Components/Team";
import FeedBack from "./Components/FeedBack";
import Footer from "./Components/Footer";

//Main Function
function Page() {
  return (
    <div>
      <TopLinks />
      <Header />
      <FirstSlide />
      <SecondSlide />
      <ThirdSlide />
      <FourthSlide />
      <Services />
      <Team />
      <FeedBack />
      <Footer />
    </div>
  );
}

export default Page;
