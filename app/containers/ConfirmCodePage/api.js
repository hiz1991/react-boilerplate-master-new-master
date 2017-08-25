import axios from 'axios';
export default (async function (values, parentComponent) {
  const params = {
    phoneNumber: parentComponent.props.location.query.phoneNumber,
    code: values.confirmationCode
  };
  let url = "/verifyCode";
  return axios.post(url, params)
    .then((res) => {
      if (res.data.success) {
        alert("The number is verified");
        return;
      }
      else {
        alert("The number could not be confirmed or has already been confirmed");
        return:
      }
    });
});


