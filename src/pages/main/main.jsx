import React, {useEffect, useRef} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import Header from '../../components/header/header';
import Table from '../../components/table/table';
import AddForm from '../../components/add-form/add-form';
import {getFormState} from '../../store/reducers/app-state/selectors';

const ContentOutput = styled.div`
  min-height: 100px;
  border: 1px solid black;
  margin: 50px;
`;

const Main = ({isFormShown, onSubmit, fromTextEdit}) => {
  const textRef = useRef(null);

  useEffect(() => {
    textRef.current.innerHTML = fromTextEdit;
  })

  return (
    <>
      <Header />
      <Table />
      <ContentOutput ref={textRef} />
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

