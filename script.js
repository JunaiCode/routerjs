const ROUTES = {};
const TEMPLATES =  {};

let body = document.getElementById('bod');

/* Views */

function home () {
    body.innerHTML = `<div id="app" class="app"></div>`
    
    let app = document.getElementById('app');
    let div = document.createElement('div');
    let a_c_nav__about = document.createElement('a');
    a_c_nav__about.href = "#/about";
    a_c_nav__about.innerText = "Home";
    
    div.innerHTML = `
    <h1>Home</h1>
    `;
    
    div.appendChild(a_c_nav__about);
    app.appendChild(div);
};

function about() {
    body.innerHTML = `<div id="app" class="app"></div>`
    
    let app = document.getElementById('app');
    let div = document.createElement('div');
    let a_c_nav__home = document.createElement('a');
    a_c_nav__home.href = "#/";
    a_c_nav__home.innerText = "About";
    
    div.innerHTML = `
    <h1>About</h1>
    `;
    
    div.appendChild(a_c_nav__home);
    app.appendChild(div);
};

/* Router */

function route (path, template) {
    if (typeof path === 'function') {
        return ROUTES[path] = template;
    } else if (typeof path === 'string') {
        return ROUTES[path] = TEMPLATES[template];
    } else {
        return;
    }
};

function router (event) {
    let url = window.location.hash.slice(1) || '/';
    let route = resolve(url);

    route();
};

/* Template registerer */

function template (name, templateFunction) {
    return TEMPLATES[name] = templateFunction;
}


/* Mapping */

template('home', () => {home();});
template('about', () => {about();});

/* Routing */

route('/', 'home');
route('/about', 'about');


/* Resolver */

function resolve (route) {
    try {
        return ROUTES[route];
    } catch (e) {
        throw new Error(`Route ${route} not found`);
    }
};

/* Windows */

window.addEventListener('load', router);
window.addEventListener('hashchange', router);