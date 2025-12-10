import React, { useState } from "react";
import Errorbox from "../Errorbox/Errorbox";
import AddNewOff from "../AddNewOff/AddNewOff";
import OffsTable from "./../OffsTable/OffsTable";
import { allOffInShop } from "./../../Datas";

export default function Offs() {
  const [allOff, setAllOff] = useState(allOffInShop);
  return (
    <div>
      <AddNewOff />
      {allOff ? <OffsTable /> : <Errorbox msg="هیچ کد تخفیفی یافت نشد" />}
    </div>
  );
}
