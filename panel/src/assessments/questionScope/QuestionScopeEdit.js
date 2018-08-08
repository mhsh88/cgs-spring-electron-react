import React from 'react';
import {
    Edit,
    SimpleForm,
    TextInput,
    maxLength,
} from '../../core';
import QuestionScopeTitle from './QuestionScopeTitle';

const QuestionScopeEdit = props => (
    <Edit title={<QuestionScopeTitle />} {...props}>
        <SimpleForm>
            <TextInput source="value" validate={maxLength(45)} options={{ fullWidth: true }} />
        </SimpleForm>
    </Edit>
);

export default QuestionScopeEdit;
