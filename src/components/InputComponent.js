import React from "react";
import { useState } from "react";

const InputComponent = ({ componentName, handleChange, value }) => {
  const [inputContent, setInputContent] = useState("");

  return (
    <div>
      <label>{componentName}: </label>
      <input
        placeholder={componentName}
        onChange={(e) => handleChange(e)}
        value={value}
      />
    </div>
  );
};

export default InputComponent;
