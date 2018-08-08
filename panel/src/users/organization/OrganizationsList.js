import React from 'react';
import {
    ColumnActions,
    Datagrid,
    List,
    TextField,
} from '../../core';
import OrganizationFilters from './OrganizationFilters';

const OrganizationsList = props => (
    <List {...props} filters={<OrganizationFilters />} >
        <Datagrid bodyOptions={{ stripedRows: true }}>
            <TextField source="name" smallScreen />
            <ColumnActions smallScreen />
        </Datagrid>
    </List>
);

export default OrganizationsList;
