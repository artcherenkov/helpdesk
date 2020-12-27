import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { getIssues } from '../../store/reducers/app-store/selectors';
import Header from '../../components/header/header';
import issueProp from '../../types/issue.prop';
import { IssueModel, toCamel } from '../../const';
import moment from 'moment';
import { toggleForm, toggleLoading } from '../../store/action';
import { deleteIssue } from '../../store/api-action';
import { getLoadingState } from '../../store/reducers/app-state/selectors';

const Container = styled.div`
  flex-grow: 1;
  display: grid;
  grid-template-columns: 1fr 350px;
  grid-column-gap: 30px;
  grid-template-rows: 100%;
  background-color: #f1f1f1;
`;
const Main = styled.main`
  min-width: 500px;
  padding-left: 20px;background: rgba(196, 196, 196, 0.1);
 
  & h1 {
    text-align: center;
    margin-top: 25px;
    margin-bottom: 49px;
    font-weight: normal;
    font-size: 24px;
  }
`;
const IssueSection = styled.section`
  & .issue__topic {
    text-align: center;
    font-weight: normal;
    font-size: 20px;
    margin-bottom: 37px;
  }
  
  & .issue__description-header {
    margin-bottom: 19px;
    margin-top: 0;
    font-style: italic;
    font-size: 16px;
  }
  
  & .issue__description {
    margin-bottom: 30px;
    font-size: 16px;
    line-height: 22px;  
  }
`;
const Aside = styled.aside`
  padding-right: 20px;
  & h2 {
    text-align: center;
  }
`;
const InfoList = styled.ul`
  margin: 0;
  padding: 0;
  padding-top: 60px;

  & li {
    margin: 0;
    padding: 0;
    padding: 10px 0;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  & li:not(:last-of-type) {
    border-bottom: 1px solid black;
  }
  
  & p {
    margin: 0;
    font-size: 16px;
    line-height: 21px;
  }
  
  & .key {
    width: 150px;
    color: #6F6F6F;
  }
  
  & .value {
    color: black;
  }
`;
const IssueControls = styled.div`
  margin-top: 20px;
  height: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
`;
const Button = styled.button`
  margin: 0;
  padding: 0;
  border: 2px solid black;
  border-radius: 5px;
  background-color: white;
  padding: 5px;
  padding-top: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 100ms ease-in, 
              color 100ms ease-in, 
              opacity 100ms ease-in, 
              border 100ms ease-in;
              
  &:hover {
    color: #f1f1f1;
  }
  
  &:active {
    opacity: .6;
  }
  
  &.edit {
    border-color: #2196f3;
    
    &:hover {
      background-color: #2196f3;
    }
  }
  
  &.delete {
    border-color: #ff2f2f;
    
    &:hover {
      background-color: #ff2f2f;
    }
  }
`;

// todo на странице Issue не хватает заказчика в разделе "О заявке"
/**
 * Check if string is valid date.
 * @param string
 * @returns {boolean}
 */
const checkIfStringIsDate = (string) => moment(new Date(string)).isValid();

/**
 * Format output of issue object value (decides, what to return: formatted date or just value)
 * @param issue
 * @param key
 * @returns {string|*}
 */
const formatIssueValue = (issue, key) => {
  const issueValue = issue[toCamel(key.toLowerCase())];

  if (checkIfStringIsDate(issueValue)) {
    return moment(issueValue).format(`DD.MM.YYYY`);
  }

  return issueValue;
};

const Issue = (props) => {
  const issueId = props.match.params.id;
  const issue = props.issues.find(_issue => _issue.id.toString() === issueId);

  const { isLoading, onEditClick, onDeleteClick } = props;

  const textRef = useRef(null);

  useEffect(() => {
    if (!isLoading && issue) {
      textRef.current.innerHTML = issue.description;
    }
  }, [isLoading, issue, props.issues]);

  return (
    <>
      <Header/>
      {!isLoading && <Container>
        <Main>
          <h1>Просмотр заявки</h1>
          <IssueSection className="issue">
            <h2 className="issue__topic">{issue && issue.topic}</h2>
            <p className="issue__description-header">Описание проблемы</p>
            <div className="issue__description" ref={textRef}/>
          </IssueSection>
        </Main>
        <Aside>
          <InfoList>
            {issue && Object.keys(IssueModel).map(key =>
              <li key={`item-${key}`}>
                <p className="key">{IssueModel[key]}</p>
                <p className="value">{formatIssueValue(issue, key)}</p>
              </li>)}
          </InfoList>
          <IssueControls>
            <Button className="edit" onClick={onEditClick(issue)}>Изменить</Button>
            <Button className="delete" onClick={onDeleteClick(issue._id)}>Удалить</Button>
          </IssueControls>
        </Aside>
      </Container>}
    </>
  );
};

Issue.propTypes = {
  issues: PropTypes.arrayOf(issueProp).isRequired,
  match: PropTypes.any.isRequired,
  onEditClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  issues: getIssues(state),
  isLoading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  onEditClick (updatingIssue) {
    return () => dispatch(toggleForm(updatingIssue));
  },
  onDeleteClick (id) {
    return () => {
      dispatch(toggleLoading());
      dispatch(deleteIssue(id));
    };
  },
});

export { Issue };
export default connect(mapStateToProps, mapDispatchToProps)(Issue);
