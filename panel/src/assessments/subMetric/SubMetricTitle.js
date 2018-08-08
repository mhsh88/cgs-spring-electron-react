import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '../../core';

const SubMetricTitle = ({ record }) => <TextField source="text" record={record} />;

SubMetricTitle.propTypes = {
    record: PropTypes.object,
};

export default SubMetricTitle;
