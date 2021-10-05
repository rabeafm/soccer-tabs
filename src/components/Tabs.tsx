import React, { useState } from "react";
import Tab from "./Tab";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTab = (num:number) => {
    setActiveTab(num);
  };
  
  return (
    <div className="Tabs">
      <ul className="nav">
        <li className={activeTab === 1 ? "active" : ""} onClick={()=>handleTab(1)}>English League</li>
        <li className={activeTab === 2 ? "active" : ""} onClick={()=>handleTab(2)}>German Bundesliga</li>
        <li className={activeTab === 3 ? "active" : ""} onClick={()=>handleTab(3)}>Italian Serie A</li>
        <li className={activeTab === 4 ? "active" : ""} onClick={()=>handleTab(4)}>French Ligue 1</li>
        <li className={activeTab === 5 ? "active" : ""} onClick={()=>handleTab(5)}>Spanish La Liga</li>
      </ul>
      <div className="outlet">
        {activeTab === 1 ? <Tab league="English Premier League"/> : ""}
        {activeTab === 2 ? <Tab league="German Bundesliga"/> : ""}
        {activeTab === 3 ? <Tab league="Italian Serie A"/> : ""}
        {activeTab === 4 ? <Tab league="French Ligue 1"/> : ""}
        {activeTab === 5 ? <Tab league="Spanish La Liga"/> : ""}
      </div>
    </div>
  );
};
export default Tabs;