import React from 'react';
import {
    Create,
    SimpleForm,
    NumberInput,
    TextInput,
    maxLength,
} from '../../core';

const MetricCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="text" validate={maxLength(45)} options={{ fullWidth: true }} />
            <NumberInput source="priority" options={{ fullWidth: true }} />
            <NumberInput source="weight" options={{ fullWidth: true }} />
        </SimpleForm>
    </Create>
);

export default MetricCreate;
