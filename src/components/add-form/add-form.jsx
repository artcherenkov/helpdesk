import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

import {generateRequest} from '../../mock/request';
import {addRequest, toggleForm} from '../../store/action';

const Form = styled.form`
  background-color: #325673;
  width: 300px;
  height: 400px;
  position: fixed;
  top: 100px;
  left: calc(50% - 150px);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AddForm = ({onSubmit}) => {
  return (
    <Form onSubmit={onSubmit(generateRequest())}>
      <button type="submit">Добавить случайный запрос</button>
    </Form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(newRequest) {
    return (evt) => {
      evt.preventDefault();
      dispatch(addRequest(newRequest));
      dispatch(toggleForm())
    }
  }
});

export {AddForm};
export default connect(null, mapDispatchToProps)(AddForm);
