import Ember from 'ember';

export default Ember.Component.extend({
  isOpen: false,
  actions: {
    toggleAvailability(food){
      //Javascript method
      food.set('isAvailable', !food.get('isAvailable'));
      food.save();
    },
    toggleOpen(){
      //Ember method
      this.toggleProperty('isOpen');
    }
  }
});
