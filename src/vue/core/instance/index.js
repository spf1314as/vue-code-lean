import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  // 初始化vue实例对象
  this._init(options)
}
// 初始化原型上_init函数
initMixin(Vue)
// 原型对象上面增加$data、$props、$watch、$set、$delete
stateMixin(Vue)
// 定义事件$on、$emit、$off、$once
eventsMixin(Vue)
// 原型对象上定义声明周期hook _update $forceUpdate $destroy
lifecycleMixin(Vue)
// 原型对象上定义render函数相关的辅助函数、$nextTick、_render
renderMixin(Vue)

export default Vue
