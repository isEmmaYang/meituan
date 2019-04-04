import React, { Component } from "react";


function UI(props){
    return (
        <div id="home" className="page">
            <h1>首页</h1>
            <ul>
                {
                    props.cateList.map(item=>{
                        return (
                            <li key={item.cateId}>
                                <img src={item.icon} alt=""/>
                                <span>{item.name}</span>
                            </li> 
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default class Home extends Component {
    render() {
      let props = {
        cateList: this.props.cateList
      }
      return <UI {...props}/>;
    }
    componentDidMount(){
      //请求分类列表数据
      this.props.getCateData();
    }
    
  }

  
