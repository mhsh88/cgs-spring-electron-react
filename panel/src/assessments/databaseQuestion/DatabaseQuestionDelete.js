import React from 'react';
import { Delete } from '../../core';
import DatabaseQuestionTitle from './DatabaseQuestionTitle';

const DatabaseQuestionDelete = props => <Delete {...props} title={<DatabaseQuestionTitle />} />;

export default DatabaseQuestionDelete;
