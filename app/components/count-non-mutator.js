import Ember from 'ember';

export default Ember.Component.extend({
  style: function(){
    return "background-color: pink;".htmlSafe();
  }.property(),

  click() {
    this.set('count', 25);
  }
});
