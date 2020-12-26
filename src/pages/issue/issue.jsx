import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { getIssues } from '../../store/reducers/app-store/selectors';
import Header from '../../components/header/header';
import issueProp from '../../types/issue.prop';
import { IssueModel, toCamel } from '../../const';
import moment from 'moment';

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

  const textRef = useRef(null);

  useEffect(() => {
    if (issue) {
      textRef.current.innerHTML = issue.description;
    }
  }, [issue]);

  return (
    <>
      <Header />
        <Container>
          <Main>
            <h1>Просмотр заявки</h1>
            <IssueSection className="issue">
              <h2 className="issue__topic">{issue && issue.topic}</h2>
              <p className="issue__description-header">Описание проблемы</p>
              <div className="issue__description" ref={textRef} />
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
          </Aside>
        </Container>
    </>
  );
};

Issue.propTypes = {
  issues: PropTypes.arrayOf(issueProp).isRequired,
  match: PropTypes.any.isRequired,
};

const mapStateToProps = (state) => ({
  issues: getIssues(state),
});

export { Issue };
export default connect(mapStateToProps, null)(Issue);
