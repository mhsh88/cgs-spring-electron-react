import React from 'react';
import {
    ColumnActions,
    List,
    Datagrid,
    TextField,
    SingleFieldList,
    ChipField,
} from '../../core';
import QuestionFilters from './QuestionFilters';

const QuestionList = props => (
    <List {...props} filters={<QuestionFilters />} >
        <Datagrid bodyOptions={{ stripedRows: true, showRowHover: true }}>
            <TextField source="text" />
            {/*<TextField source="standard.text" />*/}
            <ColumnActions smallScreen />
        </Datagrid>
    </List>
);

export default QuestionList;
