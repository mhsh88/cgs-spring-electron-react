import React from 'react';
import {
    BooleanInput,
    Create,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    NumberInput,
} from '../../core';

const OrganizationAssessmentHasQuestionCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="questionAnswer.id" reference="questionanswers">
                <SelectInput optionText="answerValue" options={{ fullWidth: true }} />
            </ReferenceInput>
            <ReferenceInput source="preQuestionAnswer.id" reference="prequestionanswers">
                <SelectInput optionText="answerValue" options={{ fullWidth: true }} />
            </ReferenceInput>
            <ReferenceInput source="organizationAssessment.id" reference="organizationassessments">
                <SelectInput optionText="text" options={{ fullWidth: true }} />
            </ReferenceInput>
            <NumberInput source="priority" options={{ fullWidth: true }} />
            <NumberInput source="weight" options={{ fullWidth: true }} />
            <BooleanInput source="markAsView" options={{ fullWidth: true }} />
        </SimpleForm>
    </Create>
);

export default OrganizationAssessmentHasQuestionCreate;
