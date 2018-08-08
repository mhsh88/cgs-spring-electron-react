import React from 'react';
import {
    Show,
    SimpleShowLayout,
    TextField,
    NumberField,
} from '../../core';
import MetricTitle from './MetricTitle';

const MetricDetails = props => (
    <Show title={<MetricTitle />} {...props}>
        <SimpleShowLayout>
            <TextField source="text" />
            <NumberField source="priority" />
            <NumberField source="weight" />
        </SimpleShowLayout>
    </Show>
);

export default MetricDetails;
