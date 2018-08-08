import React from 'react';
import { Delete } from '../../core';
import QuestionTitle from './QuestionTitle';

const QuestionDelete = props => <Delete {...props} title={<QuestionTitle />} />;

export default QuestionDelete;
