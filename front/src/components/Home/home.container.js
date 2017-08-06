import Home from './index.js'
import { connect } from 'react-redux'

const mapStateToProps = (state) =>{
    return { state }
}
const mapDispatchToProps = (dispatch) => {
    return { dispatch }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);