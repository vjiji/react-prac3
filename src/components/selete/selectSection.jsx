import React, { useState } from 'react';
import styled from 'styled-components';
import Select from './Select';

const Container = styled.div`
  display: flex;
  flex-direction: row; /* 가로로 배치 */
  align-items: flex-start;
  margin-bottom: 10px;
`;

const SelectSection = () => {
  const [showOptions1, setShowOptions1] = useState(false);
  const [selectedOption1, setSelectedOption1] = useState('');
  const [showOptions2, setShowOptions2] = useState(false);
  const [selectedOption2, setSelectedOption2] = useState('');

  const toggleOptions1 = () => {
    setShowOptions1(!showOptions1);
  };

  const toggleOptions2 = () => {
    setShowOptions2(!showOptions2);
  };

  const handleOptionClick1 = (item) => {
    setSelectedOption1(item);
    toggleOptions1();
  };

  const handleOptionClick2 = (item) => {
    setSelectedOption2(item);
    toggleOptions2();
  };

  return (
    <Container>
      <Select 
        show={showOptions1} 
        showOptions={toggleOptions1} 
        onClick={handleOptionClick1} 
      />
      <Select 
        show={showOptions2} 
        showOptions={toggleOptions2} 
        onClick={handleOptionClick2} 
      />
    </Container>
  );
}

export default SelectSection;
