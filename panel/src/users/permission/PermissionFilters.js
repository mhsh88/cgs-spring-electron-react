import React from 'react';
import {
    Filter,
    TextInput,
} from '../../core';

const PermissionFilters = props => (
    <Filter {...props}>
        <TextInput label="pos.search" source="query" alwaysOn />
    </Filter>
);

export default PermissionFilters;
