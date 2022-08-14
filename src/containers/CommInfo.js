import React from "react";

export const CommInfo = () => {
  return (
    <div>
      <div>
        <select>
          <option>Brookchase</option>
          <option>Tysons Forest</option>
        </select>
      </div>
      <div>
        <label htmlFor="info-title">Title</label>
        <input name="info-title" type="text" />
      </div>
      <div>
        <label htmlFor="info-description">Description</label>
        <input name="info-description" type="text" />
      </div>
    </div>
  );
};
