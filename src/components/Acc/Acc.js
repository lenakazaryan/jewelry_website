import  "./Acc.css";
import HaederAcc from "./HeaderAcc/HaederAccSection";
import DescCard from "./Description_Card/card_description";
import descCardArray from "./AccData"

function Acc() {
  
  return (
      <div className = "AccMain">
          <HaederAcc />  
          <DescCard data = {descCardArray}/>
          <h1>We want to give every woman the means to style her own look with our small decorative items of personal adornment: brooches, rings, necklaces, earrings, pendants, cufflinks, and bracelets.</h1>
      </div>
  )
}

export default Acc;
