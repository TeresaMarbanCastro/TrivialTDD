function application(){
    
    var questions = [];
    var serverData = null;
    var startButton; 
    var placeQuestion;
    
    function start(){
        startButton = document.querySelector('.start__button');
        startButton.addEventListener('click', startGame);
        placeQuestion = document.querySelector('.question-answer__container');
        getQuestions(function (data){
            questions = data;
        });
    };

    function getQuestions(callback){
        serverData = serverData || [
            {
              questionId: 1,
              question: '¿Cuál es la capital de Zambia?',
              answers: [
                { id: 1, value: 'Lusaka' },
                { id: 2, value: 'Madrid' },
                { id: 3, value: 'Harare' }
              ],
              correctAnswer: { id: 1 }
            },
        
            {
              questionId: 2,
              question: '¿Cuántos años tiene Celio?',
              answers: [
                { id: 1, value: 18 },
                { id: 2, value: 'No lo sabe ni ella' },
                { id: 3, value: 103 }
              ],
              correctAnswer: { id: 2 }
            },
            {
              questionId: 3,
              question: '¿Cuál es el nombre de Freud?',
              answers: [
                { id: 1, value: 'Adolf' },
                { id: 2, value: 'Sefarad' },
                { id: 3, value: 'Sigmund' }
              ],
              correctAnswer: { id: 3 }
            }
          ];
          callback(serverData);
    };

    function startGame(){
       placeQuestion.innerHTML = 'hello';
    }

    function publicData(){
 
        return{
            questions,
            serverData,
            startButton,
            placeQuestion
        }

    }


    return{
        start,
        setServerData: function(data){
            serverData = data;
        },
        publicData
        
    }
};

if (typeof(module) != 'undefined'){
    module.exports = application;
};
