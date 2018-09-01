import React from 'react';
import {
    ColumnActions,
    List,
    Datagrid,
    TextField, EditButton, ReferenceField, BooleanField, DeleteButton, NumberField
} from '../../core';


export const RunsHasConditionList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id"/>
            <TextField source="text"/>
            <NumberField source="debi"/>
            <ColumnActions/>
        </Datagrid>
    </List>
);

export default RunsHasConditionList;