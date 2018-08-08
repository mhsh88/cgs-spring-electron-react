import React from 'react';
import { Delete } from '../../core';
import QuestionScopeTitle from './QuestionScopeTitle';

const QuestionScopeDelete = props => <Delete {...props} title={<QuestionScopeTitle />} />;

export default QuestionScopeDelete;
