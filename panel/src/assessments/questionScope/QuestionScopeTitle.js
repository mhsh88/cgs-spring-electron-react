import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '../../core';

const QuestionScopeTitle = ({ record }) => <TextField source="value" record={record} />;

QuestionScopeTitle.propTypes = {
    record: PropTypes.object,
};

export default QuestionScopeTitle;
