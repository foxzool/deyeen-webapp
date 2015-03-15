import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  headers: {
    'Content-Type': 'application/vnd.api+json'
  },
  namespace: 'api/v1'
});
