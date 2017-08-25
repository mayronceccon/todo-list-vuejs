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
				:descricao="descricao"
				:tags="tags"
				@addTask="addTask"
				@addTags="addTags"
				@removeTag="removeTag"
			/>
		</div>		
		<div class="row" v-show="false">
			<div class="col s12">
				<TodoList v-bind:tasks="list" @remove="removeTask"></TodoList>			
			</div>
		</div>
		<div class="row">
			<TodoPesquisa 
				:filter="filter"
			/>
		</div>
		<div class="row">
			<TodoCards v-bind:tasks="list" @remove="removeTask"/>
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
	import TodoList from './modules/todo-list.vue';
	import TodoForm from './modules/todo-form.vue';
	import TodoNavbar from './modules/todo-navbar.vue';
	import TodoCards from './modules/todo-cards.vue';
	import TodoPesquisa from './modules/todo-pesquisa.vue';

	export default {
		name: 'app',
		data () {
			return {
				title: 'To-do in Vue',
				text: '',
				date: '',
				descricao: '',
				text_tags: '',
				tasks: [],
				tags: [],
				filter: '',
				order : 'date'
			}
		},
		mounted : function() {
			this.tasks = this.listTasks();
		},
		components : {
			TodoMeuIp,
			TodoList,
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
				console.log(this.filter)
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
			addTask() {
				if (this.text != '') {
					this.tasks.push({
						text : this.text,
						tags : this.tags,
						date : this.date,
						descricao : this.descricao
					});
					this.text = '';
					this.date = '';
					this.descricao = '';
					this.tags = [];
					localStorage.setItem('tasks', JSON.stringify(this.tasks));
				}
			},
			removeTask(index) {
				this.tasks.splice(index, 1);
				localStorage.setItem('tasks', JSON.stringify(this.tasks));
			},
			addTags() {
				if (this.text_tags != '') {
					this.tags.push({text : this.text_tags});
					this.text_tags = '';
				}
			},
			removeTag(index) {
				this.tags.splice(index, 1);
			}
		}
	}
</script>

<style>
	[v-cloak] {
		display: none;
	}
</style>
