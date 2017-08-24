<template>
    <div class="col s12">
        <div class="col s12 l4" v-for="(task, index) in tasks">
            <div class="card deep-orange darken-2">
                <div class="card-content white-text">
                    <span class="card-title">{{task.text}}</span>
                    <p>
                        Data: {{task.date}}
                        <br>
                        <div class="chip" v-for="(tag, indexTag) in task.tags">
                            {{tag.text}}
                            <!--<i class="material-icons">close</i>-->
                        </div>
                    </p>
                </div>
                <div class="card-action">
                    <a v-on:click="$emit('remove', index)">Remover</a>
                </div>              
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                
            }
        },
        props : {
            tasks : Array
        },
    }
</script>