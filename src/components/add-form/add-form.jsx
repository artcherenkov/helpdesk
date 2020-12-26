import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { toggleForm as toggleFormAction, toggleLoading as toggleLoadingAction } from '../../store/action';
import { generateIssue } from '../../mock/issue';
import SunEditorComponent from '../sun-editor/sun-editor';
import { postIssue as postIssueAction } from '../../store/api-action';
import { getLoadingState } from '../../store/reducers/app-state/selectors';
import { getFormData } from '../../utils/common';
import { FormHeader, Form, Input, InputsList, InputWrapper, Label, Overlay, Select, Button } from './components';

const AddForm = ({ postIssue, onCloseBtnClick, isLoading, toggleLoading }) => {
  const editorRef = useRef(null);

  const onSubmit = (evt) => {
    evt.preventDefault();

    let res = getFormData(evt.target);
    const randomIssue = generateIssue(true);
    res = { ...randomIssue, description: editorRef.current.editor.getContents(), ...res };
    toggleLoading();
    postIssue(res);
  };

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

AddForm.propTypes = {
  postIssue: PropTypes.func.isRequired,
  onCloseBtnClick: PropTypes.func.isRequired,
  toggleLoading: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isLoading: getLoadingState(state),
});
const mapDispatchToProps = (dispatch) => ({
  postIssue (issue) {
    dispatch(postIssueAction(issue));
  },
  onCloseBtnClick () {
    dispatch(toggleFormAction());
  },
  toggleLoading () {
    dispatch(toggleLoadingAction());
  },
});

export { AddForm };
export default connect(mapStateToProps, mapDispatchToProps)(AddForm);
