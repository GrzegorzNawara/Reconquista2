import { connect } from 'react-redux'
import CountdownTimer from '../components/CountdownTimer'
//import debug from '../include/debug'

const mapStateToProps = (state) => ({
  delay: Math.floor(Math.max(1000,((state.mymap.start_time+state.mymap.time_used*1000)-Date.now())+2000)/1000)
})

const mapDispatchToProps = {
}

const CountdownTimerWithDelay = connect(
  mapStateToProps,
  mapDispatchToProps
)(CountdownTimer)

export default CountdownTimerWithDelay
