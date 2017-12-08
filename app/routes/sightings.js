import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    let record1 = this.store.createRecord('sighting', {
      location: 'Atlanta',
      sightedAt: new Date('2017-02-09')
    });

    let record2 = this.store.createRecord('sighting', {
      location: 'Baltimore',
      sightedAt: new Date('2017-03-14')
    });

    let record3 = this.store.createRecord('sighting', {
      location: 'New York',
      sightedAt: new Date('2017-03-21')
    });

    return [record1, record2, record3];
  }
});
