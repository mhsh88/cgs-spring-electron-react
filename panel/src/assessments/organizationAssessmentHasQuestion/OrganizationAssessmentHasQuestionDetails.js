import React from 'react';
import {
    BooleanField,
    Show,
    SimpleShowLayout,
    ReferenceField,
    TextField,
    NumberField,
} from '../../core';
import OrganizationAssessmentHasQuestionTitle from './OrganizationAssessmentHasQuestionTitle';

const OrganizationAssessmentHasQuestionDetails = props => (
    <Show title={<OrganizationAssessmentHasQuestionTitle />} {...props}>
        <SimpleShowLayout>
            <ReferenceField source="questionAnswer.id" reference="questionanswers">
                <TextField source="name" />
            </ReferenceField>
            <ReferenceField source="preQuestionAnswer.id" reference="prequestionanswers">
                <TextField source="name" />
            </ReferenceField>
            <ReferenceField source="organizationAssessment.id" reference="organizationassessments">
                <TextField source="name" />
            </ReferenceField>
            <NumberField source="priority" />
            <NumberField source="weight" />
            <BooleanField source="markAsView" />
        </SimpleShowLayout>
    </Show>
);

export default OrganizationAssessmentHasQuestionDetails;
