const application = require('./main');

describe('trivial', () => {
beforeEach(function(){
    app = application();
    app.setServerData(questions);
    app.start();
});
    test('gets a question from array and prints it on the HTML', () =>{     
      startButton.addEventListener('click', startGame);
      startGame();
      expect(placeQuestion).toBe('hello');
    });
});