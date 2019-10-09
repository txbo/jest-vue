import { shallowMount } from '@vue/test-utils'
import TodoList from '@/pages/TodoList/TodoList'
import Header from '@/pages/TodoList/components/Header'
const testMsg = 'hello world'

describe('TodoList.vue', () => {
  it('TodoList 初始化时，undoList 应该为空', () => {
    const wrapper = shallowMount(TodoList)
    const undoList = wrapper.vm.$data.undoList
    expect(undoList).toEqual([])
  })
  it('TodoList 监听 Header 的 add 事件的时候，会增加一段内容', () => {
    const wrapper = shallowMount(TodoList)
    const header = wrapper.find(Header)
    header.vm.$emit('add', testMsg)
    const undoList = wrapper.vm.$data.undoList
    expect(undoList).toEqual([testMsg])
  })
})
