import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '../../core';

const PreQuestionTitle = ({ record }) => <TextField source="text" record={record} />;

PreQuestionTitle.propTypes = {
    record: PropTypes.object,
};

export default PreQuestionTitle;
