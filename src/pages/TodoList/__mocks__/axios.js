const undoList = {
  success: true,
  data: [{
    status: 'div',
    value: 'hello'
  }, {
    status: 'div',
    value: 'world'
  }]
}

export default {
  get (url) {
    if (url === '/getUndoList.json') {
      return new Promise((resolve) => {
        resolve(undoList)
      })
    }
  }
}
