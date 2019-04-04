import {connect} from 'react-redux'
import UI from './UI'
import {getCateData} from '../../store/modules/home/actions'
import {getName, getCate} from '../../store/selector/homeSelector'



const mapStateToProps = (state)=>({
  name: getName(state),
  cateList: getCate(state)
})

const mapDispatchToProps = (dispatch)=>({
  getCateData: ()=>dispatch(getCateData())
})

export default connect(mapStateToProps, mapDispatchToProps)(UI);