import React from 'react';

import Header from '../../components/header/header';
import Table from '../../components/table/table';
import {connect} from 'react-redux';
import {addRequest} from '../../store/action';
import AddForm from '../../components/add-form/add-form';
import {getRequests} from '../../store/reducers/app-store/selectors';

const Main = ({requests, onSubmit}) => {
  return (
    <>
      <Header />
      <Table requests={requests}/>
      <AddForm onSubmit={onSubmit}/>
    </>
  );
}

const mapStateToProps = (state) => ({
  requests: getRequests(state)
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(newRequest) {
    return (evt) => {
      evt.preventDefault();
      dispatch(addRequest(newRequest));
    }
  }
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
