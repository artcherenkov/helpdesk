import React, {useRef} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

import {toggleForm as toggleFormAction, toggleLoading as toggleLoadingAction} from '../../store/action';
import {generateIssue} from '../../mock/issue';
import SunEditorComponent from '../sun-editor/sun-editor';
import {postIssue as postIssueAction} from '../../store/api-action';
import {getLoadingState} from '../../store/reducers/app-state/selectors';
import {getFormData} from '../../utils/common';

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
  z-index: 90;
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
    font-size: 24px;
    color: #353535;
    margin-bottom: 33px;
    text-align: center;
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
  
  &:disabled {
    opacity: .3;
    cursor: not-allowed;
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
const Select = styled.select`
  border: 1px solid #104673;
  border-radius: 5px;
  background-color: #fefefe;
  height: 30px;
`;
const FormHeader = styled.div`
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
`

const AddForm = ({postIssue, onCloseBtnClick, isLoading, toggleLoading}) => {
  const editorRef = useRef(null);

  const onSubmit = (evt) => {
    evt.preventDefault();

    let res = getFormData(evt.target);
    const randomIssue = generateIssue(true);
    res = {...randomIssue, description: editorRef.current.editor.getContents(), ...res};
    toggleLoading();
    postIssue(res);
  };

  // todo отхлебнули классы приоритетов
  return (
    <Overlay>
      <Form onSubmit={onSubmit}>
        <FormHeader>
          <h2>Добавление заявки</h2>
          <button onClick={onCloseBtnClick}>Х</button>
        </FormHeader>
        <InputsList>
          <InputWrapper className="double">
            <Label htmlFor="topic">Тема заявки</Label>
            <Input type="text" name="topic" id="topic"/>
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="type">Тип заявки</Label>
            <Select name="type" id="type">
              <option value="Не выбрано">Не выбрано</option>
              <option value="Инцидент">Инцидент</option>
              <option value="Доработка">Доработка</option>
              <option value="Запрос">Запрос</option>
              <option value="Обращение">Обращение</option>
            </Select>
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="product">Продукт</Label>
            <Select name="product" id="product">
              <option value="Не выбрано">Не выбрано</option>
              <option value="BIM-плагины">BIM-плагины</option>
              <option value="WEB">WEB</option>
              <option value="АВС">АВС</option>
              <option value="АВС SNB Compiler">АВС SNB Compiler</option>
              <option value="АВС-KZ">АВС-KZ</option>
              <option value="АВС-RU">АВС-RU</option>
              <option value="АВС_UZ">АВС_UZ</option>
              <option value="АВС-ПИР">АВС-ПИР</option>
            </Select>
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="department">Отдел</Label>
            <Select name="department" id="department">
              <option value="Не выбрано">Не выбрано</option>
              <option value="Отдел продаж">Отдел продаж</option>
              <option value="Техническая поддержка">Техническая поддержка</option>
              <option value="Разработчики">Разработчики</option>
              <option value="Бухгалтерия">Бухгалтерия</option>
            </Select>
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="priority">Приоритет</Label>
            <Select name="priority" id="priority">
              <option value="Низкий">Низкий</option>
              <option value="Нормальный">Нормальный</option>
              <option value="Высокий">Высокий</option>
            </Select>
          </InputWrapper>
        </InputsList>
        <InputWrapper>
          <p className="editor-label">Опишите вашу вашу проблему подробнее</p>
          <SunEditorComponent _ref={editorRef}/>
        </InputWrapper>

        <Button type="submit" disabled={isLoading}>{isLoading ? `Сохранение...` : `Добавить заявку`}</Button>
      </Form>
    </Overlay>
  );
};

const mapStateToProps = state => ({
  isLoading: getLoadingState(state)
})

const mapDispatchToProps = (dispatch) => ({
  postIssue(issue) {
    dispatch(postIssueAction(issue));
  },
  onCloseBtnClick() {
    dispatch(toggleFormAction());
  },
  toggleLoading() {
    dispatch(toggleLoadingAction());
  }
});

export {AddForm};
export default connect(mapStateToProps, mapDispatchToProps)(AddForm);
