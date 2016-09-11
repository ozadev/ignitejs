var React = require('react');
var ReactDOM = require('react-dom');


var Counter = React.createClass({
    getInitialState: function() {
        return {
            nameClass: '',
            emailClass: '',
            telClass: '',
            messageClass: ''
        }
    },
    handlerChangeName: function(e) {
        var nameRegExp = /^[A-Za-z ]+$/;
        var addClass = 'valid';
        if (!nameRegExp.test(e.target.value)) {
            addClass = 'invalid';
        }
        if (e.target.value === '') {
            addClass = '';
        }
        this.setState({nameClass: addClass});
    },
    handlerChangeEmail: function(e) {
        var emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var addClass = 'valid';
        if (!emailRegExp.test(e.target.value)) {
            addClass = 'invalid';
        }
        if (e.target.value === '') {
            addClass = '';
        }
        this.setState({emailClass: addClass});
    },
    handlerChangeTel: function(e) {
        var telRegExp = /^[0-9]+$/;
        var addClass = 'valid';
        if (!telRegExp.test(e.target.value)) {
            addClass = 'invalid';
        }
        if (e.target.value === '') {
            addClass = '';
        }
        this.setState({telClass: addClass});
    },
    handlerChangeMessage: function(e) {
        var messageRegExp = /^.{10,}$/;
        var addClass = 'valid';
        if (!messageRegExp.test(e.target.value)) {
            addClass = 'invalid';
        }
        if (e.target.value === '') {
            addClass = '';
        }
        this.setState({messageClass: addClass});
    },
    handlerSubmit: function(e) {
        if ( this.state.nameClass === 'valid' && this.state.emailClass === 'valid' && this.state.telClass === 'valid' && this.state.messageClass === 'valid' ) {
            alert('Success, data sent to the server!');
        }
        else {
            alert('Fail, data not valid!');
            e.preventDefault();
        }
    },
    render: function() {
        return (
            <form className="form-control input-group" onSubmit={this.handlerSubmit}>
                <div className="form-group">
                    <input type="text" className={"input-lg form-control " + this.state.nameClass} onChange={this.handlerChangeName} placeholder="Enter name" />
                    <p>(only english letters)</p>
                </div>
                <div className="form-group">
                    <input type="email" className={"input-lg form-control " + this.state.emailClass} onChange={this.handlerChangeEmail} placeholder="Enter email" />
                    <p>(require valid email)</p>
                </div>
                <div className="form-group">
                    <input type="tel" className={"input-lg form-control " + this.state.telClass} onChange={this.handlerChangeTel} placeholder="Enter tel" />
                    <p>(only numbers)</p>
                </div>
                <div className="form-group">
                    <input type="text" className={"input-lg form-control " + this.state.messageClass} onChange={this.handlerChangeMessage} placeholder="Enter message" />
                    <p>(minimum 10 symbols)</p>
                </div>
                <div className="form-group">
                    <input type="submit" className="btn btn-lg btn-info" value="Submit" />
                </div>
            </form>
        );
    }
});


var container = document.getElementById('main');

ReactDOM.render(<Counter />, container);