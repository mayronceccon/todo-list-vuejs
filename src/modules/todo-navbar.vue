<template>
    <div class="col s12">
        <nav class="deep-orange darken-2">
            <div class="nav-wrapper">
                <a class="brand-logo">{{title}}</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">							
                    <li><a>{{time}}</a></li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    import moment from "moment";

    export default {
        data() {
            return {
                title: "To-do in Vue",
            };
        },
        computed: {
            time: function() {
                return moment().format("DD/MM/YYYY, HH:mm:ss");
            },
        },
    };
</script>

<style>
    .brand-logo {
        padding-left: 10px !important;
    }
</style>