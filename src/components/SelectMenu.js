import React, { useState, useEffect } from "react";

const SelectMenu = ({ handleSelected, templates }) => {
  const templateList = templates.map((template) => {
    return <option value={template}>{template}</option>;
  });
  return (
    <div>
      <select onChange={(e) => handleSelected(e)}>{templateList}</select>
    </div>
  );
};

export default SelectMenu;
