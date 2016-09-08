var React = require('react');
var ReactDOM = require('react-dom');


var Hello = React.createClass({
    render: function () {
        // return <h1>Hello World</h1>;
        return React.createElement('h1', null, "Hello World");
    }
});

ReactDOM.render(<Hello />, document.getElementById('main'));