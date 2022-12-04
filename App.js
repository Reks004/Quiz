const correctAnswers = ['A','B','A'];
const form = document.querySelector('.quiz-form');

form.addEventListener('submit', e => {
    e.preventDefault();
    const userAnswers = [form.q1.value,form.q2.value,form.q3.value];
    let result = 0
    //Check answers
    userAnswers.forEach((answer,index) => {
        if(answer === correctAnswers[index]){
            result += 33;
            
        };
    });
    scrollTo(0,0);
    const quizResult = document.querySelector('.quiz-result');
    const resultDisplay = document.querySelector('span');
    quizResult.classList.remove("d-none");
    let score = 0;

    const domUpdate = setInterval (() => {
        resultDisplay.textContent = score;
        if (score === result){
            clearInterval(domUpdate);
        };
        score ++;
        
    }, 70);
    
    })

    

