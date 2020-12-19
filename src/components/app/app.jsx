import React, {useEffect, useState} from 'react';
// import '@atlaskit/css-reset';

import Table from '../table/table';
import Header from '../header/header';

import {generateRequests} from '../../mock/request';
import AddForm from '../add-form/add-form';

const mockRequests = generateRequests(30);

export default function App() {
  const [isFormShown, setFormShown] = useState(false);
  const [requests, setRequests] = useState(mockRequests);

  const handleAddBtnClick = () => {
    setFormShown(!isFormShown);
  };

  const handleFormSubmit = (newRequest) => (evt) => {
    evt.preventDefault();
    setRequests([...requests, newRequest]);
    setFormShown(!isFormShown);
  }

  return (
    <>
      <Header handleAddBtnClick={handleAddBtnClick} />
      <Table requests={requests} />
      {isFormShown && <AddForm handleFormSubmit={handleFormSubmit}/>}
    </>
  );
};
