const tallyAnswers = (e) => {
    e.preventDefault();
    let answers = ['script', 'src', 'alert', 'false', 'none'];
    let score = 0;

    const answer1 = e.target.elements.question1.value;
    const answer2 = e.target.elements.question2.value;
    const answer3 = e.target.elements.question3.value;
    const answer4 = e.target.elements.question4.value;
    const answer5 = e.target.elements.question5.value;

    for (var i = 1; i <= 5 ; i++){
        if (eval('answer'+ i) === '' || eval('answer'+ i) === null){
            alert('Please provide an answer for question ' + i)
            return
        }
    }

    for( var i = 1; i <=5 ; i++){
        if (eval('answer'+i) === answers[i - 1]){
            score++;
        }
    }
    
    alert(`You scored ${score} out of 5!`)
    const results = document.querySelector('#results');
    results.innerHTML = '<h3>You scored <span>' + score + ' </span> out of <span>5</span>'
}

const form = document.querySelector('form');
form.addEventListener('submit', tallyAnswers)