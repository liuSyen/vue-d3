requirejs.config({
    baseUrl: 'lib',
    paths: {
        'Vue': './vue',
        'Vuex': './vuex',
        'vuetify': './vuetify',
        'd3': './d3'
    }
})

requirejs(['Vue', 'Vuex', 'vuetify', 'd3'], function($this, $store,$vuetify,$d3) {
    var vm = new $this({
        template: '<div>{{message}}</div>',
        data: {
            message: 'hello world'
        }
    }).$mount('#app')

})