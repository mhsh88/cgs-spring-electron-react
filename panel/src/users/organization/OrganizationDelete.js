import React from 'react';
import { Delete } from '../../core';
import OrganizationTitle from './OrganizationTitle';

const OrganizationDelete = props => <Delete {...props} title={<OrganizationTitle />} />;

export default OrganizationDelete;
