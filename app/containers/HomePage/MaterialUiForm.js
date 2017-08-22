import React from "react";
import {Field, reduxForm} from "redux-form";
import TextField from "material-ui/TextField";
import validate from "./validate";
import axios from 'axios';
import {applyRouterMiddleware, Router, browserHistory} from 'react-router';

import requestVerify from './showResults';

let state = {
  showCodePart: false,
  showFormStyle: {display: "block"},
  hideFormStyle: {display: "none"}
};

const showCodeInput = function () {
  console.log("showCodeInput")
  return (state.showCodePart) ? state.showFormStyle : state.hideFormStyle;
};

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

const submi = async function (values) {
  return requestVerify(values);
  // console.log("values", values);
  // let url = "/requestCode";
  // // Assemble data
  // const todo = {phoneNumber: values.phoneNumber};
  // if(values.confirmationCode){
  //     url = "/verifyCode";
  // }
  // // Update data
  // return axios.post(url, todo)
  //     .then((res) => {
  //         console.log(res)
  //         if(res.data.success){
  //             if(url === "/verifyCode"){
  //                 alert("super");
  //             } else {
  //                 // this.setState({ showResults: true });
  //             }
  //             // this.setState({ showResults: true });
  //         }
  //     });

}


const MaterialUiForm = (props) => {
  const {handleSubmit, pristine, submitting} = props;
  let showCode = false;
  // onSubmit={(val)=>  {
  //     val.preventDefault();
  //     // let res = await submi(val);
  //     console.log(submi(val).then(val=>{
  //         state.showCodePart = true;
  //         showCode = true;
  //         console.log(val, state.showCodePart)
  //     }))}}
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          inputStyle={{"paddingLeft": 28}}
          name="phoneNumber"
          pretext="+49"
          component={renderTextField}
          label="Your phone"
        />
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "MaterialUiForm", // a unique identifier for this form
  validate,
  requestVerify,
})(MaterialUiForm);
