import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';
import ConfirmationCodePage from '../index';

describe('<ConfirmationCodePage />', () => {
  it('should render its heading', () => {
    const renderedComponent = shallow(
      <FeaturePage />
    );
    expect(renderedComponent.contains(
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
    )).toBe(true);
  });
});
