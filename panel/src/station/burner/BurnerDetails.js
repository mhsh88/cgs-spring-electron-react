import React from 'react';
import {
    ColumnActions,
    List,
    Datagrid,
    TextField, EditButton, ReferenceField, BooleanField, DeleteButton, Show, SimpleShowLayout
} from '../../core';


export const BurnerDetails = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id"/>
            <TextField source="text"/>
            <TextField source="oxygenPercent"/>
            <TextField source="flueGasTemprature"/>
            <ColumnActions/>
        </SimpleShowLayout>
    </Show>
);

export default BurnerDetails;