import { connect } from 'react-redux'
import Footer from '../components/Footer'
//import debug from '../include/debug'

const mapStateToProps = (state) => ({
  mymap: state.mymap
})

const mapDispatchToProps = {
}

const FooterWithData = connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer)

export default FooterWithData
