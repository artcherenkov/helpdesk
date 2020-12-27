import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { toggleForm as toggleFormAction, toggleLoading as toggleLoadingAction } from '../../store/action';
import { generateIssue } from '../../mock/issue';
import SunEditorComponent from '../sun-editor/sun-editor';
import { postIssue as postIssueAction } from '../../store/api-action';
import { getLoadingState } from '../../store/reducers/app-state/selectors';
import { FormHeader, Form, Input, InputsList, InputWrapper, Label, Overlay, Select, Button, CloseButton } from './components';
import { DEFAULT_TEXTEDIT_VALUE, SELECTS } from '../../const';

const initialData = {
  topic: generateIssue().topic,
  type: `Инцидент`,
  product: `АВС`,
  department: `Разработчики`,
  priority: `Низкий`,
  description: DEFAULT_TEXTEDIT_VALUE,
};

const AddForm = ({ postIssue, onCloseBtnClick, isLoading, toggleLoading }) => {
  const [formData, setFormData] = useState(initialData);

  const editorRef = useRef(null);

  const onChange = (evt) => setFormData({ ...formData, [evt.target.name]: evt.target.value });
  const onSubmit = (evt) => {
    evt.preventDefault();
    setFormData({ ...formData, description: editorRef.current.editor.getContents() });

    toggleLoading();
    postIssue({ ...generateIssue(true), ...formData });
  };

  return (
    <Overlay>
      <Form onSubmit={onSubmit} onChange={onChange}>
        <FormHeader>
          <h2>Добавление заявки</h2>
          <CloseButton onClick={onCloseBtnClick} />
        </FormHeader>
        <InputsList>
          <InputWrapper className="double">
            <Label htmlFor="topic">Тема заявки</Label>
            <Input type="text" name="topic" id="topic" defaultValue={formData.topic}/>
          </InputWrapper>
          {SELECTS
            .filter(select => select.name !== `status`)
            .map(filter => (
              <InputWrapper key={`select-wrapper-${filter.name}`}>
                <Label htmlFor={filter.name}>{filter.options[0]}</Label>
                <Select name={filter.name} id={filter.name} defaultValue={formData[filter.name]}>
                  {filter.options.map((option, i) => (
                    <option value={option} disabled={i === 0} key={`${filter.name}-option-${i}`}>{option}</option>
                  ))}
                </Select>
              </InputWrapper>
            ))}
        </InputsList>
        <InputWrapper>
          <p className="editor-label">Опиcание проблемы</p>
          <SunEditorComponent _ref={editorRef} contents={formData.description} />
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
