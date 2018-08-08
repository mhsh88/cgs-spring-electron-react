import React from 'react';
import { Delete } from '../../core';
import SubMetricTitle from './SubMetricTitle';

const SubMetricDelete = props => <Delete {...props} title={<SubMetricTitle />} />;

export default SubMetricDelete;
