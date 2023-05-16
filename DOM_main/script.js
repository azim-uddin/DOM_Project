//For Triangle
let b_input, h_input;
function triangle(){
    let list = document.getElementById("figure_4");
    b_input = document.getElementById("input_b").value;
    h_input = document.getElementById("input_h").value;
    let li = document.createElement('li');
    li.innerText = "Triangle Area is "+ 0.5*b_input*h_input;
    list.appendChild(li);
}

//For Rectangle
let w_input, i_input;
function rectangle(){
    let list = document.getElementById("figure_4");
    l_input = document.getElementById("input_l").value;
    w_input = document.getElementById("input_w").value;
    let li = document.createElement('li');
    li.innerText = "Rectangle Area is "+ l_input*w_input;
    list.appendChild(li);
}

//For Parallelogram
let bb_input, hh_input;
function parallelogram(){
    let list = document.getElementById("figure_4");
    bb_input = document.getElementById("input_bb").value;
    hh_input = document.getElementById("input_hh").value;
    let li = document.createElement('li');
    li.innerText = "Parallelogram Area is "+ bb_input*hh_input;
    list.appendChild(li);
}