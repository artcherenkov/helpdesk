import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { postIssue as postIssueAction } from '../../store/api-action';
import { toggleForm } from '../../store/action';
import AddForm from '../add-form/add-form';
import { getFormState } from '../../store/reducers/app-state/selectors';
import { getTextEditorData } from '../../store/reducers/app-store/selectors';

const PageHeader = styled.header`
  height: 50px;
  background-color: #e7e7e7;
  display: flex;
  padding-left: 20px;
  align-items: center;
  border-radius: 5px;
`;
const Button = styled.button`
  background-color: #2196f3;
  padding: 5px;
  margin: 0;
  margin-left: 40px;
  border: none;
  border-radius: 5px;
  font-family: Helvetica;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  align-items: center;
  color: #F1F1F1;
  cursor: pointer;
  
  &:hover {
    opacity: .6;
  }
  
  &:active {
    opacity: .3;
  }
`;
const Image = styled.img`
  margin-right: 5px;
  margin-bottom: 1px;
  width: 15px;
  height: 15px;
`;
const Logo = styled.img`
  cursor: pointer;
  
  &:hover {
    opacity: .6;
  }
  
  &:active {
    opacity: .3;
  }
`;

const Header = ({ onAddBtnClick, isFormShown }) => (
  <PageHeader>
    <Link to="/">
      <Logo src="img/logo.svg" alt="Логотип"/>
    </Link>
    <Button onClick={onAddBtnClick}>
      <Image src="img/icon-plus.svg" alt="Добавить"/> Создать
    </Button>
    {isFormShown && <AddForm/>}
  </PageHeader>
);

Header.propTypes = {
  onAddBtnClick: PropTypes.func.isRequired,
  isFormShown: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isFormShown: getFormState(state),
  fromTextEdit: getTextEditorData(state),
});
const mapDispatchToProps = (dispatch) => ({
  postIssue (issue) {
    dispatch(postIssueAction(issue));
  },
  onAddBtnClick () {
    dispatch(toggleForm());
  },
});

export { Header };
export default connect(mapStateToProps, mapDispatchToProps)(Header);
