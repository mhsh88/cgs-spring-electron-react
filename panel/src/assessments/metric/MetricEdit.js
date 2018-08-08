import React from 'react';
import {
    Edit,
    SimpleForm,
    NumberInput,
    TextInput,
    maxLength,
} from '../../core';
import MetricTitle from './MetricTitle';

const MetricEdit = props => (
    <Edit title={<MetricTitle />} {...props}>
        <SimpleForm>
            <TextInput source="text" validate={[maxLength(45)]} options={{ fullWidth: true }} />
            <NumberInput source="priority" options={{ fullWidth: true }} />
            <NumberInput source="weight" options={{ fullWidth: true }} />
        </SimpleForm>
    </Edit>
);

export default MetricEdit;
