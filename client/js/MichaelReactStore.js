var CHANGE_EVENT = 'change';

var MichaelReactStore = assign({}, EventEmitter.prototype, {

    /**
    * @param {function} callback
    */

    addChangeListener: function(callback) {
  	    this.on(CHANGE_EVENT, callback);
  	}



});