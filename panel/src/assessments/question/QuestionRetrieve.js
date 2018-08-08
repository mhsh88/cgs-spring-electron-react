import React from 'react';
import { Retrieve } from '../../core';
import QuestionTitle from './QuestionTitle';

const QuestionRetrieve = props => <Retrieve {...props} title={<QuestionTitle />} />;

export default QuestionRetrieve;
