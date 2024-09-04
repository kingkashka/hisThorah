import React, { useState, useEffect } from "react";
import DNAHeader from "../components/DNAHeader";
import DNAOrgChart from "../components/DNAOrgChart";
import DNAData from "../componentData/DNAChartData";
import '/src/css/DNA.css';

function DNASmallPage() {
    return(
      <div className="DNASmall--Page col-sm- h-auto">
      <DNAHeader />
      <DNAOrgChart data={DNAData}/>
      </div>
    )
  
}
export default DNASmallPage;
