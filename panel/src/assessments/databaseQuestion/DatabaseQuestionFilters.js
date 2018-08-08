import React from 'react';
import {
    Filter,
    NumberInput,
    TextInput,
} from '../../core';

const DatabaseQuestionFilters = props => (
    <Filter {...props}>
        {/*<TextInput label="pos.search" source="query" alwaysOn />*/}
        <TextInput source="metric" />
        <NumberInput source="metricPriority_ge" />
        <NumberInput source="metricPriority_le" />
        <NumberInput source="metricWeight_ge" />
        <NumberInput source="metricWeight_le" />
        <TextInput source="questionText" />
        <TextInput source="standard" />
        <TextInput source="subMetric" />
        <NumberInput source="subMetricPriority_ge" />
        <NumberInput source="subMetricPriority_le" />
        <NumberInput source="subMetricWeight_ge" />
        <NumberInput source="subMetricWeight_le" />
    </Filter>
);

export default DatabaseQuestionFilters;
