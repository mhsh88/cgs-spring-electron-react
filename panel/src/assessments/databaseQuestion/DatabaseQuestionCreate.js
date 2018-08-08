import React from 'react';
import {
    Create,
    SimpleForm,
    TextInput,
    maxLength,
    NumberInput,
    LongTextInput,
} from '../../core';

const DatabaseQuestionCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="metric" validate={[maxLength(45)]} options={{ fullWidth: true }} />
            <NumberInput source="metricPriority" options={{ fullWidth: true }} />
            <NumberInput source="metricWeight" options={{ fullWidth: true }} />
            <LongTextInput source="questionText" validate={[maxLength(1000)]} options={{ fullWidth: true }} />
            <TextInput source="standard" validate={[maxLength(45)]} options={{ fullWidth: true }} />
            <TextInput source="subMetric" validate={[maxLength(45)]} options={{ fullWidth: true }} />
            <NumberInput source="subMetricPriority" options={{ fullWidth: true }} />
            <NumberInput source="subMetricWeight" options={{ fullWidth: true }} />
        </SimpleForm>
    </Create>
);

export default DatabaseQuestionCreate;
