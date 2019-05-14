import Vue from 'vue'
import moment from 'moment';

Vue.filter('timeformat', (arg) => {
  return moment(arg).format("DD/MM/YYYY")
})