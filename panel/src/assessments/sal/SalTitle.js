import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '../../core';

const SalTitle = ({ record }) => <TextField source="value" record={record} />;

SalTitle.propTypes = {
    record: PropTypes.object,
};

export default SalTitle;
