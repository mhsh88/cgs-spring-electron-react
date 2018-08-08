import React from 'react';
import {
    Edit,
    SimpleForm,
    TextInput,
    maxLength,
} from '../../core';
import SubMetricTitle from './SubMetricTitle';

const SubMetricEdit = props => (
    <Edit title={<SubMetricTitle />} {...props}>
        <SimpleForm>
            <TextInput source="text" validate={maxLength(45)} options={{ fullWidth: true }} />
        </SimpleForm>
    </Edit>
);

export default SubMetricEdit;
