import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    'signin': function () {
      this.send('openModal', 'authorizing/signin');
    },
    'signup': function () {
      this.send('openModal', 'authorizing/signup');
    }
  }
});
