import React from 'react';
import styled from 'styled-components';
const SelectMenu = ({ handleSelected, templates }) => {
  const templateList = templates.map((template) => {
    return <option value={template}>{template}</option>;
  });

  const Wrapper = styled.div`
    margin: 0.5rem;
    width: 40%;
    display: flex;
    justify-content: flex-start;
  `;

  const StyledLabel = styled.label`
    margin-right: 1rem;
  `;
  return (
    <Wrapper>
      <StyledLabel>Template: </StyledLabel>
      <select onChange={(e) => handleSelected(e)}>{templateList}</select>
    </Wrapper>
  );
};

export default SelectMenu;
