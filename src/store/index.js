import { createStore } from 'vuex'


export default createStore({
    state: {
        count: 1,
        index: 2
    },
    mutations: {
        increment(state) {
            state.count++
        }
    },
    actions: {
    },
    modules: {
    }
})

