import React from 'react';
import {
    ColumnActions,
    List,
    Datagrid,
    TextField,
} from '../../core';
import PreQuestionFilters from './PreQuestionFilters';

const PreQuestionList = props => (
    <List {...props} filters={<PreQuestionFilters />} >
        <Datagrid bodyOptions={{ stripedRows: true, showRowHover: true }}>
            <TextField source="text" />
            <ColumnActions smallScreen />
        </Datagrid>
    </List>
);

export default PreQuestionList;
