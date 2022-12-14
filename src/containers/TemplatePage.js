import React, { useState } from 'react';
import InputComponent from '../components/InputComponent';

import BlankTemplate from '../templates/BlankTemplate';
import SelectMenu from '../components/SelectMenu';
import PasswordReset from '../templates/PasswordReset';
import styled from 'styled-components';
const StyledTemplatePage = styled.div`
  margin: 1rem;
`;

const TemplatePage = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [community, setCommunity] = useState('');
  const [issue, setIssue] = useState('');
  const [emailContent, setEmailContent] = useState('');
  const [templates] = useState(['blank', 'password-reset']);
  const [accountNumber, setAccountNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');

  const [selectedTemplate, setSelectedTemplate] = useState('blank');

  const handleNameChange = (value) => {
    setName(value.target.value);
  };
  const handleAddressChange = (value) => {
    setAddress(value.target.value);
  };
  const handleCommunityChange = (value) => {
    setCommunity(value.target.value);
  };
  const handleIssueChange = (value) => {
    setIssue(value.target.value);
  };

  const handleAccountNumberChange = (value) => {
    setAccountNumber(value.target.value);
  };
  const handleEmailChange = (value) => {
    setEmailAddress(value.target.value);
  };

  const resetForm = () => {
    setName('');
    setAccountNumber('');
    setEmailAddress('');
    setAddress('');
    setCommunity('');
    setIssue('');
    setSelectedTemplate('blank');
  };

  const templateContent = (data) => {
    setEmailContent(data);
  };

  const handleSelected = (e) => {
    setSelectedTemplate(e.target.value);
  };

  const templateTest = [
    {
      value: 'blank',
      component: (
        <BlankTemplate
          name={name}
          address={address}
          community={community}
          issue={issue}
          templateContent={templateContent}
          key='blankTemplateKey'
        />
      ),
    },
    {
      value: 'password-reset',
      component: (
        <PasswordReset
          name={name}
          address={address}
          community={community}
          accountNumber={accountNumber}
          key='passwordResetKey'
        />
      ),
    },
  ];

  const renderTemplate = templateTest.map((obj) => {
    if (obj.value === selectedTemplate) {
      return obj.component;
    }
    return null;
  });

  return (
    <StyledTemplatePage>
      <h1>Template App</h1>
      <div>
        <SelectMenu
          handleSelected={handleSelected}
          value={selectedTemplate}
          templates={templates}
        />

        <InputComponent
          componentName='Email address'
          handleChange={handleEmailChange}
          value={emailAddress}
        />
        <InputComponent
          componentName='Name'
          handleChange={handleNameChange}
          value={name}
        />
        <InputComponent
          componentName='Address'
          handleChange={handleAddressChange}
          value={address}
        />
        <InputComponent
          componentName='Community'
          handleChange={handleCommunityChange}
          value={community}
        />

        <InputComponent
          componentName='Account Number'
          handleChange={handleAccountNumberChange}
          value={accountNumber}
        />

        <InputComponent
          componentName='Issue'
          handleChange={handleIssueChange}
          value={issue}
        />
      </div>
      {renderTemplate}

      <button
        onClick={() => {
          resetForm();
        }}
      >
        RESET
      </button>
      <a
        href={`mailto:${emailAddress}?subject=${address + ' '}-${'' + issue} `}
      >
        Mail
      </a>
      <button onClick={() => console.log(emailContent.querySelector('h3'))}>
        Test Content
      </button>
    </StyledTemplatePage>
  );
};

export default TemplatePage;
