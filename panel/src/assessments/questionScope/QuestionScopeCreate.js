import React from 'react';
import {
    Create,
    SimpleForm,
    TextInput,
    maxLength,
} from '../../core';

const QuestionScopeCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="value" validate={maxLength(45)} options={{ fullWidth: true }} />
        </SimpleForm>
    </Create>
);

export default QuestionScopeCreate;
