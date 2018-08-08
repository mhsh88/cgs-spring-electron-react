import React from 'react';
import {
    Create,
    SimpleForm,
    TextInput,
    maxLength,
} from '../../core';

const SubMetricCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="text" validate={maxLength(45)} options={{ fullWidth: true }} />
        </SimpleForm>
    </Create>
);

export default SubMetricCreate;
