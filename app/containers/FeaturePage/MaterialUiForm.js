import React from "react";
import { Field, reduxForm } from "redux-form";
import TextField from "material-ui/TextField";
import validate from "./validate";
import {applyRouterMiddleware, Router, browserHistory} from 'react-router';

const renderTextField = ({
  inputStyle,
  pretext,
  input,
  label,
  meta: { touched, error },
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
  console.log("props",props);
  const { handleSubmit, pristine, submitting, parentComponent } = props;
  return (
    <form onSubmit={val=>handleSubmit(val, parentComponent)} style={{textAlign:"center"}}>
      <div>
        <Field
          name="confirmationCode"
          component={renderTextField}
          label="Code from SMS"
        />
      </div>
      <div>
        <br />
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "MaterialUiForm", // a unique identifier for this form
  validate
})(MaterialUiForm);
