<template>
    <div class="task">
        <input type="text" disabled :value=title :id=id>
        <input type="button" value="✏️" id="rename-task" v-on:click="editTask">
        <input type="button" value="❌" id="del-task" v-on:click="removeTask">
    </div>
</template>


<script>
    import '../assets/css/style.css';
    export default {
        name: 'ToDoItem',
        props: {
            id: Number,
            title: String,
        },
        methods: {
            removeTask () {
                this.$store.commit('deleteTask', this.id);
            },
            editTask () {
                this.$store.commit('changeStateTask', {
                    id: this.id,
                    title: this.title,
                });
                this.$emit('change-state-task');
            }
        }
    }
</script>
