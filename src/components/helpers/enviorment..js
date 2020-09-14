let APIURL = '';

switch (window.location.hostname) {
    case 'localhost' || '127.0.01':
    APIURL= 'http://localhost: 3000';
    break

    case 'ae-sneaker-app-client.herokuapp.com':
    APIURL = 'https://ae-sneaker-app-server.herokuapp.com'
}

export default APIURL;




