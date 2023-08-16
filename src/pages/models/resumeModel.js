export default {

    namespace: 'resume',
    state: {
        theme: '',
        type: '技能'
    },

    subscriptions: {
        setup ({ dispatch, history }) { },
    },

    effects: {

    },

    reducers: {
        save (state, { payload })
        {
            state.theme = payload;
            return { ...state };

        },
        setType (state, { payload })
        {
            state.type = payload;
            return { ...state };

        },
    },
};
