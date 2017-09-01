import _ from "lodash";

const storage = {
    methods: {
        saveDataTodo: function(tasks) {
            localStorage.setItem("tasks", JSON.stringify(tasks));
        },
        listDataTodo: function() {
            let result = JSON.parse(localStorage.getItem("tasks") || "[]");
            result = _.orderBy(result, "date");
            return result;
        },
        removeDataTodo: function(tasks, index) {
            tasks.splice(index, 1);
            localStorage.setItem("tasks", JSON.stringify(tasks));
        },
        filterDataTodo: function(filter) {
            if (filter !== "") {
                let result = _.filter(
                    this.listDataTodo(this.listDataTodo()), function(d) {
                        return d["text"].startsWith(filter);
                    }
                );
                return _.orderBy(result, "date");
            } else {
                return this.listDataTodo();
            }
        },
    },
};

export default storage;
