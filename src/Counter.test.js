import React from 'react';
import Counter from './Counter';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('List tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Counter />);
  })

  it('Poprawnie dodano przycisk do komponentu', () => {
    expect(wrapper.find('button').text()).toBe('0')
  });

  it('Po kliknięciu w button jednokrotnie, wartość ustawia się na 1', () => {
    const btn = wrapper.find('button');
    btn.simulate('click');
    expect(btn.text()).toBe('1');
  });

  it('Po kliknięciu w button więcej niż 10 razy, licznik nie rośnie', () => {
    const btn = wrapper.find('button');
    for (let i = 0; i < 12; i++) {
      btn.simulate('click');
    }
    expect(btn.text()).toBe('10');
  });
});