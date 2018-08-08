import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '../../core';

const AssessmentSalTitle = ({ record }) => <TextField source="sal.value" record={record} />;

AssessmentSalTitle.propTypes = {
    record: PropTypes.object,
};

export default AssessmentSalTitle;
