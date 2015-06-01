import Ember from 'ember';
const computed = Ember.computed;

export default Ember.Component.extend({
  firstName: computed.reads('attrs.first'),
  lastName: computed.reads('attrs.last'),

  fullName: computed('firstName', 'lastName', function(){
    return this.get('firstName') + ' ' + this.get('lastName');
  }),

  actions: {
    'do-something'() {
      this.attrs['do-something']();
    }
  }
});
