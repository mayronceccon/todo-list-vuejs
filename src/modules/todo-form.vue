<template>
    <div class="col s12 offset-m2 m8">
        <div class="input-field col s12 l6">
            <i class="material-icons prefix">access_time</i>
            <input name="task" type="text" class="validate" v-model="todoData.text">
            <label for="task">Tarefa</label>
        </div>
        <div class="input-field col s12 l6">
            <i class="material-icons prefix">date_range</i>							
            <input name="date" type="text" class="datepicker" v-model="todoData.date" v-mask="'##/##/#### ##:##'">
            <label for="date">Data</label>
        </div>
        <div class="input-field col s12">
            <i class="material-icons prefix">assignment</i>
            <textarea name="task" class="materialize-textarea" v-model="todoData.descricao"></textarea>
            <label for="descricao">Descrição</label>
        </div>
        <div class="input-field col s12">
            <i class="material-icons prefix">turned_in</i>
            <input name="text_tags" type="text" class="validate" v-model="text_tags" 
            v-on:keyup.enter="addTags()">
            <label for="text_tags">Tags</label>
            <div class="col s12" v-show="todoData.tags.length > 0">
                <div class="card grey lighten-1">
                    <div id="card-tags" class="card-content white-text">
                        <div class="chip" v-for="(tag, index) in todoData.tags">
                            {{tag.text}}
                            <i class="tiny material-icons" @click="removeTag(index)">close</i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <a id="btn-inserir" class="waves-effect waves-light btn btn-large col s12 deep-orange darken-2" @click="addTask()">Inserir</a>						
    </div>
</template>

<script>
    export default {
        data () {
            return {
                text_tags: '',
				todoData : 	{
					text : '',
					date : '',
					descricao : '',
					tags : [],
				}
            }
        },
        methods : {
            addTask() {
				if (this.todoData.text != '') {
                    let data = this.todoData;
					this.$emit('save', data);
                    //this.clearTodoData();
				}
			},
            addTags() {
				if (this.text_tags != '') {
					this.todoData.tags.push({text : this.text_tags});
					this.text_tags = '';
				}
			},
			removeTag(index) {
				this.todoData.tags.splice(index, 1);
			},
            clearTodoData() {
                this.text_tags = ''
                this.todoData.text = ''
                this.todoData.date = ''
                this.todoData.descricao = ''
                this.todoData.tags = []
            }
        }
    };
</script>

<style>
    .input-field input:focus + label {
        color: #E64A19 !important;
    }
    
    .row .input-field input:focus {
        border-bottom: 1px solid #E64A19 !important;
        box-shadow: 0 1px 0 0 #E64A19 !important
    }

    .input-field .active {
        color: #E64A19 !important;
    }

    #btn-inserir {
        margin-top: 5px;
    }

    #card-tags .chip i {
        vertical-align: middle;
        cursor: pointer;
    }
</style>