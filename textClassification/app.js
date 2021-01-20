const predict = require('./output/index')
predict('还挺便宜').then(res => {
  console.log('test1: ', res)
})

predict('良品铺子').then(res => {
  console.log('test2: ',res)
})

predict('电话手表').then(res => {
  console.log('test3: ',res)
})
