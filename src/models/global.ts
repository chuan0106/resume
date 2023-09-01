export default {
    namespace: 'resume',
    state: {
        theme: '', // 主题 跟随电脑主题色联动 控制场景切换
        type: '简介'  // 默认模块
    },

    subscriptions: {
        setup({ dispatch, history }) { },
    },

    effects: {

    },

    reducers: {
        save(state, { payload }) {
            state.theme = payload;
            return { ...state };

        },
        setType(state, { payload }) {
            state.type = payload;
            return { ...state };

        },
    },
};
