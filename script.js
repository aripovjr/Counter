const indicator = document.getElementById('indicator')
const decrease = document.getElementById('dec')
const reset = document.getElementById('res')
const increase = document.getElementById('inc')

let counter = 0

indicator.innerHTML = counter

decrease.addEventListener('click', ()=>{
    counter--
    indicator.innerHTML = counter
    if(counter<0)
        indicator.style.color = 'red'
    else if(counter == 0)
        indicator.style.color = 'orange'
})

reset.addEventListener('click', ()=>{
    counter=0
    indicator.innerHTML = counter
    if(counter === 0)
        indicator.style.color = 'orange'
})

increase.addEventListener('click', ()=>{
    counter++
    indicator.innerHTML = counter
    if(counter>=1)
        indicator.style.color = 'green'
    else if(counter == 0)
        indicator.style.color = 'orange'
})