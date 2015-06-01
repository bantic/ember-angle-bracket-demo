import Ember from 'ember';

export default Ember.Component.extend({
  myProp: 'I am groot',
  actions: {
    close(val1, val2) {
      alert(`close with val1: ${val1} and val2: ${val2}`);
    }
  }
});
