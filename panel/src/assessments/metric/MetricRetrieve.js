import React from 'react';
import { Retrieve } from '../../core';
import MetricTitle from './MetricTitle';

const MetricRetrieve = props => <Retrieve {...props} title={<MetricTitle />} />;

export default MetricRetrieve;
