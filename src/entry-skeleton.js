import Vue from 'vue'
import SkeletonHome from './skeleton/Skeleton1'

export default new Vue({
  components: {
    SkeletonHome
  },
  template: `<skeleton-home id="skeleton1" style="display:none" />`
})