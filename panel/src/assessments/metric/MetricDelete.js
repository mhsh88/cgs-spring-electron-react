import React from 'react';
import { Delete } from '../../core';
import MetricTitle from './MetricTitle';

const MetricDelete = props => <Delete {...props} title={<MetricTitle />} />;

export default MetricDelete;
