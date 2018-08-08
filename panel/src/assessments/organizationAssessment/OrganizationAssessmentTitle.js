import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '../../core';

const OrganizationAssessmentTitle = ({ record }) => <TextField source="name" record={record} />;

OrganizationAssessmentTitle.propTypes = {
    record: PropTypes.object,
};

export default OrganizationAssessmentTitle;
