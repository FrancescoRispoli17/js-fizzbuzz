'use strict';

const row=document.querySelector('.row');
let k;
for(let i = 1; i <= 100; i++){
    const div = document.createElement('div');
    const p = document.createElement('p');
    if(i % 3 == 0){
        div.classList.add('fizz');
        p.append('fizz')
    }
    div.classList.add('padding', 'margin', 'text-center');
    p.classList.add('fw-bold', 'fs-4');
    div.append(p);
    row.append(div);
}