import Ember from 'ember';
import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    let witnessRecord = this.store.createRecord('witness', {
      fName: 'Sam',
      lName: 'Gandee',
      email: 'test@test.com'
    });
    return [witnessRecord]
  }
});
