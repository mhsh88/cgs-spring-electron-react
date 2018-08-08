import React from 'react';
import {
    ColumnActions,
    List,
    Datagrid,
    TextField,
} from '../../core';
import SalFilters from './SalFilters';

const SalList = props => (
    <List {...props} filters={<SalFilters />} >
        <Datagrid bodyOptions={{ stripedRows: true, showRowHover: true }}>
            <TextField source="value" />
            <ColumnActions smallScreen />
        </Datagrid>
    </List>
);

export default SalList;
