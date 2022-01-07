function solve() {
  
  //add event listeners on all the buttons
  Array.from(document.getElementsByClassName('answer-text'))
                      .forEach(x => x.addEventListener('click', selectAnswer));

  /*define variables
  (result, right answers counter, 
  current question index, answered questions,
  section array(the questions))*/
  let result = '';
  let rightAnswers = 0;
  let currentQuestionIdx = 0;
  let answeredQuestions = 0;
  const questionsArray = document.getElementsByTagName('section');

  //define the function which the event fires
  function selectAnswer(ev) {

    switch(ev.target.textContent) {

      case 'onclick':
      case 'JSON.stringify()':
      case 'A programming API for HTML and XML documents':
        rightAnswers++;       
        break;

    }

    questionsArray[currentQuestionIdx++].style.display = 'none';
    if (currentQuestionIdx <= 2) {

      questionsArray[currentQuestionIdx].style.display = 'block';
      
    }
    answeredQuestions++;

    if (answeredQuestions === 3) {
      
      result = rightAnswers === 3 ? `You are recognized as top JavaScript fan!`
                                       : `You have ${rightAnswers} right answers`;
      //return the result to the h1 tag in the ul with id results
      document.getElementById('results').children[0].children[0].textContent = result;
      document.getElementById('results').style.display = 'block';

    }
  }
}
