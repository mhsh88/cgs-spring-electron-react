import React from 'react';
import {
    Edit,
    SimpleForm,
    LongTextInput,
    required,
} from '../../core';
import PreQuestionTitle from './PreQuestionTitle';

const PreQuestionEdit = props => (
    <Edit title={<PreQuestionTitle />} {...props}>
        <SimpleForm>
            <LongTextInput source="text" validate={required} options={{ fullWidth: true }} />
        </SimpleForm>
    </Edit>
);

export default PreQuestionEdit;
