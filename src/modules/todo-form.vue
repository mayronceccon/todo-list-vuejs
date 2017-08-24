<template>
    <div class="col s12 offset-m2 m8">
        <div class="input-field col s12">
            <i class="material-icons prefix">access_time</i>
            <input name="task" type="text" class="validate" v-model="text_computed">
            <label for="task">Tarefa</label>
        </div>
        <div class="input-field col s12">
            <i class="material-icons prefix">date_range</i>							
            <input name="date" type="text" class="datepicker" v-model="date_computed" v-mask="'##/##/#### ##:##'">
            <label for="date">Data</label>
        </div>
        <div class="input-field col s12">
            <i class="material-icons prefix">turned_in</i>
            <input name="text_tags" type="text" class="validate" v-model="text_tags_computed" 
            v-on:keyup.enter="$emit('addTags')">
            <label for="text_tags">Tags</label>
            <div class="chip" v-for="tag in tags">
                {{tag.text}}
                <!--<i class="close material-icons">close</i>-->
            </div>
        </div>
        <a class="waves-effect waves-light btn col s12 deep-orange darken-2" @click="$emit('addTask')">Inserir</a>						
    </div>
</template>

<script>
    export default {
        data () {
            return {
                
            }
        },
        props : {            
            text: String,
            text_tags: String,
            date: String,
            tags: Array
        },       
        computed : {
            text_computed : {
                get: function() {
                    return this.text;
                },
                set : function(text) {
                    this.$parent.$data.text = text;
                }                
            },
            text_tags_computed : {
                get: function() {
                    return this.text_tags;
                },
                set : function(text) {
                    this.$parent.$data.text_tags = text;
                }                
            },
            date_computed : {
                get: function() {
                    return this.date;
                },
                set : function(text) {
                    this.$parent.$data.date = text;
                }                
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
</style>