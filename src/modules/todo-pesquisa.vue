<template>
    <div class="col s12">
        <div class="input-field col s12">
            <i class="material-icons prefix large">search</i>
            <input name="filter" type="text" class="validate" v-model="filter">
            <label for="filter">Pesquisar</label>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                filter: "",
            };
        },
        watch: {
            filter: function() {
                this.$emit("filter", this.filter);
            },
        },
    };
</script>