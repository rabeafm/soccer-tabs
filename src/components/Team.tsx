import React from "react";

const Team = (name:string, image:string) => {
  return (
    <div className="Team">
      <img src={image} alt={name} />
      <h2></h2>
    </div>
  );
};
export default Team;

