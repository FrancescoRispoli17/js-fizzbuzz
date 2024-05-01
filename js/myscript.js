'use strict';

const row=document.querySelector('.row');
for(let i = 1; i <= 100; i++){
    const div = document.createElement('div');
    const p = document.createElement('p');
    if((i % 5 == 0) && (i % 3 == 0)){
        div.classList.add('fizzbuzz');
        p.append('fizzbuzz');
    }
    else if(i % 5 == 0){
        div.classList.add('buzz');
        p.append('buzz')
    }
    else if(i % 3 == 0){
        div.classList.add('fizz');
        p.append('fizz') 
    }
    else{
        div.classList.add('n');
        p.append(i) 
    }
    div.classList.add('padding', 'margin', 'text-center');
    p.classList.add('fw-bold', 'fs-4');
    div.append(p);
    row.append(div);
}