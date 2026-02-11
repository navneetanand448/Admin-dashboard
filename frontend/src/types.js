import PropTypes from 'prop-types';
export const OrderItemType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  _id: PropTypes.string.isRequired,
});

export const OrderType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  pinCode: PropTypes.number.isRequired,
  status: PropTypes.oneOf(["Processing", "Shipped", "Delivered"]).isRequired,
  subtotal: PropTypes.number.isRequired,
  discount: PropTypes.number.isRequired,
  shippingCharges: PropTypes.number.isRequired,
  tax: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  orderItems: PropTypes.arrayOf(OrderItemType).isRequired,
  _id: PropTypes.string.isRequired,
});