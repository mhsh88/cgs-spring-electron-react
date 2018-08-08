import React from 'react';
import {
    Show,
    SimpleShowLayout,
    TextField,
} from '../../core';
import PreQuestionTitle from './PreQuestionTitle';

const PreQuestionDetails = props => (
    <Show title={<PreQuestionTitle />} {...props}>
        <SimpleShowLayout>
            <TextField source="text" />
        </SimpleShowLayout>
    </Show>
);

export default PreQuestionDetails;
