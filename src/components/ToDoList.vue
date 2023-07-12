<template>
  <div class="container">
    <h1>ADD TODO LIST</h1>
    <div id="line"></div>
    <div class="task-input">
      <input
        type="text"
        v-model="newTask"
        id="add-task"
        name="todo"
        placeholder="Add Task..."
        value="newTask"
      />
      <div class="flex-button">
        <input
          type="button"
          value="➕"
          name="add"
          id="add-btn"
          title="Add Task"
          v-on:click="addTask"
        />
        <input
          type="button"
          value="❌"
          name="delete"
          id="del-btn"
          title="Remove All Task"
          v-on:click="cleanTask"
        />
      </div>
    </div>
    <div class="new-tasks" id="list-tasks">
      <TodoItem
        v-for="(task, index) in this.$store.getters.getListTasks"
        v-bind:id="task.id"
        v-bind:title="task.title"
        v-bind:key="index"
        @change-state-task="changeStateTask"
      ></TodoItem>
    </div>
  </div>
</template>

<script>
import "../assets/css/style.css";
import TodoItem from "@/components/ToDoItem.vue";

export default {
  name: "ToDoList",
  components: {
    TodoItem,
  },
  data() {
    return {
      newTask: "",
    }
  },
  methods: {
    addTask() {
      this.$store.commit('setTaskName', this.newTask);
      console.log(this.$store.getters.getTaskName);
      if (this.$store.getters.getEditTaskId != -1){
        this.$store.commit('editTask');
        this.$store.commit('setEditTaskId', -1);
      }
      else {
        this.$store.commit('addTask');
      }
      this.cleanTask();
    },
    cleanTask() {
      this.newTask = "";
    },
    removeTask(rmId) {
      this.$store.commit('removeTask', rmId);
    },
    changeStateTask(){
      this.newTask = this.$store.getters.getTaskName;
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
