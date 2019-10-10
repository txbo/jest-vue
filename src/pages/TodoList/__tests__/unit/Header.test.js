import { shallowMount } from '@vue/test-utils'
import Header from '@/pages/TodoList/components/Header'
import { findTestWrapper } from '@/utils/testUtils'
import store from '@/store'

describe('Header.vue', () => {
  it('样式发生改变', () => {
    const wrapper = shallowMount(Header, { store })
    expect(wrapper).toMatchSnapshot()
  })
  it('包含 input 框', () => {
    const wrapper = shallowMount(Header, { store })
    const input = findTestWrapper(wrapper, 'header-input')
    expect(input.exists()).toBeTruthy()
  })
  it('input 框初始值为空', () => {
    const wrapper = shallowMount(Header, { store })
    const inputValue = wrapper.vm.inputValue
    expect(inputValue).toBe('')
  })

  it('input 框值发生变化，数据应该跟着变', () => {
    const wrapper = shallowMount(Header, { store })
    const input = findTestWrapper(wrapper, 'header-input')
    input.setValue('hello world')
    const inputValue = wrapper.vm.inputValue
    expect(inputValue).toBe('hello world')
  })
  it('input 框键入回车时无内容，无反应', () => {
    const wrapper = shallowMount(Header, { store })
    const input = findTestWrapper(wrapper, 'header-input')
    input.setValue('')
    input.trigger('keyup.enter')
    expect(wrapper.emitted().add).toBeFalsy()
  })
  it('input 框键入回车时有内容，触发事件，清空 input', () => {
    const wrapper = shallowMount(Header, { store })
    const input = findTestWrapper(wrapper, 'header-input')
    input.setValue('hello world')
    input.trigger('keyup.enter')
    expect(wrapper.emitted().add).toBeTruthy()
    expect(wrapper.vm.inputValue).toBe('')
  })
})
