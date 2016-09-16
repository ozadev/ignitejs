// var React = require('react');
// var ReactDOM = require('react-dom');

window.onload = function() {

    let options = {
        title: "Menu",
        width: 100,
        height: 200
    };

    let {title, width, height} = options;

    document.getElementById('main').innerHTML += `title = ${title}; width = ${width}; height = ${height};`;

}