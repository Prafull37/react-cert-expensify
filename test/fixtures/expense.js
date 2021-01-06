import moment from "moment";

export default [{
    id: '1',
    description: 'Gum',
    notes: '',
    amount: 195,
    createdAt: 0
  }, {
    id: '2',
    description: 'Rent',
    notes: '',
    amount: 109500,
    createdAt: moment(0).subtract(4, 'days').valueOf()
  }, {
    id: '3',
    description: 'Credit Card',
    notes: '',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf()
  }];