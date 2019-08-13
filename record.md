###
1. 最基本的Vue ``` function Vue ``` 位置：```src/vue/core/instance/index.js```0
2. Vue上增加```initGlobalAPI、version```，原型上增加```$isServer,ssrContext``` 位置：```src/vue/core/index.js```1
3. Vue上增加```config```原型上增加```$mount、__patch__```位置```src/vue/platforms/web/runtime/index.js```2
4. Vue上增加compile,实例上重写$mount 位置```src/vue/platforms/web/entry-runtime-with-compiler.js```3
5. Vue只是导出 位置 ```src/vue/platforms/web/entry-runtime.js``` 3