import React from 'react';
import {
    Filter,
    NumberInput,
    TextInput,
    SingleFieldList,
} from '../../core';

const MetricFilters = props => (
    <Filter {...props}>
        {/*<TextInput label="pos.search" source="query" alwaysOn />*/}
        <TextInput source="text" />
        <NumberInput source="priority_ge" />
        <NumberInput source="priority_le" />
        <NumberInput source="weight_ge" />
        <NumberInput source="weight_le" />
    </Filter>
);

export default MetricFilters;
