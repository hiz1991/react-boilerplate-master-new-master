import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';
import HomePage from '../index';

describe('<HomePage />', () => {
  it('should render its heading', () => {
    const renderedComponent = shallow(
      <MaterialUiForm />
    );
    expect(renderedComponent).toBeDefined();
  });
});
