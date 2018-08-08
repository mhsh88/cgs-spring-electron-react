import React from 'react';
import { Retrieve } from '../../core';
import StandardTitle from './StandardTitle';

const StandardRetrieve = props => <Retrieve {...props} title={<StandardTitle />} />;

export default StandardRetrieve;
