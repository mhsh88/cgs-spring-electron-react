import React from 'react';
import {
    ColumnActions,
    Datagrid,
    List,
    TextField,
} from '../../core';
import RoleFilters from './RoleFilters';

const RolesList = props => (
    <List {...props} filters={<RoleFilters />} >
        <Datagrid bodyOptions={{ stripedRows: true, showRowHover: true }}>
            <TextField source="name" />
            <TextField source="title" smallScreen />
            {/* <TextField source="organization.name" />*/}
            <ColumnActions smallScreen />
        </Datagrid>
    </List>
);

export default RolesList;
