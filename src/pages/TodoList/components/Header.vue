<template>
  <div class="header">
    <div class="header-content">
      TodoList
      <input
        class="header-input"
        data-test='header-input'
        :value="inputValue"
        @input="e => changeInputValue(e.target.value)"
        @keyup.enter="addTodoItem"
        placeholder="add TodoItem" />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'Header',
  computed: {
    ...mapState({
      inputValue: state => state.inputValue
    })
  },
  methods: {
    addTodoItem () {
      if (this.inputValue) {
        this.$emit('add', this.inputValue)
        this.changeInputValue('')
      }
    },
    ...mapMutations({
      changeInputValue: 'changeInputValue'
    })
  }
}
</script>

<style scoped lang="stylus">
.header
  background #333
  line-height 60px
.header-content
  width 600px
  margin 0 auto
  color #fff
  font-size 24px
.header-input
  float right
  width 360px
  line-height 24px
  margin-top 16px
  outine: none
  color #333
  text-indent 10px
</style>
