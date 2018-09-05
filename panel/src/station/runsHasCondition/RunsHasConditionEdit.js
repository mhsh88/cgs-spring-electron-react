import React from 'react';
import {
    SelectInput,
    minValue,
    maxValue,
    maxLength,
    required,
    Create,
    Edit,
    SimpleForm,
    ReferenceInput,
    DisabledInput,
    TextInput,
    DateInput,
    LongTextInput,
    ReferenceManyField,
    Datagrid,
    DateField,
    EditButton,
    NumberInput,
    BooleanInput,
    TextField
} from '../../core';
import DebiInput from "../../components/cgsbase/input/DebiInput";

export class RunsHasConditionEdit extends React.Component {
    state = {
        debiUnit:'متر مکعب بر ساعت'
    };

    debiUnitChange = unit =>{
        this.setState({debiUnit: unit});
    };

    arrangeValues = (record) => {
        const { debi, ...rest } = record;
        return {
            debi: this.state.debiUnit === 'متر مکعب بر ساعت'? debi: this.state.debiUnit === 'متر مکعب بر روز'? debi / 24: this.state.debiUnit === 'متر مکعب بر ماه'? debi / 24 / 30: this.state.debiUnit === 'متر مکعب بر سال'? debi / 24 / 30 / 365 : debi,
            ...rest
        };
    };

    render() {
        return (
            <Edit {...this.props} beforeSave={this.arrangeValues}>
                <SimpleForm>
                    <DisabledInput source="id"/>
                    <DisabledInput source="text"/>
                    <DebiInput source="debi" validate={[required, minValue(0)]} onUnitChange={this.debiUnitChange}/>
                </SimpleForm>
            </Edit>

        );
}
}


export default RunsHasConditionEdit;
