import React from 'react';
import {Field, reduxForm} from 'redux-form';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/FlatButton';
import validate from './validate';
import requestVerify from './api';

const numberPrefix = '+49';
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

const MaterialUiForm = (props) => {
  const {handleSubmit, pristine, submitting} = props;
  return (
    <form onSubmit={handleSubmit} style={{textAlign: 'center'}}>
      <div>
        <Field
          inputStyle={{'paddingLeft': 28}}
          name='phoneNumber'
          pretext={numberPrefix}
          component={renderTextField}
          label='Your phone'
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
  validate,
  requestVerify,
})(MaterialUiForm);
