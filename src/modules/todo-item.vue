<template>  	
    <div id="todo-item">        
        <div>
            <i class="material-icons tiny">bookmark_border</i>
            {{item.text}}
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            item: Object,
        },
        beforeDestroy: function() {
            console.log("beforeDestroy");
        },
    };
</script>

<style>
    #todo-item {
        cursor : pointer;
    }
</style>
