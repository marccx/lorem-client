import React, { useEffect } from "react";

export const GeneratedText = ({ genText }) => {
  
  return (
    <div className="generated-text">
       {genText.map((answer, i) => {
        return <p key={i}>{
          answer
        }</p>;
      })}
    </div>
  );
};