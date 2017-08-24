<template>
  	<div id="app" v-cloak class="container">
	  	<div class="row">
			<TodoNavbar
				:title="title" 
			/>			
		</div>
		<div class="row">
			<TodoForm				
				:text="text" 
				:text_tags="text_tags"
				:date="date"
				:tags="tags"
				@addTask="addTask"
				@addTags="addTags"
			/>
		</div>		
		<div class="row">
			<div class="col s12">
				<TodoList v-bind:tasks="tasks" @remove="removeTask"></TodoList>			
			</div>
		</div>
		<div class="row">
			<TodoCards v-bind:tasks="tasks" @remove="removeTask"/>
		</div>
		<div class="row">
			<div class="col s12 center-align">
				<div class="chip">
					Tarefas a fazer: {{tasks.length}}
				</div>
			</div>
		</div>
		<div class="row">			
			<TodoMeuIp/>			
		</div>
  	</div>
</template>

<script>
	import TodoMeuIp from './modules/todo-meuip.vue';
	import TodoList from './modules/todo-list.vue';
	import TodoForm from './modules/todo-form.vue';
	import TodoNavbar from './modules/todo-navbar.vue';
	import TodoCards from './modules/todo-cards.vue';

	export default {
		name: 'app',
		data () {
			return {
				title: 'To-do in Vue',
				text: '',
				date: '',
				text_tags: '',
				tasks: [],
				tags: []
			}
		},
		mounted : function() {
		},
		components : {
			TodoMeuIp,
			TodoList,
			TodoForm,
			TodoNavbar,
			TodoCards,
		},
		methods : {			
			addTask() {
				if (this.text != '') {
					this.tasks.push({text : this.text, tags : this.tags, date : this.date});
					this.text = '';
					this.date = '';
					this.tags = [];
				}
			},
			removeTask(index) {
				this.tasks.splice(index, 1);
			},
			addTags() {
				if (this.text_tags != '') {
					this.tags.push({text : this.text_tags});
					this.text_tags = '';
				}
			}		
		}
	}
</script>

<style>
	[v-cloak] {
		display: none;
	}
</style>
