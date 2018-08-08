import React from 'react';
import { Retrieve } from '../../core';
import PreQuestionTitle from './PreQuestionTitle';

const PreQuestionRetrieve = props => <Retrieve {...props} title={<PreQuestionTitle />} />;

export default PreQuestionRetrieve;
