// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
import axios from 'axios';
import {applyRouterMiddleware, Router, browserHistory} from 'react-router';
let requestSucceeded = false;
export default (async function requestVerify(values, parentComponent) {
        const todo = {
          phoneNumber: parentComponent.props.location.query.phoneNumber,
          code:values.confirmationCode
        };
            let url = "/verifyCode";
  // console.log("Router", Router, Router.props.params);
        // Update data
        return axios.post(url, todo)
            .then((res) => {
                if(res.data.success){
                        alert("The number is verified");

                    // this.setState({ showResults: true });
                }
                else{
                  alert("The number could not be confirmed or has already been confirmed");
                }
            });

});


