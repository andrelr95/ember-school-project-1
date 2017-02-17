import Ember from 'ember';

export default Ember.Controller.extend({
  restaurant: {name: 'Our Awesome Restaurant', yearsOpen: 1},
  newItem: null,
  menuLenght: Ember.computed.alias('model.length'),
  avaiableItems: Ember.computed.filterBy('model', 'isAvailable', true),
  actions: {
    saveNewItem(){
      this.store.createRecord('food',{
        isAvailable: false,
        name: this.get('newItem')
      }).save();
      this.set('newItem', '');
    },
    toggleAvailability(food){
      //Javascript method
      food.set('isAvailable', !food.get('isAvailable'));
      food.save();
    }
  }
});
