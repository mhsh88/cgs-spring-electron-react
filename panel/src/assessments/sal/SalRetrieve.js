import React from 'react';
import { Retrieve } from '../../core';
import SalTitle from './SalTitle';

const SalRetrieve = props => <Retrieve {...props} title={<SalTitle />} />;

export default SalRetrieve;
