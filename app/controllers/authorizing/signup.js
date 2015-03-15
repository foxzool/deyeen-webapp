import Ember from 'ember';

export default Ember.Controller.extend({
  hasError:      false,
  errorMessages: null,
  actions:       {
    'join': function () {
      var self = this;
      var onSuccess = function (response) {
        response.set('password', null);
        self.get('session').authenticate('simple-auth-authenticator:oauth2-password-grant', {
          identification: self.get('username'),
          password:       self.get('password')
        });
        self.send('closeModal', 'authorizing/signup');
      };

      var onFailure = function (response) {
        self.set('hasError', true);
        self.set('errorMessages', response.responseJSON.errors);
      };

      this.store.createRecord('user', this.getProperties('username', 'password')).save()
        .then(onSuccess(), onFailure());
    }
  }
});
