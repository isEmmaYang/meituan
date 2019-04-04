import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import './tabs.scss'
class Tabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectId: 'home'
        }
        this.history = props.history;
    }
    
  render() {
    let tabArr = [
        {id: 'home', path: '/home', name: '首页', icon: '/images/home-n.png', iconActive: '/images/home-a.png'},
        {id: 'order', path: '/order', name: '订单', icon: '/images/order-n.png', iconActive: '/images/order-a.png'},
        {id: 'mine', path: '/mine', name: '我的', icon: '/images/mine-n.png', iconActive: '/images/mine-a.png'}
    ];
    let {selectId} = this.state;
    
    return (
      <nav className="tabs">
      {
        tabArr.map(item=>{
            //判断是否选中
            let style = selectId === item.id ? {backgroundImage: `url(${item.iconActive})`} : {backgroundImage: `url(${item.icon})`};
            return (
                <div key={item.id} className="tab" onClick={()=>this.changeTabAction(item.id, item.path)}>
                    <span className="icon" key={item.id} to={item.path} style={style}>
                    </span>
                    <span className="text">{item.name}</span>
                </div>
            )
        })
      }
      </nav>
    )
  }

//   切换tab事件
  changeTabAction = (id, path)=>{
      //选中icon
    this.setState({selectId: id});
    // 切换页面
    this.history.push(path);
  }
}

export default withRouter(Tabs);