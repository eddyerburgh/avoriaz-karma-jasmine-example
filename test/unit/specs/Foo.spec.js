/* global expect */

import Foo from 'src/components/Foo'
import Bar from 'src/components/Bar'
import { mount } from 'avoriaz'

describe('Foo.vue', () => {
  it('renders an h1', () => {
    const wrapper = mount(Foo)
    expect(wrapper.find('h1').length).toEqual(1)
  })

  it('h1 renders data.msg as text', () => {
    const wrapper = mount(Foo)
    const msg = wrapper.data().msg
    expect(wrapper.find('h1')[0].text()).toEqual(msg)
  })

  it('h1 text changes when button is clicked', () => {
    const expectedMessage = 'new message'

    const wrapper = mount(Foo)
    const button = wrapper.find('#change-message')[0]
    button.dispatch('click')

    expect(wrapper.find('h1')[0].text()).toEqual(expectedMessage)
  })

  it('renders a message that equals prop msg2', () => {
    const msg2 = 'test message'
    const wrapper = mount(Foo, { propsData: { msg2 } })
    const text = wrapper.find('p')[0].text()
    expect(text).toEqual(msg2)
  })

  it('renders Bar', () => {
    const wrapper = mount(Foo)
    const bar = wrapper.find(Bar)[0]
    expect(bar.is(Bar)).toEqual(true)
  })
})
