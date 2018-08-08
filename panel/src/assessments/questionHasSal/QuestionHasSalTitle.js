import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '../../core';

const QuestionHasSalTitle = ({ record }) => <TextField source="question.text" record={record} />;

QuestionHasSalTitle.propTypes = {
    record: PropTypes.object,
};

export default QuestionHasSalTitle;
