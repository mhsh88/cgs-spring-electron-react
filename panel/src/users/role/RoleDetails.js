import React from 'react';
import {
    ChipField,
    ReferenceManyField,
    Show,
    SimpleShowLayout,
    SingleFieldList,
    TextField,
} from '../../core';
import RoleTitle from './RoleTitle';

const RoleDetails = props => (
    <Show title={<RoleTitle />} {...props}>
        <SimpleShowLayout>
            <TextField source="name" />
            <TextField source="title" />
            <ReferenceManyField source="permissions.id" reference="permissions">
                <SingleFieldList>
                    <ChipField source="name" />
                </SingleFieldList>
            </ReferenceManyField>
        </SimpleShowLayout>
    </Show>
);

export default RoleDetails;
