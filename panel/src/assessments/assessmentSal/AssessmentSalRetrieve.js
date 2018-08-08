import React from 'react';
import { Retrieve } from '../../core';
import AssessmentSalTitle from './AssessmentSalTitle';

const AssessmentSalRetrieve = props => <Retrieve {...props} title={<AssessmentSalTitle />} />;

export default AssessmentSalRetrieve;
