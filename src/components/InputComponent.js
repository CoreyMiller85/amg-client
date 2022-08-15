import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
margin: .5rem;
width: 100%;
display: flex;
justify-content: flex-start;
`;

const StyledLabel = styled.label`
margin-right: 1rem;
max-width: max-content;
`;

const StyledInput = styled.input`
  flex: 1;
  border: none;
  border-bottom: 1px solid gray;
`;

const InputComponent = ({
  componentName,
  handleChange,
  value,
  inputName,
  type = 'text',
}) => {
  const [inputContent, setInputContent] = useState('');

  return (
    <Wrapper>
      <StyledLabel>{componentName}: </StyledLabel>
      <StyledInput
        type={type}
        placeholder={componentName}
        onChange={(e) => handleChange(e)}
        value={value}
        name={inputName}
        autoComplete='off'
        data-lpignore='true'
      />
    </Wrapper>
  );
};

export default InputComponent;
