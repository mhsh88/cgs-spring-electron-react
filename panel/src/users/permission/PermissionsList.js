import React from 'react';
import {
    ColumnActions,
    Datagrid,
    List,
} from '../../core';
import PermissionTitle from './PermissionTitle';
import PermissionFilters from './PermissionFilters';

const PermissionsList = props => (
    <List {...props} filters={<PermissionFilters />} >
        <Datagrid bodyOptions={{ stripedRows: true, showRowHover: true }}>
            <PermissionTitle smallScreen />
            <ColumnActions hasEdit={false} hasShow={false} hasDelete={false} hasRetrieve={false} smallScreen />
        </Datagrid>
    </List>
);

export default PermissionsList;
