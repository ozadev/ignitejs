var React = require('react');
var ReactDOM = require('react-dom');

var Parent = React.createClass({

    getDefaultProps: function() {
        return {
            text: 'PARENT TEXT: Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
        }
    },
    render: function() {
        return (
            <div>
                <h1>{this.props.text}</h1>
                <div>{this.props.children}</div>
            </div>
        );
    }
});

var Child = React.createClass({

    getDefaultProps: function() {
        return {
            text: 'CHILD TEXT: Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
        }
    },
    render: function() {
        return <h3>{this.props.text}</h3>;
    }
});


ReactDOM.render(<Parent><Child /></Parent>, document.getElementById('main'));