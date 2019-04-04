import {SET_CATE_DATA} from './actionTypes'
const initialState = {
    title: '首页',
    cateList: []
}
const reducer = (state = initialState, action)=>{
    switch (action.type) {
        case SET_CATE_DATA:
            return {...state, cateList: action.data};
        default:
            return state;
    }
    
}
export default reducer;