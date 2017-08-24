import axios from 'axios';
import {browserHistory} from 'react-router';
export default (async function requestVerify(values) {
  let url = "/requestCode";
  const params = {phoneNumber: values.phoneNumber};
  return axios.post(url, params)
    .then((res) => {
      if (res.data.success) {
        browserHistory.push(`/features?phoneNumber=${values.phoneNumber}`);
      }
      if (res.data.error) {
        alert("Could not send sms. Check the number");
        return;
      }
      alert("Unknown error. Try again");
    }).catch(e => {
      alert(e);
      return;
    });
});


