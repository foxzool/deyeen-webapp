import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin'

export default Ember.Controller.extend(LoginControllerMixin, {
  hasError:      false,
  authenticator: 'simple-auth-authenticator:oauth2-password-grant',
  actions:       {
    'authenticate': function () {
      var self = this;
      self._super().then(function () {

      }, function () {
        self.set('hasError', true);
      })
    }
  }
})
  ;
