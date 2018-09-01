import React from 'react';
import {
    ColumnActions,
    List,
    Datagrid,
    TextField, EditButton, ReferenceField,BooleanField, DeleteButton
} from  '../../core';


export const BurnerList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id"/>
            <TextField source="text"/>
            <TextField source="oxygenPercent"/>
            <TextField source="flueGasTemprature"/>
            <ColumnActions/>
        </Datagrid>
    </List>
);

export default BurnerList;