import React from "react";
import { useState } from "react";

const TemplateOption = ({ template }) => {
  return (
    <div>
      <select onChange={template}>
        <option selected>Blank Template</option>
        <option>Test</option>
      </select>
    </div>
  );
};

export default TemplateOption;
