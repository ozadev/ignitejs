// var React = require('react');
// var ReactDOM = require('react-dom');

window.onload = () => {

    let loadImg = (url) => {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open("GET", url);
            xhr.responseType = "blob";

            xhr.onload = () => {
                if (xhr.status === 200) {
                    let img = document.createElement('img');
                    img.src = window.URL.createObjectURL(xhr.response);
                    resolve(img);
                }
                else {
                    reject(new Error('Image load error: ' + xhr.statusText));
                }
            };

            xhr.send();

        });
    };

    loadImg('image.jpg')
        .then((img) => {
            document.getElementById('main').appendChild(img);
        }, (err) => {
            console.log(err);
            alert(err);
        });

};