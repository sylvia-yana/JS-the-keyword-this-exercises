var eighthFloorCounselor = {
  name: 'Pamela',
  say: function(phrase) {
    console.log(this.name + ' says: ' + phrase);
  }
};

var sixthFloorCounselor = {
  name: 'Tara'
};

eighthFloorCounselor.say('Unicornado!');
eighthFloorCounselor.say('Velociraptacular!');
