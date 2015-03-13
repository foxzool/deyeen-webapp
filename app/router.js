import Ember from 'ember';
import config from 'deyeen-webapp/config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
});

export default Router;
