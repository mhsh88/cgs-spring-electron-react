import React from 'react';
import {
    ColumnActions,
    List,
    Datagrid,
    TextField,
} from '../../core';
import StandardFilters from './StandardFilters';

const StandardList = props => (
    <List {...props} filters={<StandardFilters />} >
        <Datagrid bodyOptions={{ stripedRows: true, showRowHover: true }}>
            <TextField source="text" />
            <ColumnActions smallScreen />
        </Datagrid>
    </List>
);

export default StandardList;
