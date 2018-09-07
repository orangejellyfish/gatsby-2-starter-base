import React from 'react';
import { shallow } from 'enzyme';
import { CustomNavbar } from '.';

describe('[Component] Navbar', () => {
  it('renders as expected', () => {
    const data = {
      site: {
        config: {
          title: 'Example',
        },
      },
    };

    expect(shallow(<CustomNavbar data={data} />)).toMatchSnapshot();
  });
});
