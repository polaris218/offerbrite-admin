export const user = (state = [], action) => {
    switch (action.type) {
        case 'ADD_USER':
            console.log('user adding: ', action.payload.firstName);
            return state.concat([action.payload]);
        default:
            return state;
    }
};
