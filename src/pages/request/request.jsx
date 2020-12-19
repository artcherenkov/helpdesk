import React from 'react';

export default function Request(props) {
  return (
    <h1>Request page № {props.match.params.id}</h1>
  );
};
