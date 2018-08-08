import React from 'react';
import {
    Filter,
    NumberInput,
    TextInput,
} from '../../core';

const QuestionHasSalFilters = props => (
    <Filter {...props}>
        {/*<TextInput label="pos.search" source="query" alwaysOn />*/}
        <TextInput source="sal>value" />
        <TextInput source="standard>text" />
        <TextInput source="metric>text" />
        <TextInput source="subMetric>text" />
        <TextInput source="preQuestion>text" />
        <TextInput source="question>text" />
        <NumberInput source="priority_ge" />
        <NumberInput source="priority_le" />
        <NumberInput source="weight_ge" />
        <NumberInput source="weight_le" />
    </Filter>
);

export default QuestionHasSalFilters;
