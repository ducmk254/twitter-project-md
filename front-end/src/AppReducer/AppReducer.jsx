// Lưu ý: reducer này truyền vào state và action ={type:"",payload} 
/*
    với action.type tương ứng thì thực hiện hành động cập nhật state khác nhau
*/
export default function reducer(state,action){
    switch(action.type){
        /*
          1/  action.type="CURRENT_USER" : check user đang login 
            => return {...state,user:action.payload} lấy hết thuộc tính trong state ra 
            và cập nhật lại mỗi thằng user được truyền vào từ action.payload
            => khi gọi dispatch({type:"CURRENT_USER",payload:user}): truyền thông tin user đang login để truyền vào payload
          2/ action.type="GET_ALL_POSTS"
            => khi gọi dispatch({type="GET_ALL_POSTS",payload:posts}): truyền danh sách posts lấy được trong DB truyền vào payload
          3/ action.type="CREATE_ONE_POST"
            => khi gọi dispatch({type="CREATE_ONE_POST",payload:posts}): truyền bài post vừa tạo thành công vào payload để cập nhật posts
          4/ action.type="UPDATE_ONE_POST"
            => khi gọi dispatch({type="UPDATE_ONE_POST",payload:posts}): truyền bài post chỉnh sửa vào payload để cập nhật lại posts
          5/ action.type="DELETE_ONE_POST"
            => khi gọi dispatch({type="DELETE_ONE_POST",payload:posts}): truyền _id của bài post cần xóa vào payload để loại bỏ bài post khỏi posts
        */
        case "CURRENT_USER":
            return {...state,user:action.payload} // action.payload la du lieu tra ve
        case "GET_ALL_POSTS":
            return {...state,posts:action.payload}
        case "CREATE_ONE_POST":
            return {...state,posts:[action.payload,...state.posts]};
        case "UPDATE_ONE_POST":
            return {
                ...state,
                posts: state.posts.map(post=>
                    post._id === action.payload._id ? {...post,...action.payload} : post) //payload:post
            };
        case "DELETE_ONE_POST":
            return {
                ...state,
                posts: state.posts.filter(post=>post._id !== action.payload._id)
            };
        default:
            return state;
    }
}