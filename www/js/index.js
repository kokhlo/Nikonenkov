//
var SqlServer;
// Домашняя страница с общей информацией, о пользователе, поиск заказов
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
// Компонент для ОТК (Выставление статусов и проверки QR сканером)
var RouterComponent = Vue.component('basic', {
  data: function () {
    return {
      title: 'You can use VueRouter!'
    }
  },
  template: `
    <div>
      <h1>{{ title }}</h1>
      <p> Dtc component is available</p>
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
