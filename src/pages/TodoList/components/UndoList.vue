<template>
  <div class="undolist">
    <div
      class="title">
      正在进行
      <span data-test="count" class="count">
        {{list.length}}
      </span>
    </div>
    <ul class="list">
      <li
        class="item"
        data-test="list-item"
        @click="changeStatus(index)"
        v-for="(item, index) in list"
        :key="index">
        <input
          class="input"
          v-if="item.status === 'input'"
          :value="item.value"
          @blur="handleInputBlur"
          @change="e => handleInputChange(e.target.value, index)"
          data-test="input" />
        <span v-else>
          {{item.value}}
        </span>
        <span
          data-test="delete-button"
          @click="handleDeleteClick(index)"
          class="delete">
          -
        </span>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'UndoList',
  props: ['list'],
  methods: {
    handleDeleteClick (index) {
      this.$emit('delete', index)
    },
    changeStatus (index) {
      this.$emit('status', index)
    },
    handleInputBlur () {
      this.$emit('reset')
    },
    handleInputChange (value, index) {
      this.$emit('change', { value, index })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .undolist
    width 600px
    margin 0 auto
  .title
    margin 10px 0
    line-height 30px
    font-size 24px
    font-weight bold
  .count, .delete
    float right
    display block
    width 20px
    height 20px
    line-height 20px
    text-align center
    background #e6e6e6
    border-radius 10px
    color #000
    margin-top 5px
    font-size 12px
  .item
    margin-bottom 10px
    line-height 32px
    font-size 14px
    background #ffffff
    border-left 5px solid #629a9a
    border-radius 3px
    text-indent 10px
  .list
    list-style-type none
  .delete
    text-indent 0px
    margin-right 10px
    cursor pointer
  .input
    height 22px
    text-indent 10px
    width 460px
</style>
