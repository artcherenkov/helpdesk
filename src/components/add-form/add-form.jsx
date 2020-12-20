import React, {useRef} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

import {addRequest, saveText, toggleForm} from '../../store/action';
import {generateRequest} from '../../mock/request';
import {SunEditorComponent} from '../sun-editor/sun-editor';

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255,255,255,.8);
  display: flex;
  align-items: center;
  justify-content: center;
`
const Form = styled.form`
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
    font-size: 20px;
    color: #353535;
    margin-bottom: 33px;
  }
`;
const Button = styled.button`
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
`;
const InputsList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 40px;
  margin-bottom: 12px;
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  &:not(:last-of-type) {
    margin-bottom: 12px;
  }
  
  &.double {
    grid-column: span 2;
  }
  
  & .editor-label {
    color: #353535;
    
  }
`
const Label = styled.label`
  color: #999999;
  font-size: 12px;
  font-family: Helvetica;
  margin-bottom: 5px;
`;
const Input = styled.input`
  border: 1px solid #104673;
  border-radius: 5px;
  background-color: #fefefe;
  height: 30px;
  
  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;

const AddForm = ({saveRequest, saveEditorData}) => {
  const editorRef = useRef(null);

  const onSubmit = (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    let res = {};
    for (let [key, value] of formData) {
      res = {...res, [key]: value} ;
    }
    const randomRequest = generateRequest();
    res = {...randomRequest, ...res};
    saveEditorData(editorRef.current.editor.getContents());
    saveRequest(res);
  };

  return (
    <Overlay>
      <Form onSubmit={onSubmit}>
        <legend>Добавление заявки</legend>
        <InputsList>
          <InputWrapper className="double">
            <Label for="topic">Тема заявки</Label>
            <Input type="text" name="topic" id="topic"/>
          </InputWrapper>
          <InputWrapper>
            <Label for="type">Тип заявки</Label>
            <Input type="text" name="type" id="type"/>
          </InputWrapper>
          <InputWrapper>
            <Label for="product">Продукт</Label>
            <Input type="text" name="product" id="product"/>
          </InputWrapper>
          <InputWrapper>
            <Label for="department">Отдел</Label>
            <Input type="text" name="department" id="department"/>
          </InputWrapper>
          <InputWrapper>
            <Label for="priority">Приоритет</Label>
            <Input type="text" name="priority" id="priority"/>
          </InputWrapper>
        </InputsList>
        <InputWrapper>
          <p className="editor-label">Опишите вашу вашу проблему подробнее</p>
          <SunEditorComponent _ref={editorRef}/>
        </InputWrapper>

        <Button type="submit">Добавить заявку</Button>
      </Form>
    </Overlay>
  );
};

const mapDispatchToProps = (dispatch) => ({
  saveEditorData(data) {
    dispatch(saveText(data))
  },
  saveRequest(newRequest) {
    dispatch(addRequest(newRequest));
    dispatch(toggleForm());
  }
});

export {AddForm};
export default connect(null, mapDispatchToProps)(AddForm);
