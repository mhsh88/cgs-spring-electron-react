import React from 'react';
import {
    Filter,
    TextInput,
    TextField,
} from '../../core';

const StandardFilters = props => (
    <Filter {...props}>
        {/*<TextInput label="pos.search" source="query" alwaysOn />*/}
        <TextInput source="text" />
    </Filter>
);

export default StandardFilters;
