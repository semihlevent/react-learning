import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {


    renderError = ({ error, touched }) => {
        if (touched && error) {
            return (
                <div className="header">{error}</div>
            );
        }
    }
    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error': ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
            
        );
    }

    onSubmit = (values) => {
        this.props.onSubmit(values);
    }

    render() {
        return (
            <form 
                onSubmit={this.props.handleSubmit(this.onSubmit)} 
                className="ui form error"
            >
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter Description" />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

const validate = values => {
    const errors = {};

    if (!values.title) {
        errors.title = 'You must enter a title';
    }

    if (!values.description) {
        errors.description = 'You must enter a descrtiption';
    }

    return errors;
}

export default reduxForm({
    form: 'streamForm',
    validate
})(StreamForm);