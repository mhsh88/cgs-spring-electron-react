import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '../../core';

const QuestionTitle = ({ record }) => <TextField source="text" record={record} />;

QuestionTitle.propTypes = {
    record: PropTypes.object,
};

export default QuestionTitle;
