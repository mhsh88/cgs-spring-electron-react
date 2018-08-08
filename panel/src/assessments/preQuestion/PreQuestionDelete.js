import React from 'react';
import { Delete } from '../../core';
import PreQuestionTitle from './PreQuestionTitle';

const PreQuestionDelete = props => <Delete {...props} title={<PreQuestionTitle />} />;

export default PreQuestionDelete;
