import Component from '@glimmer/component';

export default class RentalsFilterComponent extends Component {
  get results() {
    let { rentals, query } = this.args;

    if (query) {
      let pattern = new RegExp(`${query}`, 'gi');
      rentals = rentals.filter(rental => pattern.test(rental.title));
    }

    return rentals;
  }
}
