<template>
    <div class="col s12">
        <div class="input-field col s12">
            <i class="material-icons prefix large">search</i>
            <input name="filter" type="text" class="validate" v-model="filter_computed">
            <label for="filter">Pesquisar</label>
        </div>
    </div>
</template>

<script>
    export default {
        props : {
            filter_ String,
        },
        computed : {
            filter_computed : {
                get : function() {
                    return this.filter;
                },
                set : function(text) {
                    this.$parent.$data.filter = text;
                }
            }
        }
    };
</script>