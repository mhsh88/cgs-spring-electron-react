import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '../../core';

const MetricTitle = ({ record }) => <TextField source="text" record={record} />;

MetricTitle.propTypes = {
    record: PropTypes.object,
};

export default MetricTitle;
