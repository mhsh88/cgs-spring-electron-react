import React from 'react';
import {
    Edit,
    SimpleForm,
    TextInput,
    maxLength,
} from '../../core';
import SalTitle from './SalTitle';

const SalEdit = props => (
    <Edit title={<SalTitle />} {...props}>
        <SimpleForm>
            <TextInput source="value" validate={maxLength(45)} options={{ fullWidth: true }} />
        </SimpleForm>
    </Edit>
);

export default SalEdit;
