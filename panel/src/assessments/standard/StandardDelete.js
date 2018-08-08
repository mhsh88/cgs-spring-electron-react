import React from 'react';
import { Delete } from '../../core';
import StandardTitle from './StandardTitle';

const StandardDelete = props => <Delete {...props} title={<StandardTitle />} />;

export default StandardDelete;
