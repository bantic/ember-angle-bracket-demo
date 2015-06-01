import Ember from 'ember';

export default Ember.Component.extend({
  // attribute-bindings: sort of up in the air, in the unification proposal
  //   unification rfc proposal says that attributes passed in to the component
  //   that have string values will be put onto the root element of the
  //   component's template as attribute values

  didReceiveAttrs() {
    this.set('count', this.attrs.countZ);
  },

  click() {
    //this.attrs.fire(this.attrs.countZ + 1);
    this.incrementProperty('count');
  }
});
