import React from 'react';
import { Retrieve } from '../../core';
import DatabaseQuestionTitle from './DatabaseQuestionTitle';

const DatabaseQuestionRetrieve = props => <Retrieve {...props} title={<DatabaseQuestionTitle />} />;

export default DatabaseQuestionRetrieve;
