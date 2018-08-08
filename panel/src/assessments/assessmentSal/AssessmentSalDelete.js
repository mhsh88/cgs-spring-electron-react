import React from 'react';
import { Delete } from '../../core';
import AssessmentSalTitle from './AssessmentSalTitle';

const AssessmentSalDelete = props => <Delete {...props} title={<AssessmentSalTitle />} />;

export default AssessmentSalDelete;
