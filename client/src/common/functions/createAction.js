const createAction = (type) => {
    return (content) => {
        return {
            type,
            payload: content
        };
    };
};

export default createAction;
