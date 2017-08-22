/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import messages from './messages';
import List from './List';
import ListItem from './ListItem';
import ListItemTitle from './ListItemTitle';
import { Provider } from 'react-redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from './store';
import requestVerify from './showResults';
import MaterialUiForm from './MaterialUiForm';
export default class FeaturePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      color: props.initialColor
    };
  }
  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    console.log(this.props.params);
    return (
      <Provider store={store}>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <div style={{ padding: 15 }}>
            <h2 style={{textAlign:"center"}}>Prodigy.A.I.</h2>
            <MaterialUiForm onSubmit={val=>requestVerify(val, this)} parentComponent={this}/>
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}
