import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import requestVerify from './showResults';
import MaterialUiForm from './MaterialUiForm';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div style={{padding: 15}}>
          <h2 style={{textAlign: "center"}}>Prodigy.A.I.</h2>
          <MaterialUiForm onSubmit={requestVerify} style={{textAlign: "center"}}/>
        </div>
      </MuiThemeProvider>
    );
  }
}
