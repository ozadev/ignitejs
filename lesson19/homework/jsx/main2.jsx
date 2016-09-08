var React = require('react');
var ReactDOM = require('react-dom');


var Form = React.createClass({

    render: function() {

        var inputNames = this.props["input-names"];
        var submitValue = this.props["submit-value"];

        return (
            <form className="form-control input-group">
                {inputNames.map(function(elem, index) {
                    return <Form.Input name={elem} key={index}/>
                })}
                <Form.Submit value={submitValue}/>
            </form>
        );
    }
});

Form.Input = React.createClass({
    render: function () {
        return (
            <div className="form-group">
                <input className="input-lg form-control" name={this.props.name} placeholder={this.props.name}/>
            </div>
        )
    }
});

Form.Submit = React.createClass({
    render: function () {
        return (
            <div className="form-group">
                <input className="btn btn-lg btn-info" type="submit" value={this.props.value} />
            </div>
        )
    }
});

ReactDOM.render(<Form input-names={["name", "login"]} submit-value="Submit"/>, document.getElementById('main'));