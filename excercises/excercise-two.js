var mentor = 'Zach';

var foo = {
  mentor: 'Sunny',
  bar: {
    mentor: 'Beth',
    getMentor: function() {
      console.log(this.mentor);
    }
  }
};

var findMentor = foo.bar.getMentor;

foo.bar.getMentor();
findMentor();
