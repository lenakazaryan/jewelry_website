import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Acc from "../Acc/Acc";
import Shop from "../Shop/Shop";
import Inspiration from "../Inspiration/Inspiration";
import ContactUs from "../ContactUs/ContactUs";
import TermsConditions from "../Footer/TermsConditions/TermsConditions";
import PrivacyPolicy from "../Footer/PrivacyPolicy/PrivacyPolicy";

function Main() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acc" element={<Acc />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/inspiration" element={<Inspiration />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/policyprivacy" element={<PrivacyPolicy />} />
        <Route path="/termsconditions" element={<TermsConditions />} />
      </Routes>
    </div>
  );
}

export default Main;
