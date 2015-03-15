import Ember from 'ember';
import SemanticModalMixin from 'semantic-ui-ember/mixins/modal';

export default Ember.View.extend(SemanticModalMixin, {
  classNames:   ['ui', 'modal', 'small'],
  templateName: 'authorizing/signin',
  closable:     true,
  offset:       300
});
