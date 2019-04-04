// 中间件是一个函数

// export default function({dispatch, getState}){
//     return function(next){
//         return function(action){
//             // 开始打印一个日志集合
//             console.group(action.type);
//             // 打印事件
//             console.log('dispatch action:', action);
//             // 执行action
//             next(action);
//             // 打印新的state
//             console.log('next state:', getState());
//             // 结束打印集合
//             console.groupEnd();
//             return;
//         }
//     }
// }


export default ({dispatch, getState}) => next => action => {
    // 开始打印一个日志集合
    console.group(action.type);
    // 打印事件
    console.log('dispatch action:', action);
    // 执行action
    next(action);
    // 打印新的state
    console.log('next state:', getState());
    // 结束打印集合
    console.groupEnd();
    return;
}


