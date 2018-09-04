export default {
    pos: {
        search: 'جستجو',
        configuration: 'تنظیمات',
        language: {
            name: 'زبان',
            en: 'انگلیسی',
            ar: 'عربی',
            fa: 'فارسی',
        },
        theme: {
            name: 'تم',
            light: 'روشن',
            dark: 'تیره',
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
            users: 'کاربران',
            assessments: 'ارزیابی‌ها',
            stations: 'ایستگاه‌های تقلیل فشار گاز'
        },
        citygatestations:{
            name: 'اطلاعات ایستگاه',
            fields: {
                id: 'ایستگاه',
                province:'استان',
                city:'شهر',
                condition:'وضعیت',
                region:'منطقه',
                address:'آدرس',
                nominalCapacity:'ظرفیت اسمی',
                heaters:"گرم‌کن‌ها",
                afterHeater: {
                    id: 'خط لوله بعد از گرم‌کن'
                },
                beforeHeater: {
                  id: 'خط لوله قبل از گرم‌کن'
                },
                collector: {
                    id: 'کلکتور'
                },
                runs: {
                  id: 'ران‌'
                },
            }
        },
        calculations:{
          name: 'محاسبات',
            fields: {
              id: 'اطلاعات محاسبه',
              station:{

              },
                cityGateStation:{
                  id: 'ایستگاه تقلیل فشار گاز'
                },
                condition:{
                  id:'شرایط'
                },
                gas:{
                  id:'اطلاعات گاز'
                }

            }
        },
        gass:{
            name: 'اطلاعات گاز |||| اطلاعات گازها',
            fields:{
                id: 'گاز طبیعی',


            },
        },
        conditions:{
          name: 'شرایط ایستگاه',
          fields:{
              id: '',
              envTempreture: 'دمای محیط',
              windSpeed: 'سرعت باد (متر بر ثانیه)',
              stationDebi:'دبی عبوری',
              stationInputTemprature:'دمای گاز ورودی',
              stationInputPressure:'فشار گاز ورودی',
              stationOutputTemprature:'دمای گاز خروجی',
              stationOutputPressure:'فشار گاز خروجی',

          }
        },
        heaters:{
            name:   'گرم‌کن |||| گرم‌کن‌ها',
            fields:{
                id: 'گرم‌کن',
                text:'عنوان',
                efficiency:'راندمان حرارتی گرم‌کن',
                burners: 'مشعل'

            },
        },
        burners:{
          name: 'مشعل |||| مشعل‌ها',
            fields:{
                id:'مشعل',
                text:'عنوان',
                oxygenPercent:'درصد اکسیژن',
                flueGasTemprature:'دمای دودکش',
            }
        },
        pipespecificationss:{
          name:'مشخصات خط لوله',
            fields:{
              id: 'مشخصات',
                length:'طول',
                insulationFactor:'ضریب انتقال حرارت عایق',
                insulationThickness:'ضخامت عایق',
                pipeSize:{
                  id:'سایر لوله',
                    name:'',
                }

            }
        },
        pipesizes:{
          name: 'سایز لوله |||| سایزهای لوله',
          fields:{
              id:'شماره',
              name:'سایز',
              outerDiameter:'قطر خارجی',
              wallThickness:'ضخامت دیواره',
          }
        },
        runshasconditions:{
            name: 'دبی ران',
            fields:{
                id:'شرایط',
                text:'عنوان',
                debi:'دبی عبوری'
            }

        },
        runss:{
            name:'ران',
            fields:{
                id:'ران',
                pipeSize:{
                    id:'سایز لوله'
                },
                length:'طول',
                condition:'دبی‌ها',
                runsHasCondition: 'شرایط ران'
            }
        },

        organizationassessments: {
            name: 'ارزیابی سازمان |||| ارزیابی‌های سازمان',
            tabs: {
                step1: 'اطلاعات سایت',
                step2: 'اطلاعات دموگرافیک',
                step3: 'انتخاب سطح تضمین امنیت',
                step4: 'انتخاب استاندارد امنیت سایبری',
                step5: 'سوالات',
                step6: 'نتایج',
            },
            fields: {
                assessmentName: 'نام ارزیابی',
                date: 'تاریخ ارزیابی',
                facilityName: 'نام امکانات',
                citySitename: 'شهر یا نام سایت',
                stateProvinceRegion: 'استان',
                sector: 'بخش',
                industry: 'صنعت',
                assessmentSal: {
                    sal: {
                        id: 'سطح تضمین امنیت',
                    },
                },
                standards: 'استانداردها',
            },
            chart: {
                text: 'درصد پاسخ‌ها به سوالات',
            },
        },
        organizations: {
            name: 'سازمان |||| سازمان‌ها',
            fields: {
                name: 'نام',
            },
        },
        permissions: {
            name: 'مجوز |||| مجوزها',
            fields: {
                name: 'نام',
            },
        },
        roles: {
            name: 'نقش |||| نقش‌ها',
            fields: {
                name: 'نام',
                title: 'عنوان',
                organization: {
                    id: 'نام سازمان',
                    name: 'نام سازمان',
                },
                permissions: 'نام مجوزها',
            },
        },
        assessmentsals: {
            name: 'سطح تضمین امنیت ارزیابی |||| سطوح تضمین امنیت ارزیابی',
            fields: {
                sal: {
                    id: 'سطح تضمین امنیت',
                    value: 'سطح تضمین امنیت',
                },
                organizationAssessments: 'ارزیابی‌های سازمان',
                accessibility: 'دسترس‌پذیری',
                capitalAsset: 'دارایی رسمی',
                capitalAsset_ge: 'سقف دارایی رسمی',
                capitalAsset_le: 'کف دارایی رسمی',
                confidentiality: 'محرمانگی',
                death: 'موارد مرگ',
                death_ge: 'سقف تعداد موارد مرگ',
                death_le: 'کف تعداد موارد مرگ',
                economyImpact: 'اثرات اقتصادی',
                economyImpact_ge: 'سقف اثرات اقتصادی',
                economyImpact_le: 'کف اثرات اقتصادی',
                environmentalCleanUp: 'اثرات زیست محیطی',
                environmentalCleanUp_ge: 'سقف اثرات زیست محیطی',
                environmentalCleanUp_le: 'کف اثرات زیست محیطی',
                hospital: 'موارد بیمارستانی',
                hospital_ge: 'سقف موارد بیمارستانی',
                hospital_le: 'کف موارد بیمارستانی',
                injury: 'موارد جراحت',
                injury_ge: 'سقف موارد جراحت',
                injury_le: 'کف موارد جراحت',
                integrity: 'یکپارچگی',
            },
        },
        databasequestions: {
            name: 'سوال پایگاه داده |||| سوالات پایگاه داده',
            fields: {
                metric: 'معیار',
                metricPriority: ' اولویت معیار',
                metricPriority_ge: ' سقف اولویت معیار',
                metricPriority_le: ' کف اولویت معیار',
                metricWeight: 'وزن معیار',
                metricWeight_ge: 'سقف وزن معیار',
                metricWeight_le: 'کف وزن معیار',
                questionText: 'متن سوال',
                standard: 'استاندارد',
                subMetric: 'معیار فرعی',
                subMetricPriority: 'اولویت معیار فرعی',
                subMetricPriority_ge: 'سقف اولویت معیار فرعی',
                subMetricPriority_le: 'کف اولویت معیار فرعی',
                subMetricWeight: 'وزن معیار فرعی',
                subMetricWeight_ge: 'سقف وزن معیار فرعی',
                subMetricWeight_le: 'کف وزن معیار فرعی',
            },
        },
        metrics: {
            name: 'معیار |||| معیارها',
            fields: {
                priority: 'اولویت',
                priority_ge: 'سقف اولویت',
                priority_le: 'کف اولویت',
                text: 'متن',
                weight: 'وزن',
                weight_ge: 'سقف وزن',
                weight_le: 'کف وزن',
            },
        },
        organizationassessmenthasquestions: {
            name: 'سوال ارزیابی مربوط به سازمان |||| سوالات ارزیابی مربوط به سازمان',
            fields: {
                question: {
                    id: 'سوال',
                    text: 'سوال',
                },
                questionAnswer: {
                    id: 'پاسخ سوال',
                    name: 'پاسخ سوال',
                },
                preQuestionAnswer: {
                    id: 'پاسخ پیش سوال',
                    name: 'پاسخ پیش سوال',
                },
                organizationAssessment: {
                    id: 'ارزیابی سازمان',
                    assessmentName: 'ارزیابی سازمان',
                },
                markAsView: 'نشان‌گذاری بازبینی',
                priority: 'اولویت',
                weight: 'وزن',
            },
        },
        prequestionanswers: {
            name: 'پاسخ پیش سوال |||| پاسخ‌های پیش سوال',
            fields: {
                answerValue: 'پاسخ سوال',
                answerComment: 'توضیحات پاسخ',

            },
        },
        prequestions: {
            name: 'پیش سوال |||| پیش سوال‌ها',
            fields: {
                text: 'متن',
                question: 'سوال',
            },
        },
        questionanswers: {
            name: 'پاسخ سوال |||| پاسخ سوالات',
            fields: {
                answerValue: 'پاسخ',
                comment: 'توضیحات',
            },
            answer: {
                yes: 'بله',
                no: 'خیر',
                notApplicable: 'موضوعیت ندارد',
                alternativeResponse: 'پاسخ جایگزین',
            },
            answersResult: {
                yes: 'درصد پاسخ بله به سوالات',
                no: 'درصد پاسخ خیر به سوالات',
                notApplicable: 'درصد سوالات غیر قابل دسترس',
                alternativeResponse: 'درصد پاسخ‌های جایگزین به سوالات',
                noAnswer: 'درصد سوالات بی پاسخ',
                answered: 'درصد سوالات پاسخ داده شده'
            },
            comment: 'توضیحات مربوط به سوال %{questionNumber}',
        },
        sals: {
            name: 'سطح تضمین امنیت |||| سطوح تضمین امنیت',
            fields: {
                value: 'مقدار',
                assessmentSals: 'سطح تضمین امنیت ارزیابی',
                questionHasSals: 'سطح تضمین امنیت سوال',
            },
        },
        questions: {
            name: 'سوال |||| سوالات',
            fields: {
                questionHasSals: 'سطح تضمین امنیت سوال',
                organizationAssessmentHasQuestions: 'سوالات ارزیابی سازمان',
                questionScopes: 'زمینه سوالات',
                text: 'متن سوال',
            },
        },
        questionhassals: {
            name: 'سطح تضمین امنیت سوال |||| سطوح تضمین امنیت سوال',
            fields: {
                sal: {
                    id: 'سطح تضمین امنیت',
                    value: 'سطح تضمین امنیت',
                },
                'sal>value': 'سطح تضمین امنیت',
                standard: {
                    id: 'استاندارد',
                    text: 'استاندارد',
                },
                'standard>text': 'استاندارد',
                metric: {
                    id: 'معیار',
                    text: 'معیار',
                },
                'metric>text': 'معیار',
                subMetric: {
                    id: 'زیرمعیار',
                    text: 'زیرمعیار',
                },
                'subMetric>text': 'زیرمعیار',
                preQuestion: {
                    id: 'پیش سوال',
                    text: 'پیش سوال',
                },
                'preQuestion>text': 'پیش سوال',
                question: {
                    id: 'سوال',
                    text: 'سوال',
                },
                'question>text': 'سوال',
                priority: 'اولویت',
                priority_ge: 'سقف اولویت',
                priority_le: 'کف اولویت',
                weight: 'وزن',
                weight_ge: 'سقف وزن',
                weight_le: 'کف وزن',
            },
        },
        questionscopes: {
            name: 'زمینه سوال |||| زمینه‌های سوال',
            fields: {
                value: 'زمینه',
                questions: 'سوالات',
            },
        },
        standards: {
            name: 'استاندارد |||| استانداردها',
            fields: {
                text: 'نام استاندارد',
                organizationAssessments: 'ارزیابی‌ها',
                questionHasSals: 'سطوح تضمین امنیت سوال',
            },
        },
        submetrics: {
            name: 'معیار فرعی |||| معیارهای فرعی',
            fields: {
                text: 'متن زیر معیار',
            },
        },
    },
};