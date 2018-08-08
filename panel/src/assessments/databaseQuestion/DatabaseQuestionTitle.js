import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '../../core';

const DatabaseQuestionTitle = ({ record }) => <TextField source="questionText" record={record} />;

DatabaseQuestionTitle.propTypes = {
    record: PropTypes.object,
};

export default DatabaseQuestionTitle;
