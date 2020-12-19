import React, {useState} from 'react';

import Header from '../../components/header/header';
import Table from '../../components/table/table';
import AddForm from '../../components/add-form/add-form';

import {generateRequests} from '../../mock/request';
const mockRequests = generateRequests(30);

export default function Main() {
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
}
