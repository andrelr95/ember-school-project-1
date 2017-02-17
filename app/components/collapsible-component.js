import Ember from 'ember';

export default Ember.Component.extend({
    isOpen: false,
    actions: {
      toggleOpen(){
        //Ember method
        this.toggleProperty('isOpen');
      }
    }
});
