var HomeComponent = Vue.component('home', {
  name: 'Home',
  data: function () {
    return {
      message: 'Schtandart App'
    }
  },
  template: `
    <div>
      <h1>{{ message }}</h1>
    
      <div class="list white no-border radius shadow">
        <div class="item">
          <div class="left">
            <img class="avatar radius" src="/img/33.jpg" />
          </div>
          <h2 class="strong">Konstantin Khlopkov</h2>
          <p class="text-red-400">@kokhlo</p>
          <p class="text-grey">5 минут назад</p>
          
          <div class="right">
            <button class="white icon ion-ios-heart-outline text-red-400"> 23</button>
          </div>
          
        </div>
        <div class="item full">
          <img src="/img/nature2.jpg" />
        </div>
        <div class="item text-grey-600">
          <p>
              <span style="color: red">Schtandart🖤</span>
          </p>
        </div>
      </div>
    </div>
  `
})

var RouterComponent = Vue.component('basic', {
  data: function () {
    return {
      title: 'Qc tab',
      link: 'URL',
      parsed: 0,
      info: null
    }  
},
  methods: {
    getTable: function () {
      // barcode будет из input`а 
      // а этот код добавить в метод на онклик по кнопке в qc

      var info;
      var parsed;
      window.plugins.GMVBarcodeScanner.scan({}, function (err, result) {

        //Handle Errors
        if (err) return;
        var barcodeUrl = 'http://172.16.0.200:81/autogen/oijson/' + result;
        //Do something with the data.
        alert(result);
        axios
          .get(barcodeUrl)
          .then(response => (this.info = response));
        alert(this.info);

      });
    }

  },
  template: `
    <div>
      <h1>{{ title }}</h1>
      <div class="list white no-border radius shadow">
        <div class="item">
          <div class="left">
            <img class="avatar radius" src="/img/33.jpg" />
          </div>
          <h2 class="strong">Konstantin Khlopkov</h2>
          <p class="text-red-400">@kokhlo</p>
          <p class="text-grey">Ровно 5 минут назад</p>
          <div class="right">
            <button class="white icon ion-ios-heart-outline text-red-400">14</button>
          </div>
        </div>
          
          <p>Введённое сообщение: barcode </p>
          <button id="getTable" v-on:click="getTable" class="grey small">Get table</button>
          <br>
          <button id="prepare" class="purple small">Prepare</button>
          <button id="show" class="red small">Show</button>
          <button id="scan" class="blue small">Scan</button>
          <br>
          {{info}}
        <div class="item text-grey-600">
          <p>
            <span style="color: red"> Qc component is available</span>
          </p>
        </div>
      </div>
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
      path: '/qc',
      component: RouterComponent
    }
  ]
})



var vueApp = new Vue({
  el: '#app',
  router,
  data() {
    return {
      info: null
    };
  },
  mounted() {
    axios
      .get('http://172.16.0.200:81/autogen/oijson/2000063673607')
      .then(response => (this.info = response));
    alert(this.info);

  }

})

