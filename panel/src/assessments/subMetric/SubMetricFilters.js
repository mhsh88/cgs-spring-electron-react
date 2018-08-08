import React from 'react';
import {
    Filter,
    TextInput,
} from '../../core';

const SubMetricFilters = props => (
    <Filter {...props}>
        {/*<TextInput label="pos.search" source="query" alwaysOn />*/}
        <TextInput source="text" />
    </Filter>
);

export default SubMetricFilters;
