import React from 'react';
import {
    Show,
    SimpleShowLayout,
    TextField,
} from '../../core';
import SalTitle from './SalTitle';

const SalDetails = props => (
    <Show title={<SalTitle />} {...props}>
        <SimpleShowLayout>
            <TextField source="value" />
        </SimpleShowLayout>
    </Show>
);

export default SalDetails;
