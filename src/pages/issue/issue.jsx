import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import Header from '../../components/header/header';
import {connect} from 'react-redux';
import {getIssues} from '../../store/reducers/app-store/selectors';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 450px;
  grid-column-gap: 30px;
`;

const Main = styled.main`
  min-width: 500px;
  padding-left: 20px;
  
  & h1 {
    text-align: center;
    margin-top: 25px;
    margin-bottom: 49px;
    font-weight: normal;
    font-size: 30px;
  }
`;

const IssueSection = styled.section`
  & .issue__topic {
    text-align: center;
    font-weight: normal;
    font-size: 24px;
    margin-bottom: 37px;
  }
  
  & .issue__description-header {
    margin-bottom: 19px;
    margin-top: 0;
    font-style: italic;
    font-size: 20px;
  }
  
  & .issue__description {
    margin-bottom: 30px;
    font-size: 16px;
    line-height: 22px;  
  }
`

const Aside = styled.aside`
  padding-right: 20px;
  
  & h2 {
    text-align: center;
  }
`;

const Issue = (props) => {
  const issueId = props.match.params.id;
  const issue = props.issues.find(_issue => _issue.id.toString() === issueId);
  console.log(issue);

  const textRef = useRef(null);

  useEffect(() => {
    textRef.current.innerHTML = issue.description;
  })

  return (
    <>
      <Header />
      <Container>
        <Main>
          <h1>Просмотр заявки</h1>
          <IssueSection className="issue">
            <h2 className="issue__topic">{issue.topic}</h2>
            <p className="issue__description-header">Описание проблемы</p>
            <div className="issue__description" ref={textRef} />
          </IssueSection>
        </Main>
        <Aside>
          <h2>Aside</h2>
        </Aside>
      </Container>
    </>
  );
};

const mapStateToProps = (state) => ({
  issues: getIssues(state),
});

export {Issue};
export default connect(mapStateToProps, null)(Issue);
