import React, { useState } from "react";

const commList = [{ name: "Brookchase" }, { name: "Tysons Forest" }];
export const Communities = () => {
  return (
    <div>
      {commList.map((comm) => {
        return (
          <div>
            <h3>{comm.name}</h3>
          </div>
        );
      })}
    </div>
  );
};
