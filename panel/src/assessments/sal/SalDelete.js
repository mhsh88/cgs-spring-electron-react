import React from 'react';
import { Delete } from '../../core';
import SalTitle from './SalTitle';

const SalDelete = props => <Delete {...props} title={<SalTitle />} />;

export default SalDelete;
