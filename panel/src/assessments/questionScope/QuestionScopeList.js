import React from 'react';
import {
    ColumnActions,
    List,
    Datagrid,
    TextField,
} from '../../core';
import QuestionScopeFilters from './QuestionScopeFilters';

const QuestionScopeList = props => (
    <List {...props} filters={<QuestionScopeFilters />} >
        <Datagrid bodyOptions={{ stripedRows: true, showRowHover: true }}>
            <TextField source="value" />
            <ColumnActions smallScreen />
        </Datagrid>
    </List>
);

export default QuestionScopeList;
