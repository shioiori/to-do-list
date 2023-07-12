import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

  
export default new Vuex.Store({
    state: () => ({ 
        taskName: '',
        listTasks: [
            {
                id: 0,
                title: "ababa"
            }
        ],
        editTaskId: -1,
        index: 1,
    }),
    
    getters: {
        getTaskName: (state) => state.taskName,
        getListTasks: (state) => state.listTasks,
        getEditTaskId: (state) => state.editTaskId,
        getTaskById: (state, id) => state.listTasks.find((x) => x.id == id),
    },
    mutations: {
        setTaskName: (state, taskName) => {
            state.taskName = taskName;
        },
        setListTasks: (state, listTasks) => {
            state.listTasks = listTasks;
        },
        setEditTaskId: (state, editTaskId) => state.editTaskId = editTaskId,
        addTask: (state) => {
            state.listTasks.push({
                id: state.index,
                title: state.taskName,
            });
            state.index++;
            state.taskName = "";
        },
        editTask: (state) => {
            state.listTasks.find((x) => x.id == state.editTaskId).title = state.taskName;
            state.editTaskId = -1;
            state.taskName = "";
        },
        deleteTask: (state, taskId) => {
            var idx = state.listTasks.findIndex((x) => x.id == taskId);
            state.listTasks.splice(idx, 1);
        },
        changeStateTask: (state, obj) => {
            console.log(obj);
            state.editTaskId = obj.id;
            state.taskName = obj.title;
        },
    },
    actions: {
    }
})
  