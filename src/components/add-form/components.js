import styled from 'styled-components';

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255,255,255,.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 90;
`;
export const Form = styled.form`
  background-color: white;
  padding: 25px 60px;
  width: 800px;
  top: 100px;
  left: calc(50% - 200px);
  border-radius: 5px;
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  border: 1px solid #104673;
  box-sizing: border-box;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.14);
  border-radius: 12px;
  
  & legend {
    font-family: Helvetica;
    font-size: 24px;
    color: #353535;
    margin-bottom: 33px;
    text-align: center;
  }
`;
export const Button = styled.button`
  border: none;
  background-color: #2196f3;
  padding: 10px 8px;
  margin: 0;
  border-radius: 5px;
  color: #f1f1f1;
  font-size: 14px;
  cursor: pointer;
  
  &:hover {
    opacity: .6;
  }
  
  &:active {
    opacity: .3;
  }
  
  &:disabled {
    opacity: .3;
    cursor: not-allowed;
  }
`;
export const InputsList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 40px;
  margin-bottom: 12px;
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  &:not(:last-of-type) {
    margin-bottom: 12px;
  }
  
  &.double {
    grid-column: span 2;
  }
  
  & .editor-label {
    color: #353535;
    
  }
`;
export const Label = styled.label`
  color: #999999;
  font-size: 12px;
  font-family: Helvetica;
  margin-bottom: 5px;
`;
export const Input = styled.input`
  border: 1px solid #104673;
  border-radius: 5px;
  background-color: #fefefe;
  height: 30px;
  
  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;
export const Select = styled.select`
  border: 1px solid #104673;
  border-radius: 5px;
  background-color: #fefefe;
  height: 30px;
`;
export const FormHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  
  & button {
    height: 30px;
    width: 30px;
    padding: 0;
    margin: 0;
    cursor: pointer;
  }
`;
