import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: '',
  namespace: 'api/v1'
});
