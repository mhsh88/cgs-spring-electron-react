import React from 'react';
import { Retrieve } from '../../core';
import SubMetricTitle from './SubMetricTitle';

const SubMetricRetrieve = props => <Retrieve {...props} title={<SubMetricTitle />} />;

export default SubMetricRetrieve;
