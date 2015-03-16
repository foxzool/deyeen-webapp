import Ember from 'ember';

export default Ember.Controller.extend({
  hasError:      false,
  errorMessages: null,
  actions:       {
    'submit': function () {
      var self = this;

      this.store.createRecord('user', this.getProperties('username', 'password')).save()
        .then(
        function (response) {
          response.set('password', null);
          self.get('session').authenticate('simple-auth-authenticator:oauth2-password-grant', {
            identification: self.get('username'),
            password:       self.get('password')
          });
          self.send('closeModal', 'authentication/signup');
        },
        function (response) {
          self.set('hasError', true);
          self.set('errorMessages', response.responseJSON.errors);
        }
      );
    }
  }
});
