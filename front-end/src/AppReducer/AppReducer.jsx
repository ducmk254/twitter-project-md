export default function reducer(state,action){
    switch(action.type){
        case "CURRENT_USER":
            return {...state,user:action.playload} // action.playload la du lieu tra ve
        case "GET_ALL_POSTS":
            return {...state,posts:action.playload}
        case "CREATE_ONE_POST":
            return {...state,posts:[...state.posts,action.playload]};
        case "UPDATE_ONE_POST":
            return {
                ...state,
                posts: state.posts.map(post=>
                    post._id === action.playload._id ? {...post,...action.playload} : post)
            };
        case "DELETE_ONE_POST":
            return {
                ...state,
                posts: state.posts.filter(post=>post._id !== action.playload._id)
            };
        default:
            return state;
    }
}