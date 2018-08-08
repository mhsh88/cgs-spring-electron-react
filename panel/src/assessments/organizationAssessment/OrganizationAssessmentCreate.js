import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEqual from 'lodash.isequal';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import {
    Create,
    DateInput,
    FormField,
    FormTab,
    LongTextInput,
    maxLength,
    RadioButtonGroupInput,
    ReferenceInput,
    ReferenceArrayInput,
    required,
    SelectArrayInput,
    SelectInput,
    TabbedForm,
    TextInput,
    translate,
} from '../../core';
import { Bar, Pie, HorizontalBar, Radar } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';
import Chart from '../../components/Chart';
import { crudGetList as crudGetListAction } from '../../core/actions/dataActions';
import QuestionsPagination from './QuestionsPagination';

import LinearProgress from 'material-ui/LinearProgress';
import CircularProgress from 'material-ui/CircularProgress';

const answers = [
    { id: 'Yes', name: 'resources.questionanswers.answer.yes' },
    { id: 'No', name: 'resources.questionanswers.answer.no' },
    { id: 'NotApplicable', name: 'resources.questionanswers.answer.notApplicable' },
    { id: 'AlternativeResponse', name: 'resources.questionanswers.answer.alternativeResponse' },
];
const preAnswers = [
    { id: 'Yes', name: 'resources.questionanswers.answer.yes' },
    { id: 'No', name: 'resources.questionanswers.answer.no' },
    { id: 'NotApplicable', name: 'resources.questionanswers.answer.notApplicable' },
];

export class OrganizationAssessmentCreate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 1,
        };
        this.questionNumbers = [];
        this.originalQuestionNumbers = {};
    }

    componentWillReceiveProps(nextProps) {
        if (!isEqual(nextProps.questionHasSals, this.props.questionHasSals)) {
            let metrics = {};
            let originalQuestionNumbers = {};
            Object.keys(nextProps.questionHasSals).map(key => nextProps.questionHasSals[key]).forEach((questionHasSal, index) => {
                if (Object.keys(metrics).map(k => metrics[k].text).indexOf(questionHasSal.metric.text) < 0) {
                    metrics[questionHasSal.metric.text] = {
                        id: questionHasSal.metric.id,
                        text: questionHasSal.metric.text,
                        priority: questionHasSal.metric.priority,
                        weight: questionHasSal.metric.weight,
                        subMetrics: {},
                    };
                }
                if (Object.keys(metrics[questionHasSal.metric.text].subMetrics)
                        .map(k => metrics[questionHasSal.metric.text].subMetrics[k].text)
                        .indexOf(questionHasSal.subMetric.text) < 0) {
                    metrics[questionHasSal.metric.text].subMetrics[questionHasSal.subMetric.id] = {
                        id: questionHasSal.subMetric.id,
                        text: questionHasSal.subMetric.text,
                        preQuestions: {},
                    };
                }
                if (Object.keys(metrics[questionHasSal.metric.text].subMetrics[questionHasSal.subMetric.id].preQuestions)
                        .map(k => metrics[questionHasSal.metric.text].subMetrics[questionHasSal.subMetric.id].preQuestions[k].text)
                        .indexOf(questionHasSal.preQuestion.text) < 0) {
                    metrics[questionHasSal.metric.text].subMetrics[questionHasSal.subMetric.id].preQuestions[questionHasSal.preQuestion.id] = {
                        id: questionHasSal.preQuestion.id,
                        text: questionHasSal.preQuestion.text,
                        questions: {},
                    };
                }
                if (Object.keys(metrics[questionHasSal.metric.text].subMetrics[questionHasSal.subMetric.id].preQuestions[questionHasSal.preQuestion.id].questions)
                        .map(k => metrics[questionHasSal.metric.text].subMetrics[questionHasSal.subMetric.id].preQuestions[questionHasSal.preQuestion.id].questions[k].text)
                        .indexOf(questionHasSal.question.text) < 0) {
                    metrics[questionHasSal.metric.text].subMetrics[questionHasSal.subMetric.id].preQuestions[questionHasSal.preQuestion.id].questions[questionHasSal.question.id] = {
                        id: questionHasSal.question.id,
                        text: questionHasSal.question.text,
                    };
                    if (originalQuestionNumbers[questionHasSal.metric.text] === undefined) {
                        originalQuestionNumbers[questionHasSal.metric.text] = 0;
                        
                    }
                    originalQuestionNumbers[questionHasSal.metric.text]++;
                }
            });
            this.setState({ metrics });
            
            this.originalQuestionNumbers = originalQuestionNumbers;
            this.calculateQuestionNumbers();
        }
    }

    componentDidUpdate(prevProps, prevState) {
        this.calculateQuestionNumbers();
    }

    calculateQuestionNumbers = () => {
        const zeroArr = [0];
        
            this.questionNumbers = zeroArr.concat(Object.keys(this.originalQuestionNumbers).map(key => this.originalQuestionNumbers[key]));
    };

    calculateResults = (questionId, value) => {
        this.setState({ [questionId]: value });
    };

    fetchQuestions = () => {
        if (this.selectedSal && this.selectedStandards) {
            //this.props.crudGetList('metrics', {}, {}, { 'standard.questionHasSals.sal.id_eq': this.selectedSal, 'standard.id_in': this.selectedStandards });
            this.props.crudGetList('questionhassals', {}, {}, { 'sal.id_eq': this.selectedSal, 'standard.id_in': this.selectedStandards });
        }
    };

    onSalChange = (ـ, sal) => {
        this.selectedSal = sal;
    };

    onStandardsChange = (_, standards) => {
        this.selectedStandards = standards.map(s => s.id).join();
    };

    onQuestionsTabActive = () => {
        this.fetchQuestions();
    };

    onAnswerPreQuestion = (metricId, subMetricId, preQuestionId, value) => {
        this.setState({[`showQuestionOf.${metricId}.${subMetricId}.${preQuestionId}`]: `pre_question_value_${value}`});
        this.calculateQuestionNumbers();
    };

    onAnswer = (questionId, value) => {
        this.setState({[`comment.${questionId}.validation`]: []});
        if(value === 'AlternativeResponse') {
            this.setState({[`comment.${questionId}.validation`]: [required]});
        }
        this.calculateResults(questionId, value);
        this.calculateQuestionNumbers();
    };

    arrangeValues = (record) => {
        const { assessmentName, date, facilityName, citySitename, stateProvinceRegion, sector, industry, assessmentSal, standards, ...rest } = record;
        return {
            assessmentName,
            date,
            facilityName,
            citySitename,
            stateProvinceRegion,
            sector,
            industry,
            assessmentSal,
            standards,
            organizationAssessmentHasQuestions: Object.keys(rest)
                .filter(key => key.indexOf('question.') > -1)
                .map(key => ({
                    question: {
                        id: key.substring(10),
                    },
                    questionAnswer: {
                        answerValue: record[key],
                        comment: record[`comment.${key.substring(10)}`] || '',
                    },
                })),
        };
    };

    returnPercent(value) {
        this.retrunNoOrNotAnswered();
        return Math.round(Object.keys(this.state).filter(val => this.state[val] === value).length * 100 / this.questionNumbers[this.questionNumbers.length - 1] * 100) / 100;
    }

    retrunNoOrNotAnswered(){
        var result =  Object.keys(this.state).filter(val => this.state[val] === 'No');
        console.log(result,'result',this.questionNumbers, 'this.questionNumbers', this.originalQuestionNumbers, 'this.originalQuestionNumbers');
        return result;
    }

    getMetrics(metrics){
        var result = [];
        var result2 = Object.keys(metrics).map((key) => result + metrics[key].text);
        return result2;
    }

    setQuestionPage = page => {
        this.setState({ page });
        this.calculateQuestionNumbers();
    };

    showQuestion = (metricId, subMetricId, preQuestionId, question, metricIndex, nullPreQuestion) => {
        if (nullPreQuestion || this.state[`showQuestionOf.${metricId}.${subMetricId}.${preQuestionId}`] &&
            this.state[`showQuestionOf.${metricId}.${subMetricId}.${preQuestionId}`] !== 'pre_question_value_NotApplicable') {
            return (
                <div key={`questionDiv.${question.id}`} style={{display: 'inline-flex', width: '100%', padding: '0 10px'}}>
                    <span key={`questionSpan.${question.id}`} style={{ margin: '14px 5px 0 5px' }}>{++this.questionNumbers[metricIndex]}</span>
                    <div key={`questionInputDiv.${question.id}`} style={{ height: 'auto', width: '100%' }}>
                        <FormField input={
                            <RadioButtonGroupInput
                                key={`question.${question.id}`}
                                label={question.text}
                                source={`question.${question.id}`}
                                choices={answers}
                                onChange={(_, value) => this.onAnswer(question.id, value)}
                                options={{ fullWidth: true }}
                            />}
                        />
                        <FormField input={
                            <LongTextInput
                                key={`comment.${question.id}`}
                                label={this.props.translate('resources.questionanswers.comment', {questionNumber: this.questionNumbers[metricIndex]})}
                                source={`comment.${question.id}`}
                                options={{fullWidth: true}}
                                validate={this.state[`comment.${question.id}.validation`]}
                            />}
                        />
                    </div>
                </div>
            );
        } else {
            return (
                <div key={`questionContentDiv.${question.id}`} style={{display: 'inline-flex', width: '100%', marginTop: '10px', padding: '0 10px'}}>
                    <span key={`questionContentSpan.${question.id}`} style={{ margin: '0 10px' }}>{++this.questionNumbers[metricIndex]}</span>
                    <div key={`questionContent.${question.id}`} style={{ height: 'auto', width: '100%' }}>
                        { question.text }
                    </div>
                </div>
            );
        }
    };

    render() {
        return (
            <Create {...this.props} beforeSave={this.arrangeValues}>
                <TabbedForm>
                    <FormTab label="resources.organizationassessments.tabs.step1">
                        <TextInput source="assessmentName" validate={[required, maxLength(45)]} options={{ fullWidth: true }} />
                        <DateInput source="date" validate={required} options={{ fullWidth: true }} />
                        <TextInput source="facilityName" validate={[required, maxLength(45)]} options={{ fullWidth: true }} />
                        <TextInput source="citySitename" validate={[required, maxLength(45)]} options={{ fullWidth: true }} />
                        <TextInput source="stateProvinceRegion" validate={[required, maxLength(45)]} options={{ fullWidth: true }} />
                    </FormTab>
                    <FormTab label="resources.organizationassessments.tabs.step2">
                        <TextInput source="sector" validate={[required, maxLength(45)]} options={{ fullWidth: true }} />
                        <TextInput source="industry" validate={[required, maxLength(45)]} options={{ fullWidth: true }} />
                    </FormTab>
                    <FormTab label="resources.organizationassessments.tabs.step3">
                        <ReferenceInput source="assessmentSal.sal.id" reference="sals" validate={required} onChange={this.onSalChange}>
                            <SelectInput optionText="value" options={{ fullWidth: true }} />
                        </ReferenceInput>
                    </FormTab>
                    <FormTab label="resources.organizationassessments.tabs.step4">
                        <ReferenceArrayInput source="standards" reference="standards" validate={required} onChange={this.onStandardsChange}>
                            <SelectArrayInput optionText="text" options={{ fullWidth: true }} />
                        </ReferenceArrayInput>
                    </FormTab>
                    <FormTab label="resources.organizationassessments.tabs.step5" onActive={this.onQuestionsTabActive}>
                        {
                            this.state.metrics && Object.keys(this.state.metrics).length > 0 && Object.keys(this.state.metrics).map(metricText => this.state.metrics[metricText]).map((metric, index) => (
                                (index === (this.state.page - 1)) && <div key={`metricDiv.${metric.id}`} style={{ height: 'auto !important' }}>

                                    <h3 key={`metricH3.${metric.id}`}>{metric.text}</h3>
                                    {
                                        Object.keys(metric.subMetrics).map(subMetricId => metric.subMetrics[subMetricId]).map(subMetric => (
                                            <div key={`subMetricDiv.${subMetric.id}`} style={{ padding: '0 20px' }}>
                                                <h4 key={`subMetricH4.${subMetric.id}`}>{subMetric.text}</h4>
                                                {
                                                    Object.keys(subMetric.preQuestions).map(preQuestionId => subMetric.preQuestions[preQuestionId]).map(preQuestion => (
                                                        <div key={`preQuestionDiv.${preQuestion.id}`} style={{ width: '100%', padding: '0 20px' }}>
                                                            { preQuestion.text !== 'null' &&
                                                                <FormField input={
                                                                    <RadioButtonGroupInput
                                                                        key={`preQuestion.${metric.id}.${subMetric.id}.${preQuestion.id}`}
                                                                        label={preQuestion.text}
                                                                        source={`preQuestion.${metric.id}.${subMetric.id}.${preQuestion.id}`}
                                                                        choices={preAnswers}
                                                                        onChange={(_, value) => this.onAnswerPreQuestion(metric.id, subMetric.id, preQuestion.id, value)}
                                                                        options={{fullWidth: true}}
                                                                    />}
                                                                />
                                                            }
                                                            {
                                                                Object.keys(preQuestion.questions).map(questionId => preQuestion.questions[questionId]).map(question => (
                                                                    this.showQuestion(metric.id, subMetric.id, preQuestion.id, question, index, preQuestion.text === 'null')
                                                                ))
                                                            }
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        ))
                                    }
                                    <div style={{ marginTop: '25px' }}>
                                        {
                                            this.props.pagination && React.cloneElement(this.props.pagination, {
                                                page: index + 1,
                                                totalPages: Object.keys(this.state.metrics).length,
                                                setPage: this.setQuestionPage,
                                            })
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </FormTab>
                    <FormTab label="resources.organizationassessments.tabs.step6">
                        <div key='resultDiv' style={{ height: 'auto !important', margin: 'auto', width: 500 }}>
                            <Bar
                                data={{
                                    datasets: [{
                                        label: this.props.translate('resources.questionanswers.answersResult.answered'),
                                        backgroundColor: ['#5BEB4A' ],
                                        borderColor: '#3672EB',
                                        borderWidth: 1,
                                        hoverBackgroundColor: '#3642EB',
                                        hoverBorderColor: '#3612EB',
                                        data: [Math.round(this.returnPercent('Yes') / 100 + this.returnPercent('No') / 100 + this.returnPercent('NotApplicable') / 100 + this.returnPercent('AlternativeResponse') / 100)],
                                    }],

                                }}
                                width={400}
                                height={400}
                                options={{
                                    tooltips: {
                                        callbacks: {
                                            label: function(tooltipItem) {
                                                return tooltipItem.yLabel;
                                            }
                                        }
                                    },
                                    maintainAspectRatio: false,
                                    title: {
                                        display: false,
                                        text: 'Chart.js Doughnut Chart'
                                    },
                                    plugins: {
                                        datalabels: {
                                            formatter: function(value) {
                                                return 'درصد پیشرفت' + '\n' +  Math.round(value) + '%';
                                            },
                                            display: true,
                                            color: 'black',
                                            font:{
                                                size: 20,
                                                // family: .font-face,
                                            },
                                            // position: 'bottom',
                                            anchor: 'end',
                                            align: -40,
                                            textAlign: 'center',
                                        },

                                    },
                                    scales:
                                        {
                                            yAxes: [{
                                                display:false,
                                                gridLines : {
                                                    display : false
                                                }
                                            }],
                                            xAxes: [{
                                                display:false,
                                                gridLines: {
                                                    display: false,
                                                },
                                            }],
                                        }
                                }}
                            />
                        </div>
                        <div key='resultDiv1' style={{ height: 'auto !important' }}>
                            <Pie
                                data={{
                                    labels: [
                                        this.props.translate('resources.questionanswers.answersResult.yes'),
                                        this.props.translate('resources.questionanswers.answersResult.no'),
                                        this.props.translate('resources.questionanswers.answersResult.notApplicable'),
                                        this.props.translate('resources.questionanswers.answersResult.alternativeResponse'),
                                        this.props.translate('resources.questionanswers.answersResult.noAnswer'),
                                    ],
                                    datasets: [{
                                        backgroundColor: ['#e7eb2b','#5BEB4A','#EB5C73','#D82FEB','#5FE3EB' ],
                                        borderColor: '#3672EB',
                                        borderWidth: 1,
                                        hoverBackgroundColor: '#3642EB',
                                        hoverBorderColor: '#3612EB',
                                        data: [this.returnPercent('Yes') / 100,
                                            this.returnPercent('No')  / 100,
                                            this.returnPercent('NotApplicable')  / 100,
                                            this.returnPercent('AlternativeResponse')  / 100,
                                            Math.round((100 - this.returnPercent('Yes')  / 100 - this.returnPercent('No') / 100 - this.returnPercent('NotApplicable') / 100 - this.returnPercent('AlternativeResponse') / 100) * 100) / 100],
                                    }],
                                }}
                                width={400}
                                height={400}
                                options={{
                                    plugins: {
                                        datalabels: {
                                            display: false,
                                            color: 'white'
                                        }
                                    },
                                    maintainAspectRatio: false,
                                }}
                            />
                        </div >

                        <div key='resultDiv3' style={{ height: 'auto !important', margin: 'auto', width: 600 }}>



                            <HorizontalBar
                                data = {{



                                    // .map(function (key) { return obj[key]; })
                                    // labels: [(this.state.metrics !== undefined) ? Object.keys(this.state.metrics).map(key => this.state.metrics[key].text) : 'undefined'],

                                    labels: (this.state.metrics !== undefined) ? this.getMetrics(this.state.metrics) : ['undefined'],
                                    // labels: ['کنترل دسترسی', 'حفاظت از ارتباطات', 'حفاظت از سیستم' ,'مدیریت پیکربندی', 'سیاستها', 'سازمانی',
                                    //     'پایش و بدافزارها', 'مدیریت حساب کاربری', 'امنیت فیزیکی', 'آموزش', 'رویه‌ها', 'قابل حمل /سیار/بیسیم',
                                    //     'پیوستگی/تداوم', 'کارکنان'],
                                    datasets: [{
                                    label: 'اهمیت معیارهای اصلی',
                                    backgroundColor: 'rgba(255,99,132,0.2)',
                                    borderColor: 'rgba(255,99,132,1)',
                                    borderWidth: 1,
                                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                                    hoverBorderColor: 'rgba(255,99,132,1)',
                                    // data: [(this.state.metrics !== undefined) ? Object.keys(this.state.metrics).map(key => this.state.metrics[key].priority) * 1000 : 100],
                                    data: (this.state.metrics !== undefined) ? Object.keys(this.state.metrics).map(key => parseFloat(this.state.metrics[key].weight)) : [100],
                                    // data: [100 * Math.random(), 100 * Math.random(), 100 * Math.random(), 100 * Math.random(), 100 * Math.random()
                                    // data: [15.6 + 10*Math.random(), 13.6 + 10*Math.random(), 12.54 + 10*Math.random(), 7.67 + 10*Math.random(), 5.74 + 10*Math.random(),
                                    //     10.34 + 10*Math.random(), 3.8 + 10*Math.random(), 2.99 + 10*Math.random(), 3.33 + 10*Math.random(), 1.55 + 10*Math.random(),
                                    //     1.7 + 10*Math.random(), 4.33 + 10*Math.random(), 2.2 + 10*Math.random(), 2.5 + 10*Math.random() ],
                                }]
                                }}
                                width={600}
                                height={600}
                                options={{
                                    plugins: {
                                        datalabels: {
                                            display: false,
                                            color: 'white'
                                        }
                                    },
                                    maintainAspectRatio: false,
                                }}
                            />


                        </div>
                        <div key='resultDiv4' style={{ height: 'auto !important', margin: 'auto', width: 500 }}>

                            <Radar
                                data={{
                                    labels: [
                                                'سخت افزار', 'نرم افزار','منابع انسانی', 'سیاست گذاری', 'ارتباطات'
                                    ],
                                    datasets: [{
                                        label: 'ریسک واقعی',
                                        backgroundColor: 'rgba(179,181,198,0.2)',
                                        borderColor: 'rgba(179,181,198,1)',
                                        pointBackgroundColor: 'rgba(179,181,198,1)',
                                        pointBorderColor: '#fff',
                                        pointHoverBackgroundColor: '#fff',
                                        pointHoverBorderColor: 'rgba(179,181,198,1)',
                                        data: [100 * Math.random(), 100 * Math.random(), 100 * Math.random(), 100 * Math.random(), 100 * Math.random()]
                                    }, {
                                        label: 'ریسک قابل پذیرش',
                                        backgroundColor: 'rgba(255,99,132,0.2)',
                                        borderColor: 'rgba(255,99,132,1)',
                                        pointBackgroundColor: 'rgba(255,99,132,1)',
                                        pointBorderColor: '#fff',
                                        pointHoverBackgroundColor: '#fff',
                                        pointHoverBorderColor: 'rgba(255,99,132,1)',
                                        data: [100 * Math.random(), 100 * Math.random(), 100 * Math.random(), 100 * Math.random(), 100 * Math.random()]
                                    }],
                                }}
                                width={500}
                                height={500}
                                options={{
                                    plugins: {
                                        datalabels: {
                                            display: false,
                                            color: 'white'
                                        }
                                    },
                                    maintainAspectRatio: false,
                                }}
                            />


                        </div>
                        {/*<div key="result" style={{ width: '100%', height: 'auto !important'}} >
                            <h1>{`${this.props.translate('resources.questionanswers.answersResult.yes')} = ${this.returnPercent("yes")} %`}</h1>
                            <LinearProgress style={{height: '20px', color:'black'}}  mode="determinate" value={this.returnPercent("yes")}/>
                            <CircularProgress
                                mode="determinate"
                                value={this.returnPercent("yes")}
                                size={80}
                                thickness={5}
                            />

                            <h1>{`${this.props.translate('resources.questionanswers.answersResult.no')} = ${this.returnPercent("no")} %`}</h1>
                            <LinearProgress style={{height: '20px', color:'black'}}  mode="determinate" value={this.returnPercent("no")}/>
                            <CircularProgress
                                mode="determinate"
                                value={this.returnPercent("no")}
                                size={80}
                                thickness={5}
                            />

                            <h1>{`${this.props.translate('resources.questionanswers.answersResult.notApplicable')} = ${this.returnPercent("not")} %`}</h1>
                            <LinearProgress style={{height: '20px', color:'black'}}  mode="determinate" value={this.returnPercent("not")}/>
                            <CircularProgress
                                mode="determinate"
                                value={this.returnPercent("not")}
                                size={80}
                                thickness={5}
                            />

                            <h1>{`${this.props.translate('resources.questionanswers.answersResult.alternativeResponse')} = ${this.returnPercent("alter")} %`}</h1>
                            <LinearProgress style={{height: '20px', color:'black'}}  mode="determinate" value={this.returnPercent("alter")}/>
                            <CircularProgress
                                mode="determinate"
                                value={this.returnPercent("alter")}
                                size={80}
                                thickness={5}
                            />

                            <h1>{`${this.props.translate('resources.questionanswers.answersResult.noAnswer')} = ${Math.round((100 - this.returnPercent("yes") - this.returnPercent("no") - this.returnPercent("not") - this.returnPercent("alter")) * 100) / 100} %`}</h1>
                            <LinearProgress style={{height: '20px', color:'black'}}  mode="determinate" value={Math.round((100 - this.returnPercent("yes") - this.returnPercent("no") - this.returnPercent("not") - this.returnPercent("alter")) * 100) / 100}/>
                            <CircularProgress
                                mode="determinate"
                                value={Math.round((100 - this.returnPercent("yes") - this.returnPercent("no") - this.returnPercent("not") - this.returnPercent("alter")) * 100) / 100}
                                size={100}
                                thickness={10}
                            />
                        </div>*/}
                    </FormTab>
                </TabbedForm>
            </Create>
        );
    }
}



OrganizationAssessmentCreate.propTypes = {
    crudGetList: PropTypes.func,
    questionHasSals: PropTypes.object,
    //pagination: PropTypes.element,
    translate: PropTypes.func,
};

OrganizationAssessmentCreate.defaultProps = {
    pagination: <QuestionsPagination />,
};

const mapStateToProps = state => ({
    questionHasSals: state.admin.questionhassals.data,
});

const enhance = compose(
    translate,
    connect(mapStateToProps, { crudGetList: crudGetListAction }),
);

export default enhance(OrganizationAssessmentCreate);
