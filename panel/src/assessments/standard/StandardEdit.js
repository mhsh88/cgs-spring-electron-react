import React from 'react';
import {
    Edit,
    SimpleForm,
    TextInput,
    maxLength,
} from '../../core';
import StandardTitle from './StandardTitle';

const StandardEdit = props => (
    <Edit title={<StandardTitle />} {...props}>
        <SimpleForm>
            <TextInput source="text" validate={maxLength(45)} options={{ fullWidth: true }} />
        </SimpleForm>
    </Edit>
);

export default StandardEdit;
