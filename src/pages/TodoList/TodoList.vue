<template>
  <div>
    <Header @add="addUndoItem"/>
    <UndoList
      :list="undoList"
      @status="changeStatus"
      @reset="resetStatus"
      @change="changeItemValue"
      @delete="handleItemDelete"/>
  </div>
</template>

<script>
import Header from './components/Header'
import UndoList from './components/UndoList'
import axios from 'axios'
export default {
  name: 'TodoList',
  components: {
    Header,
    UndoList
  },
  data () {
    return {
      undoList: []
    }
  },
  methods: {
    addUndoItem (inputValue) {
      this.undoList.push({
        value: inputValue,
        status: 'div'
      })
    },
    handleItemDelete (index) {
      this.undoList.splice(index, 1)
    },
    changeStatus (index) {
      this.undoList[index].status = 'input'
    },
    resetStatus () {
      this.undoList.forEach(item => { item.status = 'div' })
    },
    changeItemValue (obj) {
      this.undoList[obj.index].value = obj.value
    }
  },
  mounted () {
    setTimeout(() => {
      console.log('call')
    }, 4000)
    axios.get('/getUndoList.json').then(res => {
      this.undoList = res.data
    }).catch(e => {})
  }
}
</script>

<style scoped lang="stylus">
</style>
