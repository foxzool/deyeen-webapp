import DS from 'ember-data';
import ENV from 'deyeen-webapp/config/environment';

export default DS.RESTAdapter.extend({
  headers:   {
    'Content-Type': 'application/vnd.api+json'
  },
  host:      ENV.API.Host,
  namespace: 'api/v1'
});
