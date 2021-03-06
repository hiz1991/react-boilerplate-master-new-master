import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';
import ConfirmCodePage from '../index';

describe('<ConfirmCodePage />', () => {
  it('should render its heading', () => {
    const renderedComponent = shallow(
      <MaterialUiForm />
    );
    expect(renderedComponent).toBeDefined();
  });
});
