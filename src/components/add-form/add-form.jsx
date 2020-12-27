import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { toggleForm as toggleFormAction, toggleLoading as toggleLoadingAction } from '../../store/action';
import { generateIssue } from '../../mock/issue';
import SunEditorComponent from '../sun-editor/sun-editor';
import { postIssue as postIssueAction, updateIssue as updateIssueAction } from '../../store/api-action';
import { getLoadingState } from '../../store/reducers/app-state/selectors';
import { FormHeader, Form, Input, InputsList, InputWrapper, Label, Overlay, Select, Button, CloseButton } from './components';
import { DEFAULT_TEXTEDIT_VALUE, SELECTS } from '../../const';
import issueProp from '../../types/issue.prop';

const initialData = {
  topic: generateIssue().topic,
  type: `Инцидент`,
  product: `АВС`,
  department: `Разработчики`,
  priority: `Низкий`,
  description: DEFAULT_TEXTEDIT_VALUE,
};

const AddForm = ({ updatingIssue, isLoading, updateIssue, postIssue, onCloseBtnClick, toggleLoading }) => {
  const [formData, setFormData] = useState(updatingIssue || initialData);

  const editorRef = useRef(null);

  const onChange = (evt) => setFormData({ ...formData, [evt.target.name]: evt.target.value });
  const onSubmit = (evt) => {
    evt.preventDefault();
    const description = editorRef.current.editor.getContents();

    toggleLoading();
    if (updatingIssue) {
      updateIssue(updatingIssue.id, { ...updatingIssue, ...formData, description });
      return;
    }
    postIssue({ ...generateIssue(true), ...formData, description });
  };

  const buttonText = updatingIssue ? ` Обновить заявку` : `Создать заявку`;

  return (
    <Overlay>
      <Form onSubmit={onSubmit} onChange={onChange}>
        <CloseButton onClick={onCloseBtnClick} />
        <FormHeader>
          <h2>Добавление заявки</h2>
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
        <Button type="submit" disabled={isLoading}>{isLoading ? `Сохранение...` : buttonText}</Button>
      </Form>
    </Overlay>
  );
};

AddForm.propTypes = {
  postIssue: PropTypes.func.isRequired,
  onCloseBtnClick: PropTypes.func.isRequired,
  toggleLoading: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  updatingIssue: issueProp,
  updateIssue: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isLoading: getLoadingState(state),
  updatingIssue: state.STATE.updatingIssue,
});
const mapDispatchToProps = (dispatch) => ({
  postIssue (issue) {
    dispatch(postIssueAction(issue));
  },
  updateIssue (id, updatedIssue) {
    dispatch(updateIssueAction(id, updatedIssue));
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
