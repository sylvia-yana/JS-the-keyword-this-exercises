var computer = {
  name: 'HAL 9000',
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
computer.condescend();

// How would we modify the .condescend method to achieve the expected output?
