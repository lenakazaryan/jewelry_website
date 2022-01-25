import  "./Acc.css";
import HaederAcc from "./HeaderAcc/HaederAccSection";
import DescCard from "./Description_Card/card_description";
import descCardArray,{imagesInfo} from "./AccData"
import LinkedImgSection from "../Home/LinkedImgSection/LinkedImgSection"


function Acc() {
  
  return (
      <div className = "AccMain">
          <HaederAcc />  
          <DescCard data = {descCardArray}/>
          <h3>We want to give every woman the means to style her own look with our small decorative items of personal adornment: brooches, rings, necklaces, earrings, pendants, cufflinks, and bracelets.</h3>
          <LinkedImgSection data={imagesInfo} />
      </div >
  )
}

export default Acc;
