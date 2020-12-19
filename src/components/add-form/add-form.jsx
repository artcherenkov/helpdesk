import React from 'react';
import styled from 'styled-components';
import {generateRequest} from '../../mock/request';

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

export default function AddForm({handleFormSubmit}) {
  return (
    <Form onSubmit={handleFormSubmit(generateRequest())}>
      <button type="submit">Добавить случайный запрос</button>
    </Form>
  );
};
