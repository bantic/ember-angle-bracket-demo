import Ember from 'ember';

export default Ember.Component.extend({
  click() {
    this.attrs.count.update(this.attrs.count.value + 1);
  }
});
