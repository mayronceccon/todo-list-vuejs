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
				:filter="filter"
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
	export default {
		name: 'app',
		data () {
			return {
				tasks: [],
				filter: '',
				order : 'date',
			}
		},
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
		watch: {
			filter : function () {
				if (this.filter != '') {
					let self = this;
					let result = _.filter(this.listTasks(), function(d) {
						return d['text'].startsWith(self.filter); 
					});
					result = _.orderBy(result, this.order);
					this.list = result;
				} else {
					this.list = this.listTasks();
				}
			}
		},
		methods : {
			listTasks() {
				let result = JSON.parse(localStorage.getItem('tasks') || '[]');
				result = _.orderBy(result, this.order);
				return result;
			},
			addTodo(data) {
				this.tasks.push(data);
				localStorage.setItem('tasks', JSON.stringify(this.tasks));
			},
			removeTodo(index) {
				this.tasks.splice(index, 1);
				localStorage.setItem('tasks', JSON.stringify(this.tasks));
			}
		}
	}
</script>

<style>
	[v-cloak] {
		display: none;
	}
</style>
