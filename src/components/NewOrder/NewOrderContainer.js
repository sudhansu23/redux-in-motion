import {connect} from 'react-redux'
import NewOrder from './NewOrder'
import {actions as orderActions} from '../../ducks/orders'

const mapDispatchToProps = dispatch => ({
  placeOrder: orderData => dispatch(orderActions.placeOrder(orderData))
})

export default connect(null, mapDispatchToProps)(NewOrder)
