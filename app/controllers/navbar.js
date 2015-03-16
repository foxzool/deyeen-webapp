import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    'signin': function () {
      this.send('openModal', 'authentication/signin');
    },
    'signup': function () {
      this.send('openModal', 'authentication/signup');
    }
  }
});
