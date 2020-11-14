
const form = document.querySelector('form');


const getAnswers = (e) => {
    e.preventDefault();
    let answers = [];
    const answer1 = e.target.elements.question1.value;
    if (answer1 === ''){
        alert('Please provide an answer for question 1')
        return
    } else if (answer1 === 'script') {
        answers.push(true)
    } else {
        answers.push(false)
    }
    const answer2 = e.target.elements.question2.value;
    if (answer2 === ''){
        alert('Please provide an answer for question 2')
        return
    } else if (answer2 === 'src') {
        answers.push(true)
    } else {
        answers.push(false)
    }
    const answer3 = e.target.elements.question3.value;
    if (answer3 === ''){
        alert('Please provide an answer for question 3')
        return
    } else if (answer3 === 'alert') {
        answers.push(true)
    } else {
        answers.push(false)
    }
    const answer4 = e.target.elements.question4.value;
    if (answer4 === ''){
        alert('Please provide an answer for question 4')
        return
    } else if (answer4 === 'false') {
        answers.push(true)
    } else {
        answers.push(false)
    }
    const answer5 = e.target.elements.question5.value;
    if (answer5 === ''){
        alert('Please provide an answer for question 5')
        return
    } else if (answer5 === 'none') {
        answers.push(true)
    } else {
        answers.push(false)
    }
    return answers
}

const tallyAnswers = (e) => {
    e.preventDefault();
    let answers = getAnswers(e);
    let count = 0;

    answers.forEach((answer) => {
        if (answer === true){
            count++
        }
    })
    debugger;
    alert(`You scored ${count} out of 5!`)
    const results = document.querySelector('#results');
    const h3 = document.createElement('h3')
    h3.textContent = `You scored ${count} out of 5`
    results.appendChild(h3)
}

form.addEventListener('submit', tallyAnswers)