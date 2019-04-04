import {api, fetch} from '../../../ajax'
import {SET_CATE_DATA} from './actionTypes'

// 设置首页的分类状态
const setCateData = (data)=>(
    {
        type: SET_CATE_DATA,
        data
    }
)

// 请求首页的分类数据
export const getCateData = ()=>(
    async (dispatch)=>{
        let result = await fetch.get(api.HOME_CATE_API, {
            _: new Date().getTime(),
            a: 1,
            b: 2
        });
        let newData = result.data.kingkongList;
        let action = setCateData(newData);
        dispatch(action);
    }
)
