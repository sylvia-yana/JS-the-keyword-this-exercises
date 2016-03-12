var computer = {
  name: 'HAL',
  owner: 'Dave',
  condescend: function() {
    console.log('Processing...');
    setTimeout(function() {
      console.log('I\'m sorry, ' + this.owner + ', I can\'t let you do that.');
    }, 1000);
  }
};

// What would the following log?
// What binding pattern causes this?
// How would we modify the .condescend method to achieve the desired output?
computer.condescend();
