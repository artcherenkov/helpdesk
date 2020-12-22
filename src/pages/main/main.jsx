import React from 'react';
import {connect} from 'react-redux';

import Header from '../../components/header/header';
import Table from '../../components/table/table';
import AddForm from '../../components/add-form/add-form';
import {getFormState} from '../../store/reducers/app-state/selectors';

const Main = ({isFormShown, onSubmit}) => {

  return (
    <>
      <Header />
      <Table />
      {isFormShown && <AddForm onSubmit={onSubmit}/>}
    </>
  );
}

const mapStateToProps = (state) => ({
  isFormShown: getFormState(state),
  fromTextEdit: state.STORE.html,
});

export {Main};
export default connect(mapStateToProps, null)(Main);

