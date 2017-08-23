<template>
  	<div id="app" v-cloak class="container">
		<div class="row">
			<div class="col s12 offset-m2 m8">				
				<h1 class="center-align">{{title}}</h1>
				<div class="input-field col s12">
					<i class="material-icons prefix">access_time</i>
					<input name="task" type="text" class="validate" v-model="text">
					<label for="task">Tarefa</label>
				</div>
				<div class="input-field col s12">
					<i class="material-icons prefix">date_range</i>							
					<input name="date" type="text" class="datepicker" v-model="date">
					<label for="date">Data</label>
				</div>
				<div class="input-field col s12">
					<i class="material-icons prefix">turned_in</i>
					<input name="text_tags" type="text" class="validate" v-model="text_tags" v-on:keyup.enter="addTags()">
					<label for="text_tags">Tags</label>
					<div class="chip" v-for="tag in tags">
						{{tag.text}}
						<!--<i class="close material-icons">close</i>-->
					</div>
				</div>
				<a class="waves-effect waves-light btn col s12" @click="addTask()">Inserir</a>						
			</div>
		</div>		
		<div class="row">
			<div class="col s12">
				<TodoList v-bind:tasks="tasks" @remove="removeTask"></TodoList>
				<div class="center-align">
					<div class="chip">
						Tarefas a fazer: {{tasks.length}}
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col s12">
				<TodoMeuIp/>
			</div>
		</div>
  	</div>
</template>

<script>
	import TodoMeuIp from './modules/meuip.vue';
	import TodoList from './modules/todo-list.vue';

	export default {
		name: 'app',
		data () {
			return {
				title: 'To-do List Vue Js',
				text: '',
				date: '',
				text_tags: '',
				tasks: [],
				tags: []
			}
		},
		mounted : function() {
		},
		components : {TodoMeuIp, TodoList},
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
