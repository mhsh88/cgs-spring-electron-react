import React from 'react';
import {
    BooleanField,
    ColumnActions,
    List,
    Datagrid,
    TextField,
    NumberField,
} from '../../core';
import OrganizationAssessmentHasQuestionFilters from './OrganizationAssessmentHasQuestionFilters';

const OrganizationAssessmentHasQuestionList = props => (
    <List {...props} filters={<OrganizationAssessmentHasQuestionFilters />} >
        <Datagrid bodyOptions={{ stripedRows: true, showRowHover: true }}>
            <NumberField source="priority" />
            <NumberField source="weight" />
            <BooleanField source="markAsView" />
            <ColumnActions smallScreen />
        </Datagrid>
    </List>
);

export default OrganizationAssessmentHasQuestionList;
