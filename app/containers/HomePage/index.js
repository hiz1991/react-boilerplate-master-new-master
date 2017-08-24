import React from 'react';
import { Provider } from 'react-redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from './store';
import requestVerify from './api';
import MaterialUiForm from './materialUiForm';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <div style={{ padding: 15 }}>
            <h2 style={{textAlign:"center"}}>Prodigy.A.I.</h2>
            <MaterialUiForm onSubmit={requestVerify} style={{textAlign:"center"}}/>
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}
