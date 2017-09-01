<template>
    <div class="col s12 center-align">
        <span>Meu IP: <b>{{meuip}}</b></span>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                meuip: "",
            };
        },
        mounted: function() {
            this.buscaIp();
        },
        methods: {
            buscaIp() {
                this.$http.get("http://httpbin.org/ip").then((response) => {
                    let data = response.body;
                    this.meuip = data.origin;
                });
            },
        },
    };
</script>