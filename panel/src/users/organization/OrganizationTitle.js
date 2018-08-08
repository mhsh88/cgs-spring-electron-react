import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '../../core';

const OrganizationTitle = ({ record }) => <TextField source="name" record={record} />;

OrganizationTitle.propTypes = {
    record: PropTypes.object,
};

export default OrganizationTitle;
