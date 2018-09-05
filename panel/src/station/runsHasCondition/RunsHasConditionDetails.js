import React from 'react';
import {
    ColumnActions,
    List,
    Datagrid,
    TextField, EditButton, ReferenceField, BooleanField, DeleteButton, NumberField, SimpleShowLayout, Show
} from '../../core';
import DebiField from '../../components/cgsbase/DebiField';


export const RunsHasConditionDetails = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="text" />
            <DebiField source="debi" />
            <ColumnActions />
        </SimpleShowLayout>
    </Show>
);

export default RunsHasConditionDetails;
