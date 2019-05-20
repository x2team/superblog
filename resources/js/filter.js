import Vue from 'vue'
import moment from 'moment';

Vue.filter('timeformat', (arg) => {
  return moment(arg).format("DD/MM/YYYY")
})

Vue.filter('sortlength',  (text, length, suffix) => {
	return text.substring(0, length) + suffix;
})