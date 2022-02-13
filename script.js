let routes= {};
let templates= {};

// Call the id of the div in the html
let app_div = document.getElementById('app');

//Funtions of the pages
function home(){
    let div = document.createElement('div');
    let link = document.createElement('a');
    link.href = '#/';
    link.innerText = 'Home';

    div.innerHTML = '<h1>Home</h1>';
    div.appendChild(link);
    app_div.appendChild(div);

}
function about(){
    let div = document.createElement('div');
    let link = document.createElement('a');
    link.href = '#/about';
    link.innerText = 'About';

    div.innerHTML = '<h1>About</h1>';
    div.appendChild(link);
    app_div.appendChild(div);

};

// ask if we give the name of the template of the function, and associate a template with a route
function route(path,template){
    if(typeof template === 'function'){
        return routes[path] = template;
    }
    else if( typeof template === 'string'){
        return routes[path] = templates[template];
    }
    else{
        return;
    };
};

// Create a template, receive the name, and the function that load the DOM elements.
function template(name,templateFunction){
    return templates[name] = templateFunction;
};

// Instance of the function template
template('home',home());
template('about',about());

// Define the route to template mapping
route('/','home');
route('/about','about');

// We give the actual URL, we can see if the url change
function resolveRoute(route){
    try{
        return routes[route];
    } catch(e){
        throw new Error(`Route ${route} not found`);
    };
};

//Function to obtain the actual url, find if the url exists and load the route.
function router(evt){
    let url = window.location.hash.slice(1) || '/';
    let route = resolveRoute(url);
    
    route();
};

window.addEventListener('load',router);
window.addEventListener('hashchange',router);

