import React from 'react';
import { Retrieve } from '../../core';
import RoleTitle from './RoleTitle';

const RoleRetrieve = props => <Retrieve {...props} title={<RoleTitle />} />;

export default RoleRetrieve;
