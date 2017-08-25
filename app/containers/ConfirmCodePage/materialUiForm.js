import React from 'react';
import {Field, reduxForm} from 'redux-form';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/FlatButton';
import validate from './validate';

const renderTextField = ({
                           inputStyle,
                           pretext,
                           input,
                           label,
                           meta: {touched, error},
                           ...custom
                         }) =>
  <TextField
    inputStyle={inputStyle}
    hintText={pretext}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />;


const MaterialUiForm = props => {
  const {handleSubmit, pristine, submitting, parentComponent} = props;
  return (
    <form onSubmit={val => handleSubmit(val, parentComponent)} style={{textAlign: 'center'}}>
      <div>
        <Field
          name='confirmationCode'
          component={renderTextField}
          label='Code from SMS'
        />
      </div>
      <div>
        <br />
        <Button type='submit' disabled={pristine || submitting}>
          Submit
        </Button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'MaterialUiForm', // a unique identifier for this form
  validate
})(MaterialUiForm);
