
var Dispatcher = require('./Dispatcher.jsx');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var dataText = "Test A";

// These are the parameters that should be
// Easily accessible to React components in every state.
var sessionState = {
  'isLoading': false,
  'origin': null,
  'destination': null
};

var ScenicStore = assign({}, EventEmitter.prototype, {
  /**
   * Get the entire collection of TODOs.
   * @return {object}
   */
  getData: function() {
    return dataText;
  },
  getSessionState: function(){
    return sessionState;
  },
  emitChange: function() {
    console.log("Change Emitted");
    this.emit(CHANGE_EVENT);
  },
  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

Dispatcher.register(function(payload) {   
    console.log(payload.actionType) ;
    var action = payload.actionType;
    switch(payload.actionType) {
      case 'test':
        console.log("Change Sent");
        dataText = "Test B";
        ScenicStore.emitChange();
        break;
      case 'isLoading':
        console.log("isLoading Store is now", payload.isLoading)
        sessionState.isLoading = payload.isLoading;
        ScenicStore.emitChange();
      break;
      // add more cases for other actionTypes, like TODO_UPDATE, etc.
    }

    return true; // No errors. Needed by promise in Dispatcher.
});


module.exports = ScenicStore;