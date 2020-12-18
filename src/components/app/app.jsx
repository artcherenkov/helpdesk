import React from 'react';

import Table from '../table/table';
import {generateRequests} from '../../mock/request';

export default function App() {
  const requests = generateRequests(10);

  return (
    <Table requests={requests} />
  );
};
