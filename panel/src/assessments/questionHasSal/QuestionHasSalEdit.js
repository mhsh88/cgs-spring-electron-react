import React from 'react';
import {
    Edit,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    NumberInput,
} from '../../core';
import QuestionHasSalTitle from './QuestionHasSalTitle';

const QuestionHasSalEdit = props => (
    <Edit title={<QuestionHasSalTitle />} {...props}>
        <SimpleForm>
            <ReferenceInput source="sal.id" reference="sals">
                <SelectInput optionText="value" options={{ fullWidth: true }} />
            </ReferenceInput>
            <ReferenceInput source="standard.id" reference="standards">
                <SelectInput optionText="text" options={{ fullWidth: true }} />
            </ReferenceInput>
            <ReferenceInput source="metric.id" reference="metrics">
                <SelectInput optionText="text" options={{ fullWidth: true }} />
            </ReferenceInput>
            <ReferenceInput source="subMetric.id" reference="submetrics">
                <SelectInput optionText="text" options={{ fullWidth: true }} />
            </ReferenceInput>
            <ReferenceInput source="preQuestion.id" reference="prequestions">
                <SelectInput optionText="text" options={{ fullWidth: true }} />
            </ReferenceInput>
            <ReferenceInput source="question.id" reference="questions">
                <SelectInput optionText="text" options={{ fullWidth: true }} />
            </ReferenceInput>
            <NumberInput source="priority" options={{ fullWidth: true }} />
            <NumberInput source="weight" options={{ fullWidth: true }} />
        </SimpleForm>
    </Edit>
);

export default QuestionHasSalEdit;
