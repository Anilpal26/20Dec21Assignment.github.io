//console.log("Its Working");

var stdMarks = {
  'name': "HULK-TEAM-21",
  'instructor': {
    'name': "Vishal",
    'subject': "MERN"
  },
  'students': [{
      'name': 'Shejal',
      'marks': 89,
    },
    {
      'name': 'Vishal',
      'marks': 80,
    },
    {
      'name': 'Akshita',
      'marks': 87,
    },
    {
     'name': 'Rounak',
     'marks': 78,
    },
    {
     'name': 'Anil',
     'marks': 85,
    }
  ],
};

console.log(stdMarks.instructor.name);
console.log(stdMarks['instructor']['name']);
console.log(stdMarks.students[3].name);

