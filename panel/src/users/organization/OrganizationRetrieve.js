import React from 'react';
import { Retrieve } from '../../core';
import OrganizationTitle from './OrganizationTitle';

const OrganizationRetrieve = props => <Retrieve {...props} title={<OrganizationTitle />} />;

export default OrganizationRetrieve;
