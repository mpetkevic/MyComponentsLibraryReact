import styled from "styled-components";

export const InputWrapper = styled.div`
  display: inline-block;
  border: 1px dashed black;
  width: 200px;
  box-sizing: border-box;
`;

export const Label = styled.label`
  display: block;
  font-size: 14px;
`;

export const InputFieldWrapper = styled.div`
  border: 1px solid black;
  border-radius: 4px;
  height: 30px;
  display: flex;
  align-items: center;
  padding: 2px;
  outline: none;
  transition: all 0.25s;

  i {
    font-size: 20px;
  }
  
  &:hover, &:focus-within {
    border: 1px solid #a610e7;
    
    i {
    color: #a610e7;
    }
  }
`;

export const InputField = styled.input`
  height: 100%;
  width: 100%;
  outline: none;
  border: none;
  font-size: 18px;
  line-height: 20px;
`;

export const Arrow = styled.i`
  cursor:pointer;
`;

export const Modal = styled.div`
  border: 1px solid black;
  border-radius: 4px;
  height: 130px;
  display: flex;
  flex-direction: column;
  outline: none;
  padding: 2px;
  
`;

export const OptionsWrapper = styled.div`
  height: 100%;
`;

export const Option = styled.li`
  list-style: none;
  border-bottom: 1px solid gray;
  cursor:pointer;
  transition: all 0.25s;
  
  &:last-child {
  border-bottom: none;
  }
  
  &:hover {
  color: white;
  background-color: #a610e7;
  }
`;
