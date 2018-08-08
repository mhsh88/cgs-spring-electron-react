import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '../../core';

const OrganizationAssessmentHasQuestionTitle = ({ record }) => <TextField source="name" record={record} />;

OrganizationAssessmentHasQuestionTitle.propTypes = {
    record: PropTypes.object,
};

export default OrganizationAssessmentHasQuestionTitle;
