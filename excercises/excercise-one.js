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

computer.condescend();
