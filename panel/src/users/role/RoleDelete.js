import React from 'react';
import { Delete } from '../../core';
import RoleTitle from './RoleTitle';

const RoleDelete = props => <Delete {...props} title={<RoleTitle />} />;

export default RoleDelete;
