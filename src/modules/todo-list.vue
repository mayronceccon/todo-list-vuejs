<template>
    <div class="z-depth-5" v-show="tasks.length > 0">
        <ul class="collapsible" data-collapsible="accordion">
            <li v-for="(task, index) in tasks">
                <div class="collapsible-header">
                    <i class="material-icons">bookmark_border</i>{{task.text}}
                </div>
                <div class="collapsible-body">
                    Data: {{task.date}}
                    <br>
                    <div class="chip" v-for="(tag, indexTag) in task.tags">
                        {{tag.text}}
                        <!--<i class="material-icons">close</i>-->
                    </div>
                </div>
            </li>
        </ul>
        <!--
        <ul class="collapsible" data-collapsible="accordion">
            <li v-for="(task, index) in tasks">
                <TodoItem v-bind:item="task" @remove="$emit('remove', index)"></TodoItem>
            </li>
        </ul>
        -->
    </div>
</template>

<script>
    import TodoItem from './todo-item.vue';

    export default {
        props : {
            tasks : Array
        },
        components : {TodoItem},
    }
</script>

<style>

</style>