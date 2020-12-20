import React from 'react';

export default function Issue(props) {
  return (
    <h1>Issue page № {props.match.params.id}</h1>
  );
};
