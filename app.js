var app = new Vue({
    el: '#app',
    data: {
        questions: [{
            q: 'Müslüman mısın?',
            no: false,
            yes: {
                q: 'Türk müsün?',
                no: false,
                yes: {
                    q: 'Kadın haklarını savunuyor musun?',
                    yes: false,
                    no: {
                        q: 'Asgari ücretle dört kişilik bir aileyi geçindirebilir misin?',
                        no: false,
                        yes: {
                            q: 'LGBTI+ haklarını savunuyor musun?',
                            yes: {
                                q: 'Lezbiyen Mezbiyen misin?',
                                yes: 'Sen aslında yoksun!',
                                no: false,
                            },
                            no: {
                                q: 'Herhangi bir insan hakkını savunuyor musun?',
                                yes: false,
                                no: 'Hala terörist olma ihtimaliniz var, henüz tam liste açıklanmadı.'
                            }
                        }
                    },
                }
            }
        }],
        currentQuestionIndex: 0,
        currentQuestionData: {}
    },
    computed: {
        currentQuestion: function () {
            return this.currentQuestionData;
        }
    },
    methods: {
        submitAnswer: function (answer) {
            const getAnswerData = this.currentQuestion[answer];
            let errorMessage;

            if (getAnswerData === false) {
                errorMessage = 'Teröristsin!!!';
            } else if (!(getAnswerData instanceof Object)) {
                errorMessage = getAnswerData;
            } else {
                this.currentQuestionData = getAnswerData;
            }

            if (errorMessage) {
                Swal.fire({
                    title: errorMessage,
                    icon: 'error',
                })
            }

            return true;
        }
    },
    mounted: function () {
        this.currentQuestionData = this.questions[0];
    }
})
