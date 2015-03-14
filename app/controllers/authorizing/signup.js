import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    'join': function () {

      this.store.createRecord('user', this.getProperties('username', 'password')).save()
        .then(this.success.bind(this)).catch(this.failure.bind(this));
    }
  },

  success: function () {

  },

  failure: function (result) {
    console.log(result);
  }
});
