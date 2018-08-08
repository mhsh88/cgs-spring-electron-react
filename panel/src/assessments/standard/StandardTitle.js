import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '../../core';

const StandardTitle = ({ record }) => <TextField source="text" record={record} />;

StandardTitle.propTypes = {
    record: PropTypes.object,
};

export default StandardTitle;
