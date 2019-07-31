let componentGroup = require.context('.', true, /(?<!\.false)\/index.vue$/)
const custom = {
  install: Vue => {
    componentGroup.keys().forEach(component => {
      let componentEntity = componentGroup(component).default
      Vue.component(componentEntity.name, componentEntity)
    })
  }
}

export default custom
