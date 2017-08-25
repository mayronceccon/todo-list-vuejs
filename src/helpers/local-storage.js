//plugin.js
var MyPlugin = {};

MyPlugin.install = function(Vue, options){
    var service = {
        getName(){
            return this.name;
        },
        getNameVersion2(vm){
            return vm.name;
        }
    }

    Vue.prototype.$service = service;
};