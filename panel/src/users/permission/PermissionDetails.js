import React from 'react';
import {
    Show,
    SimpleShowLayout,
} from '../../core';
import PermissionTitle from './PermissionTitle';

const PermissionDetails = props => (
    <Show title={<PermissionTitle />} {...props}>
        <SimpleShowLayout>
            <PermissionTitle />
        </SimpleShowLayout>
    </Show>
);

export default PermissionDetails;
