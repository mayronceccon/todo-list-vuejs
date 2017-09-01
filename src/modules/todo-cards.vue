<template>
    <div class="col s12">
        <div class="col s12 l4" v-for="(task, index) in tasks">
            <div class="card deep-orange darken-2">
                <div class="card-content white-text">
                    <span class="card-title"><b>{{task.text}}</b></span>
                    <p>
                        <p v-if="task.date">{{task.date}}</p>
                        <p class="item-descricao" v-if="task.descricao">{{task.descricao}}</p>
                        <p v-if="task.tags.lenght > 0">
                            <div class="chip" v-for="(tag, indexTag) in task.tags">
                                {{tag.text}}
                                <!--<i class="material-icons">close</i>-->
                            </div>
                        </p>
                    </p>
                </div>
                <div class="card-action">
                    <a class="remover" v-on:click="removeTask(index)">Remover</a>
                </div>              
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            };
        },
        props: {
            tasks: Array,
        },
        methods: {
            removeTask(index) {
                this.$emit("remove", index);
            },
        },
    };
</script>

<style>
    .item-descricao {
        text-align: justify;
    }

    .remover {
        cursor: pointer;
    }
</style>