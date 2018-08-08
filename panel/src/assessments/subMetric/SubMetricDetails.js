import React from 'react';
import {
    Show,
    SimpleShowLayout,
    ReferenceField,
    TextField,
} from '../../core';
import SubMetricTitle from './SubMetricTitle';

const SubMetricDetails = props => (
    <Show title={<SubMetricTitle />} {...props}>
        <SimpleShowLayout>
            <TextField source="text" />
        </SimpleShowLayout>
    </Show>
);

export default SubMetricDetails;
