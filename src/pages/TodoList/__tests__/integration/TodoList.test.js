import { mount } from '@vue/test-utils'
import TodoList from '../../TodoList'
import { findTestWrapper } from '@/utils/testUtils'
import store from '@/store'

beforeEach(() => {
  jest.useFakeTimers()
})

describe('Todolist.vue BDD', () => {
  it(`
    1. 用户会在 header 输入框输入内容
    2. 用户键入回车
    3. 列表项应该增加用户输入内容的列表项
  `, () => {
    const wrapper = mount(TodoList, { store })
    const inputElem = findTestWrapper(wrapper, 'header-input').at(0)
    const content = 'hello world'
    inputElem.setValue(content)
    inputElem.trigger('change')
    inputElem.trigger('keyup.enter')
    const listItems = findTestWrapper(wrapper, 'list-item')
    expect(listItems.length).toBe(1)
    expect(listItems.at(0).text()).toContain(content)
  })
  it(`
    1. 用户进入页面时，请求数据
    2. 列表展示远程返回数据
  `, done => {
    const wrapper = mount(TodoList, { store })
    expect(setTimeout).toHaveBeenCalledTimes(1)
    wrapper.vm.$nextTick(() => {
      const listItems = findTestWrapper(wrapper, 'list-item')
      expect(listItems.length).toBe(2)
      done()
    })
  })
})
