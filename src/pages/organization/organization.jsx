import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { getOrganizations } from '../../store/reducers/app-store/selectors';
import { connect } from 'react-redux';

const OrganizationPage = (props) => {
  const { id } = props.match.params;
  const { organizations } = props;
  const organization = organizations.find(_organization => _organization[`org-id`].toString() === id);

  useEffect(() => {}, [organizations]);

  return (
    <>
      <h1>Organization id: {id}</h1>
      <ul>
        {organization && Object.entries(organization).map((entry, i) => {
          const [key, value] = entry;
          return <li key={`entry-${i}`}>{key}: {value}</li>;
        })}
      </ul>
    </>
  );
};

OrganizationPage.propTypes = {
  match: PropTypes.any,
  organizations: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  organizations: getOrganizations(state),
});

export { OrganizationPage };
export default connect(mapStateToProps, null)(OrganizationPage);
