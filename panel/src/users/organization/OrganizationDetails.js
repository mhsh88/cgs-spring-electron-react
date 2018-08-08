import React from 'react';
import {
    Show,
    SimpleShowLayout,
    TextField,
} from '../../core';
import OrganizationTitle from './OrganizationTitle';

const OrganizationDetails = props => (
    <Show title={<OrganizationTitle />} {...props}>
        <SimpleShowLayout>
            <TextField source="name" />
        </SimpleShowLayout>
    </Show>
);

export default OrganizationDetails;
