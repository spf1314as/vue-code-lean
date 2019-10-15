
// arrayKeys = ['push'、'pop'、'unshift'、'shift'、'splice'、'sort'、'reverse']
const arrayKeys = Object.getOwnPropertyNames(arrayMethods)
export class Observer {
    ......
  constructor (value: any) {
        ......
        def(value, '__ob__', this)
        if (Array.isArray(value)) { // 处理数组类型
        if (hasProto) { // 存在 '__proto__'属性时
            protoAugment(value, arrayMethods)
        } else { 
            copyAugment(value, arrayMethods, arrayKeys)
        }
        // 将数组中的值进行响应式转化
        this.observeArray(value)
        } else {
        // 将对象转化为响应式
        this.walk(value)   
        }
    }
    walk (obj: Object) {
        const keys = Object.keys(obj)
        for (let i = 0; i < keys.length; i++) {
        // 利用访问器属性将对象转化为响应式数据 
        defineReactive(obj, keys[i])
        }
    }
// 遍历数组，将对象、数组转化为响应式
    observeArray (items: Array<any>) {
        for (let i = 0, l = items.length; i < l; i++) {
        observe(items[i])  // 将数组或对象转为为响应式数据
        }
    }
}

// 实例上存在__proto__属性时
function protoAugment (target, src: Object) {
  target.__proto__ = src
}
// 通过遍历，逐个改变原数组上的方法
function copyAugment (target: Object, src: Object, keys:Array<string>) {
  for (let i = 0, l = keys.length; i < l; i++) {
    const key = keys[i]
    def(target, key, src[key])
  }
}
