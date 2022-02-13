let routes= {};
let templates= {};

// Call the id of the div in the html
let app_div = document.getElementById('app');

//Funtions of the pages
function home(){
    let div = document.createElement('div');
    let link = document.createElement('a');
    link.href = '#/home';
    link.innerText = 'Home';

    div.innerHTML = '<h1>Home</h1>';
    div.appendChild(link);
    app_div.appendChild(div);

}
function about(){

}