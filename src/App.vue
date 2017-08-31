<template>
  	<div id="app" v-cloak class="container">
	  	<div class="row">
			<TodoNavbar />
		</div>
		<div class="row">
			<TodoForm 
				@save="addTodo"
			/>
		</div>
		<div class="row">
			<TodoPesquisa 
				@filter="filterData"
			/>
		</div>
		<div class="row">
			<TodoCards 
				:tasks="list"
				@remove="removeTodo"
			/>
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
	import _ from 'lodash'
	import TodoMeuIp from './modules/todo-meuip.vue';
	import TodoForm from './modules/todo-form.vue';
	import TodoNavbar from './modules/todo-navbar.vue';
	import TodoCards from './modules/todo-cards.vue';
	import TodoPesquisa from './modules/todo-pesquisa.vue';
	import storage from './helpers/storage';

	export default {
		name: 'app',
		data () {
			return {
				tasks: [],
				filter: '',
				order : 'date',
			}
		},
		mixins: [storage],
		mounted : function() {
			this.tasks = this.listTasks();
		},
		components : {
			TodoMeuIp,
			TodoForm,
			TodoNavbar,
			TodoCards,
			TodoPesquisa,
		},
		computed : {
			list : {
				get: function() {
					return this.tasks;
                },
                set : function(data) {
                    this.tasks = data;
                }
			},
		},
		methods : {
			listTasks() {
				return this.listDataTodo()
			},
			addTodo(data) {
				this.tasks.push(data);
				this.saveDataTodo(this.tasks)
			},
			removeTodo(index) {
				this.removeDataTodo(this.tasks, index)
			},
			filterData(filter) {
				this.list = this.filterDataTodo(filter)
			}
		}
	}
</script>

<style>
	[v-cloak] {
		display: none;
	}
</style>
