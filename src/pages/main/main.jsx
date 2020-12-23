import React from 'react';
import {connect} from 'react-redux';

import Header from '../../components/header/header';
import Table from '../../components/table/table';
// import AddForm from '../../components/add-form/add-form';
import {getFormState} from '../../store/reducers/app-state/selectors';
import {getTextEditorData} from '../../store/reducers/app-store/selectors';

const Main = () => {

  return (
    <>
      <Header />
      <Table />
    </>
  );
}

const mapStateToProps = (state) => ({
  isFormShown: getFormState(state),
  fromTextEdit: getTextEditorData(state),
});

export {Main};
export default connect(mapStateToProps, null)(Main);

