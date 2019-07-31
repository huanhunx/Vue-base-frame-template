<template>
  <div>系统</div>
</template>
<script>
import DictService from '@/services/dict'
export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  created() {},
  mounted() {
    // 测试代码
    DictService.getList()
    DictService.getOne('123123123')
  },
  methods: {}
}
</script>
<style scoped lang="less"></style>
