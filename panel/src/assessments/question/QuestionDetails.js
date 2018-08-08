import React from 'react';
import {
    Show,
    SimpleShowLayout,
    TextField,
    ReferenceManyField,
    SingleFieldList,
    ChipField,
} from '../../core';
import QuestionTitle from './QuestionTitle';

const QuestionDetails = props => (
    <Show title={<QuestionTitle />} {...props}>
        <SimpleShowLayout>
            <TextField source="text" />
            <ReferenceManyField source="questionScopes" reference="questionscopes">
                <SingleFieldList>
                    <ChipField source="value" />
                </SingleFieldList>
            </ReferenceManyField>
        </SimpleShowLayout>
    </Show>
);

export default QuestionDetails;
