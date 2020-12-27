import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 24px;
  width: 100%;
  height: 50px;
  padding: 11px 0;
  border-radius: 5px;
  
  & form {
    display: flex;
    height: 100%;
    align-items: center;
  
    & *:not(:last-child) {
      margin-right: 15px;
    }
  }
`;
export const SearchBar = styled.div`
  width: 220px; 
  height: 100%;
  position: relative;
  display: flex;

  & input {
    background: #FFFFFF;
    border: 1px solid rgba(16, 70, 115, 0.3);
    padding-left: 5px;
    padding-right: 22px;
    border-radius: 5px;
    height: 100%;
    width: 130px;
    font-size: 14px;
    background: white url("./img/icon-search.svg") no-repeat 95%;
    transition: width 0.3s ease-out, border 100ms ease-in;
  }
  
  & input:hover {
    border: 1px solid rgba(16, 70, 115, 1);
  }
  
  & input:focus {
    border-radius: 5px;
    height: 100%;
    background: white;
    padding-right: 5px;
    width: 100%;
  }
`;
export const SelectWrapper = styled.div`
  height: 100%;
  
  & select {
    background: #ffffff;
    border: 1px solid rgba(16, 70, 115, 0.3);
    padding-left: 5px;
    border-radius: 5px;
    height: 100%;
    width: 130px;
    font-size: 14px;
    cursor: pointer;
    transition: 100ms ease-in;
  }
  
  & select:hover {
    border: 1px solid rgba(16, 70, 115, 1);
    transition: 100ms ease-in;
  }
`;
export const ResetButton = styled.button`
  margin: 0;
  padding: 0;
  border: 2px solid #ff2f2f;
  border-radius: 5px;
  background-color: white;
  padding: 5px;
  padding-top: 4px;
  font-size: 14px;
  margin-left: 50px;
  cursor: pointer;
  transition: background-color 100ms ease-in, 
              color 100ms ease-in, 
              opacity 100ms ease-in, 
              border 100ms ease-in;
  
  &:hover {
    background-color: #ff2f2f;
    color: #f1f1f1;
  }
  
  &:active {
    opacity: .3;
  }
  
  &:disabled {
    opacity: .3;
    color: black;
    border: 2px solid rgba(16, 70, 115, 0.3);
    background-color: white;
    cursor: not-allowed;
  } 
`;
export const OptionsButton = styled.button`
  border: none;
  margin: 0;
  padding: 5px;
  width: 23px;
  height: 20px;
  border-radius: 5px;
  border: 1px solid rgba(16, 70, 115, 0.3);
  
  background: white url("./img/icon-options.svg") 3px center no-repeat;
  background-size: 15px 15px;
  cursor: pointer;
  
  &:hover {
    border: 1px solid rgba(16, 70, 115, 1);
  }
  
  &:active {
    opacity: .3;
  }
`;
