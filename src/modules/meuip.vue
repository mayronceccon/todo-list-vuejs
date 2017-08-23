<template>
    <div class="center-align">   
        <span>Meu IP: <b>{{meuip}}</b></span>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                meuip : '',
            }
        },
        mounted : function() {
            this.buscaIp();
        },
        methods : {
            buscaIp() {
				this.$http.get('http://httpbin.org/ip').then(response => { 
					//this.origin = response.body;
					let data = response.body;
					this.meuip = data.origin;
					//this.$set('meuip_desc', data.origin);
				}, response => {
					// error callback 
				});
			}
        }
	}
</script>