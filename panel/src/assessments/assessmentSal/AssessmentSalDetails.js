import React from 'react';
import {
    Show,
    SimpleShowLayout,
    TextField,
    NumberField,
} from '../../core';
import AssessmentSalTitle from './AssessmentSalTitle';

const AssessmentSalDetails = props => (
    <Show title={<AssessmentSalTitle />} {...props}>
        <SimpleShowLayout>
            <TextField source="sal.value" />
            <TextField source="accessibility" />
            <NumberField source="capitalAsset" />
            <TextField source="confidentiality" />
            <NumberField source="death" />
            <NumberField source="economyImpact" />
            <NumberField source="environmentalCleanUp" />
            <NumberField source="hospital" />
            <NumberField source="injury" />
            <TextField source="integrity" />
        </SimpleShowLayout>
    </Show>
);

export default AssessmentSalDetails;
