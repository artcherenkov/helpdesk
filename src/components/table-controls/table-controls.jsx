import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getFilters } from '../../store/reducers/app-state/selectors';
import { setFilters as setFiltersAction } from '../../store/action';
import { SELECTS } from '../../const';

import { Container, SearchBar, SelectWrapper, ResetButton, OptionsButton } from './components';

const checkFilters = (filters) => (
  Object
    .values(filters)
    .some(filter => Boolean(filter))
);

const TableControls = ({ filters, setFilters }) => {
  const handleChange = select => (evt) => {
    if (evt.target.value === `Не выбрано`) {
      evt.target.value = evt.target.options[0].value;
      setFilters({ ...filters, [select]: `` });
      return;
    }

    setFilters({ ...filters, [select]: evt.target.value });
  };

  return (
    <Container>
      <form action="">
        <OptionsButton type="button" />
        <SearchBar>
          <input type="text"/>
        </SearchBar>
        {SELECTS
          .filter(select => select.name !== `type`)
          .map(filter => (
            <SelectWrapper key={`select-wrapper-${filter.name}`}>
              <select name={filter.name} id={filter.name} defaultValue={filter.options[0]} onChange={handleChange(filter.name)}>
                {filter.options.map((option, i) => (
                  <option value={option} disabled={i === 0} key={`${filter.name}-option-${i}`}>{option}</option>
                ))}
              </select>
            </SelectWrapper>
          ))}
        <ResetButton type="reset" onClick={() => setFilters({})} disabled={!checkFilters(filters)}>Сбросить</ResetButton>
      </form>
    </Container>
  );
};

TableControls.propTypes = {
  filters: PropTypes.object.isRequired,
  setFilters: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filters: getFilters(state),
});

const mapDispatchToProps = dispatch => ({
  setFilters (filters) {
    dispatch(setFiltersAction(filters));
  },
});

export { TableControls };
export default connect(mapStateToProps, mapDispatchToProps)(TableControls);
