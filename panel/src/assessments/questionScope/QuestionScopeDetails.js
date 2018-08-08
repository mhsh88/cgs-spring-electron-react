import React from 'react';
import {
    Show,
    SimpleShowLayout,
    TextField,
} from '../../core';
import QuestionScopeTitle from './QuestionScopeTitle';

const QuestionScopeDetails = props => (
    <Show title={<QuestionScopeTitle />} {...props}>
        <SimpleShowLayout>
            <TextField source="value" />
        </SimpleShowLayout>
    </Show>
);

export default QuestionScopeDetails;
