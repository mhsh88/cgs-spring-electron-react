import React from 'react';
import {
    Show,
    SimpleShowLayout,
    TextField,
    NumberField,
} from '../../core';
import DatabaseQuestionTitle from './DatabaseQuestionTitle';

const DatabaseQuestionDetails = props => (
    <Show title={<DatabaseQuestionTitle />} {...props}>
        <SimpleShowLayout>
            <TextField source="metric" />
            <NumberField source="metricPriority" />
            <NumberField source="metricWeight" />
            <TextField source="questionText" />
            <TextField source="standard" />
            <TextField source="subMetric" />
            <NumberField source="subMetricPriority" />
            <NumberField source="subMetricWeight" />
        </SimpleShowLayout>
    </Show>
);

export default DatabaseQuestionDetails;
