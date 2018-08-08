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

import restClient from './restClient';

class App extends Component {
    componentWillMount() { }

    render() {
        return (
            <Admin
                title="ICS Panel"
                restClient={restClient}
                authClient={authClient}
                // dashboard={Dashboard}
                loginPage={Login}
                appLayout={Layout}
                messages={translations}
                resourceGroupIcons={ResourceGroupIcons}
            >
                <Resource name="organizationassessments" group="assessments" list={OrganizationAssessmentList} create={OrganizationAssessmentCreate} icon={OrganizationAssessmentIcon} remove={OrganizationAssessmentDelete}/>
                <Resource name="assessmentsals" group="assessments" list={AssessmentSalList} create={AssessmentSalCreate} edit={AssessmentSalEdit} show={AssessmentSalDetails} remove={AssessmentSalDelete} retrieve={AssessmentSalRetrieve} icon={AssessmentSalIcon} />
                <Resource name="databasequestions" group="assessments" list={DatabaseQuestionList} create={DatabaseQuestionCreate} edit={DatabaseQuestionEdit} show={DatabaseQuestionDetails} remove={DatabaseQuestionDelete} retrieve={DatabaseQuestionRetrieve} icon={DatabaseQuestionIcon} />
                <Resource name="metrics" group="assessments" list={MetricList} create={MetricCreate} edit={MetricEdit} show={MetricDetails} remove={MetricDelete} retrieve={MetricRetrieve} icon={MetricIcon} />
                <Resource name="organizationassessmenthasquestions" group="assessments" list={OrganizationAssessmentHasQuestionList} create={OrganizationAssessmentHasQuestionCreate} edit={OrganizationAssessmentHasQuestionEdit} show={OrganizationAssessmentHasQuestionDetails} remove={OrganizationAssessmentHasQuestionDelete} retrieve={OrganizationAssessmentHasQuestionRetrieve} icon={OrganizationAssessmentHasQuestionIcon} />
                <Resource name="prequestions" group="assessments" list={PreQuestionList} create={PreQuestionCreate} edit={PreQuestionEdit} show={PreQuestionDetails} remove={PreQuestionDelete} retrieve={PreQuestionRetrieve} icon={PreQuestionIcon} />
                <Resource name="questions" group="assessments" list={QuestionList} create={QuestionCreate} edit={QuestionEdit} show={QuestionDetails} remove={QuestionDelete} retrieve={QuestionRetrieve} icon={QuestionIcon} />
                <Resource name="questionhassals" group="assessments" list={QuestionHasSalList} create={QuestionHasSalCreate} edit={QuestionHasSalEdit} show={QuestionHasSalDetails} remove={QuestionHasSalDelete} retrieve={QuestionHasSalRetrieve} icon={QuestionHasSalIcon} />
                <Resource name="questionscopes" group="assessments" list={QuestionScopeList} create={QuestionScopeCreate} edit={QuestionScopeEdit} show={QuestionScopeDetails} remove={QuestionScopeDelete} retrieve={QuestionScopeRetrieve} icon={QuestionScopeIcon} />
                <Resource name="sals" group="assessments" list={SalList} create={SalCreate} edit={SalEdit} show={SalDetails} remove={SalDelete} retrieve={SalRetrieve} icon={SalIcon} />
                <Resource name="standards" group="assessments" list={StandardList} create={StandardCreate} edit={StandardEdit} show={StandardDetails} remove={StandardDelete} retrieve={StandardRetrieve} icon={StandardIcon} />
                <Resource name="submetrics" group="assessments" list={SubMetricList} create={SubMetricCreate} edit={SubMetricEdit} show={SubMetricDetails} remove={SubMetricDelete} retrieve={SubMetricRetrieve} icon={SubMetricIcon} />

                <Resource name="organizations" group="users" list={OrganizationsList} show={OrganizationDetails} create={OrganizationCreate} edit={OrganizationEdit} remove={OrganizationDelete} retrieve={OrganizationRetrieve} icon={OrganizationIcon} />
                <Resource name="permissions" group="users" list={PermissionsList} show={PermissionDetails} icon={PermissionIcon} />
                <Resource name="roles" group="users" list={RolesList} show={RoleDetails} create={RoleCreate} edit={RoleEdit} remove={RoleDelete} retrieve={RoleRetrieve} icon={RoleIcon} />
            </Admin>
        );
    }
}

export default App;
