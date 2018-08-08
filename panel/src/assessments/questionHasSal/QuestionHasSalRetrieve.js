import React from 'react';
import { Retrieve } from '../../core';
import QuestionHasSalTitle from './QuestionHasSalTitle';

const QuestionHasSalRetrieve = props => <Retrieve {...props} title={<QuestionHasSalTitle />} />;

export default QuestionHasSalRetrieve;
