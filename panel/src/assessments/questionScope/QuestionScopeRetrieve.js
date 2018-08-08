import React from 'react';
import { Retrieve } from '../../core';
import QuestionScopeTitle from './QuestionScopeTitle';

const QuestionScopeRetrieve = props => <Retrieve {...props} title={<QuestionScopeTitle />} />;

export default QuestionScopeRetrieve;
