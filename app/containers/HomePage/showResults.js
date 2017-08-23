import axios from 'axios';
import {applyRouterMiddleware, Router, browserHistory} from 'react-router';
export default (async function requestVerify(values) {
  let url = "/requestCode";
  // Assemble data
  const todo = {phoneNumber: values.phoneNumber};
  if (values.confirmationCode) {
    url = "/verifyCode";
  }
  // Update data
  return axios.post(url, todo)
    .then((res) => {
      console.log(res)
      if (res.data.success) {
        if (url === "/verifyCode") {
          alert("super");
        } else {
          // return true;
          browserHistory.push(`/features?phoneNumber=${values.phoneNumber}`);
          // this.setState({ showResults: true });
        }
        // this.setState({ showResults: true });
      }
      if (res.data.error) {
        alert("Could not send sms. Check the number");
      }
      return !!res.data.success;
    }).catch(e => {
      alert(e)
    });

});


