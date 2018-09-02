import 'babel-polyfill';
import React, { Component } from 'react';
import { Admin, Resource } from './core';

import './App.css';

import authClient from './authClient';
import Login from './Login';
import Layout from './Layout';
import { Dashboard } from './dashboard';
import translations from './i18n';
import ResourceGroupIcons from './ResourceGroupIcons';

import {
    AssessmentSalCreate,
    AssessmentSalDelete,
    AssessmentSalDetails,
    AssessmentSalEdit,
    AssessmentSalList,
    AssessmentSalRetrieve,
    AssessmentSalIcon,
    DatabaseQuestionCreate,
    DatabaseQuestionDelete,
    DatabaseQuestionDetails,
    DatabaseQuestionEdit,
    DatabaseQuestionList,
    DatabaseQuestionRetrieve,
    DatabaseQuestionIcon,
    MetricCreate,
    MetricDelete,
    MetricDetails,
    MetricEdit,
    MetricList,
    MetricRetrieve,
    MetricIcon,
    OrganizationAssessmentCreate,
    OrganizationAssessmentDelete,
    OrganizationAssessmentList,
    OrganizationAssessmentIcon,
    OrganizationAssessmentHasQuestionCreate,
    OrganizationAssessmentHasQuestionDelete,
    OrganizationAssessmentHasQuestionDetails,
    OrganizationAssessmentHasQuestionEdit,
    OrganizationAssessmentHasQuestionList,
    OrganizationAssessmentHasQuestionRetrieve,
    OrganizationAssessmentHasQuestionIcon,
    PreQuestionCreate,
    PreQuestionDelete,
    PreQuestionDetails,
    PreQuestionEdit,
    PreQuestionList,
    PreQuestionRetrieve,
    PreQuestionIcon,
    QuestionCreate,
    QuestionDelete,
    QuestionDetails,
    QuestionEdit,
    QuestionList,
    QuestionRetrieve,
    QuestionIcon,
    QuestionHasSalCreate,
    QuestionHasSalDelete,
    QuestionHasSalDetails,
    QuestionHasSalEdit,
    QuestionHasSalList,
    QuestionHasSalRetrieve,
    QuestionHasSalIcon,
    QuestionScopeCreate,
    QuestionScopeDelete,
    QuestionScopeDetails,
    QuestionScopeEdit,
    QuestionScopeList,
    QuestionScopeRetrieve,
    QuestionScopeIcon,
    SalCreate,
    SalDelete,
    SalDetails,
    SalEdit,
    SalList,
    SalRetrieve,
    SalIcon,
    StandardCreate,
    StandardDelete,
    StandardDetails,
    StandardEdit,
    StandardList,
    StandardRetrieve,
    StandardIcon,
    SubMetricCreate,
    SubMetricDelete,
    SubMetricDetails,
    SubMetricEdit,
    SubMetricList,
    SubMetricRetrieve,
    SubMetricIcon,
} from './assessments';
import {
    OrganizationsList,
    OrganizationDetails,
    OrganizationCreate,
    OrganizationEdit,
    OrganizationDelete,
    OrganizationRetrieve,
    OrganizationIcon,
    PermissionsList,
    PermissionDetails,
    PermissionIcon,
    RolesList,
    RoleDetails,
    RoleCreate,
    RoleEdit,
    RoleDelete,
    RoleRetrieve,
    RoleIcon,
} from './users';

import {
    CityGateStationList,
    CityGateStationCreate,
    CityGateStationEdit,
    CityGateStationDetails,
    CityGateStationDelete,
    CityGateStationRetrieve,
    CityGateStationIcon,
    GasList,
    GasCreate,
    GasEdit, GasDetails,
    CalculationList, CalculationCreate, CalculationEdit, CalculationDetails,
    ConditionList, ConditionCreate,ConditionDetails,
    HeaterList, HeaterCreate, HeaterEdit,
    BurnerList, BurnerCreate,
    PipeSizeList, PipeSizeCreate, PipeSizeEdit, PipeSizeDetails,
    PipeSpecificationCreate, PipeSpecificationEdit, PipeSpecificationList, PipeSpecificationDetails,
    RunsHasConditionList, RunsHasConditionCreate,
    RunsCreate,RunsEdit,RunsList
} from './station';


import restClient from './restClient';

class App extends Component {
    componentWillMount() { }

    render() {
        return (
            <Admin
                title="CGS Panel"
                restClient={restClient}
                authClient={authClient}
                // dashboard={Dashboard}
                loginPage={Login}
                appLayout={Layout}
                messages={translations}
                resourceGroupIcons={ResourceGroupIcons}
            >
                <Resource name="citygatestations" group="stations" list={CityGateStationList} create={CityGateStationCreate} edit={CityGateStationEdit} show={CityGateStationDetails} remove={CityGateStationDelete} retrieve={CityGateStationRetrieve} icon={CityGateStationIcon} />
                <Resource name="calculations" group="stations" list={CalculationList} create={CalculationCreate} edit={CalculationEdit} show={CalculationDetails}/>
                <Resource name="gass" group="stations" list={GasList} create={GasCreate} edit={GasEdit} show={GasDetails}/>
                <Resource name="conditions" group="stations" list={ConditionList} create={ConditionCreate} condition={ConditionDetails}/>
                <Resource name="heaters" group="stations" list={HeaterList} create={HeaterCreate} edit={HeaterEdit}/>
                <Resource name="burners" group="stations" list={BurnerList} create={BurnerCreate} />
                <Resource name="afterheaters" group="stations" />
                <Resource name="pipespecificationss" group="stations" list={PipeSpecificationList} create={PipeSpecificationCreate} edit={PipeSpecificationEdit} show={PipeSpecificationDetails}/>
                <Resource name="pipesizes" group="stations" list={PipeSizeList} create={PipeSizeCreate} edit={PipeSizeEdit} show={PipeSizeDetails}/>
                <Resource name="runshasconditions" group="stations" list={RunsHasConditionList} create={RunsHasConditionCreate}/>
                <Resource name="runss" group="stations" list={RunsList} create={RunsCreate} edit={RunsEdit}/>
            </Admin>
        );
    }
}

export default App;
