import { shallowMount } from '@vue/test-utils'
import TodoList from '@/pages/TodoList/TodoList'
import UndoList from '@/pages/TodoList/components/UndoList'
import store from '@/store'

describe('TodoList.vue', () => {
  it('初始化时，undoList 应该为空', () => {
    const wrapper = shallowMount(TodoList, { store })
    const undoList = wrapper.vm.undoList
    expect(undoList).toEqual([])
  })
  it('addUndoItem 方法被调用时，会增加一段内容', () => {
    const wrapper = shallowMount(TodoList, { store })
    wrapper.setData({
      undoList: [
        { status: 'div', value: 1 },
        { status: 'div', value: 2 },
        { status: 'div', value: 3 }
      ]
    })
    wrapper.vm.addUndoItem(4)
    expect(wrapper.vm.undoList).toEqual([
      { status: 'div', value: 1 },
      { status: 'div', value: 2 },
      { status: 'div', value: 3 },
      { status: 'div', value: 4 }
    ])
  })
  it('调用 UndoList，应该传递 list 参数', () => {
    const wrapper = shallowMount(TodoList, { store })
    const undoList = wrapper.find(UndoList)
    const list = undoList.props('list')
    expect(list).toBeTruthy()
  })
  it('handleDeleteItem 方法被调用时， UndoList 列表内容减少', () => {
    const wrapper = shallowMount(TodoList, { store })
    wrapper.setData({
      undoList: [
        { status: 'div', value: 1 },
        { status: 'div', value: 2 },
        { status: 'div', value: 3 }
      ]
    })
    wrapper.vm.handleItemDelete(1)
    expect(wrapper.vm.undoList).toEqual([
      { status: 'div', value: 1 },
      { status: 'div', value: 3 }
    ])
  })
  it('changeStatus 方法被调用时， UndoList 列表项变为可编辑状态', () => {
    const wrapper = shallowMount(TodoList, { store })
    wrapper.setData({
      undoList: [
        { status: 'div', value: 1 },
        { status: 'div', value: 2 },
        { status: 'div', value: 3 }
      ]
    })
    wrapper.vm.changeStatus(1)
    expect(wrapper.vm.undoList).toEqual([
      { status: 'div', value: 1 },
      { status: 'input', value: 2 },
      { status: 'div', value: 3 }
    ])
  })
  it('resetStatus 方法被调用时， UndoList 列表项变为 div', () => {
    const wrapper = shallowMount(TodoList, { store })
    wrapper.setData({
      undoList: [
        { status: 'div', value: 1 },
        { status: 'input', value: 2 },
        { status: 'div', value: 3 }
      ]
    })
    wrapper.vm.resetStatus(1)
    expect(wrapper.vm.undoList).toEqual([
      { status: 'div', value: 1 },
      { status: 'div', value: 2 },
      { status: 'div', value: 3 }
    ])
  })
  it('changeItemValue 方法被调用时， UndoList 列表项内容发生变化', () => {
    const wrapper = shallowMount(TodoList, { store })
    wrapper.setData({
      undoList: [
        { status: 'div', value: 1 },
        { status: 'input', value: 2 },
        { status: 'div', value: 3 }
      ]
    })
    wrapper.vm.changeItemValue({
      value: '444',
      index: 1
    })
    expect(wrapper.vm.undoList).toEqual([
      { status: 'div', value: 1 },
      { status: 'input', value: '444' },
      { status: 'div', value: 3 }
    ])
  })
})
