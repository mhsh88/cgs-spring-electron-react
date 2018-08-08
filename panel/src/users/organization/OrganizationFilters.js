import React from 'react';
import {
    Filter,
    TextInput,
} from '../../core';

const OrganizationFilters = props => (
    <Filter {...props}>
        <TextInput source="name" />
    </Filter>
);

export default OrganizationFilters;
