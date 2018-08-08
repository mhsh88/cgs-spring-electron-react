import React from 'react';
import {
    Show,
    SimpleShowLayout,
    ReferenceField,
    TextField,
    NumberField,
} from '../../core';
import QuestionHasSalTitle from './QuestionHasSalTitle';

const QuestionHasSalDetails = props => (
    <Show title={<QuestionHasSalTitle />} {...props}>
        <SimpleShowLayout>
            <ReferenceField source="sal.id" reference="sals">
                <TextField source="value" />
            </ReferenceField>
            <ReferenceField source="standard.id" reference="standards">
                <TextField source="text" />
            </ReferenceField>
            <ReferenceField source="metric.id" reference="metrics">
                <TextField optionText="text" />
            </ReferenceField>
            <ReferenceField source="subMetric.id" reference="submetrics">
                <TextField optionText="text" />
            </ReferenceField>
            <ReferenceField source="preQuestion.id" reference="prequestions">
                <TextField optionText="text" />
            </ReferenceField>
            <ReferenceField source="question.id" reference="questions">
                <TextField source="text" />
            </ReferenceField>
            <NumberField source="priority" />
            <NumberField source="weight" />
        </SimpleShowLayout>
    </Show>
);

export default QuestionHasSalDetails;
