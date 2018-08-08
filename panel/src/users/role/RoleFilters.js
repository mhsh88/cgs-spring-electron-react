import React from 'react';
import {
    Filter,
    TextInput,
} from '../../core';

const RoleFilters = props => (
    <Filter {...props}>
        {/*<TextInput label="pos.search" source="query" alwaysOn />*/}
        <TextInput source="name" />
        <TextInput source="title" />
    </Filter>
);

export default RoleFilters;
