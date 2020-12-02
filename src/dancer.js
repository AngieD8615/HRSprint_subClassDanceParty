// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this._timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.left = left;
  this.top = top;
  // this.$node = $('<img src = "https://media.giphy.com/media/YWISTXGQ5eg9wbmOH6/giphy.gif">').addClass('dancer');

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);

};

Dancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step

  // requires extra clock tick (keep spec as is)
  // setTimeout(this.step.bind(this), this._timeBetweenSteps);

  // or does not require the clock tick  (remove tick from spec)
  let context = this;
  setTimeout(()=> {
    context.step();
  }, this._timeBetweenSteps);


};

Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function() {
  this.setPosition(this.left, this.left);
};
