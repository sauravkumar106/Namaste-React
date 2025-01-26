// 4 Pillars of DOM

// 1. Selecting Elements ---
// 2. Manipulating(Changing) Elements ---
// 3. Event Listener (Listening for Events) ---
// 4. Changing CSS ---

// 1. Selectinh Elements
let a = document.querySelector('h1');
// 2. Manipulating(Changing) Elements
a.innerHTML = "Hello World";
// 3. Event Listener (Listening for Events)
a.addEventListener('click', function() {
        a.innerHTML = "Hello India";
    })
    // 4. Changing CSS
a.style.color = 'red';
a.style.backgroundColor = 'black';

// selcting multiple elements
let b = document.querySelectorAll('p');
b[0].innerHTML = "Hello World";
//...

// selcting elements by class
let c = document.getElementsByClassName('container');
console.log(c[0]);

// selcting elements by tag
let d = document.getElementsByTagName('div');
console.log(d[0]);

// selcting elements by id
let e = document.getElementById('first');
console.log(e);