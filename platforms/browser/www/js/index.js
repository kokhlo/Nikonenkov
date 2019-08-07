var HomeComponent = Vue.component('home', {
  name: 'Home',
  data: function () {
    return {
      message: 'Schtandart App'
    }
  },
  template: `
    <div>
      <h1>{{ message }} <span style="color: red">Schtandart🖤</span></h1>
    </div>
  `
})

var RouterComponent = Vue.component('basic', {
  data: function () {
    return {
      title: 'You can use VueRouter!'
    }
  },
  template: `
    <div>
      <h1>{{ title }} <span style="color: red"> Dtc component is available</span></h1>
      
    </div>
  `
})

var router = new VueRouter({
  routes: [
    {
      path: '/',
      component: HomeComponent
    },
    {
      path: '/dtc',
      component: RouterComponent
    }
  ]
})



var vueApp = new Vue({
  el: '#app',
  router})

 
