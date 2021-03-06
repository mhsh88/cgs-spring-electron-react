export default {
    pos: {
        search: 'Search',
        configuration: 'Configuration',
        language: {
            name: 'Language',
            en: 'English',
            ar: 'Arabic',
            fa: 'Persian',
        },
        theme: {
            name: 'Theme',
            light: 'Light',
            dark: 'Dark',
        },
        dashboard: {
            monthly_revenue: 'Monthly Revenue',
            new_orders: 'New Orders',
            pending_reviews: 'Pending Reviews',
            new_customers: 'New Customers',
            pending_orders: 'Pending Orders',
            order: {
                items: 'by %{customer_name}, one item |||| by %{customer_name}, %{nb_items} items',
            },
        },
    },
    resources: {
        groups: {
            users: 'Users',
            assessments: 'Assessments',
        },
        organizationassessments: {
            name: 'Assessment |||| Assessments',
            tabs: {
                step1: 'Site Information',
                step2: 'Sector & Demographic Information',
                step3: 'Security Assurance Level Selection',
                step4: 'Cybersecurity Standard Selection',
                step5: 'Questions',
                step6: 'Results',
            },
            fields: {
                assessmentName: 'name',
                date: 'date',
                facilityName: 'facility name',
                citySitename: 'city or site name',
                stateProvinceRegion: 'state, province or region',
                sector: 'sector',
                industry: 'industry',
                assessmentSal: {
                    sal: {
                        id: 'security assurance level',
                    },
                },
                standards: 'standards',
            },
            chart: {
                text: 'Answers percent',
            },
        },
        organizations: {
            name: 'Organization |||| Organizations',
            fields: {
                name: 'name',
            },
        },
        permissions: {
            name: 'Permission |||| Permissions',
            fields: {
                name: 'name',
            },
        },
        roles: {
            name: 'Role |||| Roles',
            fields: {
                name: 'name',
                title: 'title',
                organization: {
                    id: 'organization name',
                    name: 'organization name',
                },
                permissions: 'permission names',
            },
        },
        assessmentsals: {
            name: 'Assessment Sal |||| Assessment Sals',
            fields: {
                sal: {
                    id: '',
                    value: '',
                },
                organizationAssessments: '',
                accessibility: '',
                capitalAsset: '',
                capitalAsset_ge: '',
                capitalAsset_le: '',
                confidentiality: '',
                death: '',
                death_ge: '',
                death_le: '',
                economyImpact: '',
                economyImpact_ge: '',
                economyImpact_le: '',
                environmentalCleanUp: '',
                environmentalCleanUp_ge: '',
                environmentalCleanUp_le: '',
                hospital: '',
                hospital_ge: '',
                hospital_le: '',
                injury: '',
                injury_ge: '',
                injury_le: '',
                integrity: '',
            },
        },
        databasequestions: {
            name: 'Database Question |||| Database Questions',
            fields: {
                metric: '',
                metricPriority: '',
                metricPriority_ge: '',
                metricPriority_le: '',
                metricWeight: '',
                metricWeight_ge: '',
                metricWeight_le: '',
                questionText: '',
                standard: '',
                subMetric: '',
                subMetricPriority: '',
                subMetricPriority_ge: '',
                subMetricPriority_le: '',
                subMetricWeight: '',
                subMetricWeight_ge: '',
                subMetricWeight_le: '',
            },
        },
        metrics: {
            name: 'Metric |||| Metrics',
            fields: {
                priority: '',
                priority_ge: '',
                priority_le: '',
                text: '',
                weight: '',
                weight_ge: '',
                weight_le: '',
            },
        },
        organizationassessmenthasquestions: {
            name: 'Organization Assessment Has Question |||| Organization Assessment Has Questions',
            fields: {
                question: {
                    id: '',
                    text: '',
                },
                questionAnswer: {
                    id: '',
                    name: '',
                },
                preQuestionAnswer: {
                    id: '',
                    name: '',
                },
                organizationAssessment: {
                    id: '',
                    assessmentName: '',
                },
                markAsView: '',
                priority: '',
                weight: '',
            },
        },
        prequestionanswers: {
            name: 'Pre Question Answer |||| Pre Question Answers',
            fields: {
                answerComment: '',
                answerValue: '',
            },
        },
        prequestions: {
            name: 'Pre Question |||| Pre Questions',
            fields: {
                text: '',
                question: '',
            },
        },
        questionanswers: {
            name: 'Question Answer |||| Question Answers',
            fields: {
                answerValue: '',
                comment: '',
            },
            answer: {
                yes: '',
                no: '',
                notApplicable: '',
                alternativeResponse: '',
            },
            comment: 'Description of question number %{questionNumber}',
        },
        sals: {
            name: 'Sal |||| Sals',
            fields: {
                value: '',
                assessmentSals: '',
                questionHasSals: '',
            },
        },
        questions: {
            name: 'Question |||| Questions',
            fields: {
                questionHasSals: '',
                organizationAssessmentHasQuestions: '',
                questionScopes: '',
                text: '',
            },
        },
        questionhassals: {
            name: 'Question Has Sal |||| Question Has Sals',
            fields: {
                sal: {
                    id: '',
                    value: '',
                },
                'sal>value': '',
                standard: {
                    id: '',
                    text: '',
                },
                'standard>text': '',
                metric: {
                    id: '',
                    text: '',
                },
                'metric>text': '',
                subMetric: {
                    id: '',
                    text: '',
                },
                'subMetric>text': '',
                preQuestion: {
                    id: '',
                    text: '',
                },
                'preQuestion>text': '',
                question: {
                    id: '',
                    text: '',
                },
                'question>text': '',
                priority: '',
                priority_ge: '',
                priority_le: '',
                weight: '',
                weight_ge: '',
                weight_le: '',
            },
        },
        questionscopes: {
            name: 'Question Scope |||| Question Scopes',
            fields: {
                value: '',
                questions: '',
            },
        },
        standards: {
            name: 'Standard |||| Standards',
            fields: {
                text: '',
                metrics: '',
                organizationAssessments: '',
                questionHasSals: '',
            },
        },
        submetrics: {
            name: 'Sub Metric |||| Sub Metrics',
            fields: {
                metric: {
                    id: '',
                    text: '',
                },
                text: '',
                questions: '',
            },
        },
    },
};