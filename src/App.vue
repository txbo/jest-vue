<template>
  <div id="app">
    <TodoList />
  </div>
</template>

<script>
import TodoList from './pages/TodoList/TodoList'

export default {
  name: 'app',
  components: {
    TodoList
  }
}
</script>
<style lang="stylus">
*
  margin 0
  padding 0
body
  background #cdcdcd
</style>
