// `filterFamilyMembers` accepts two arguments, a family tree object, and a truth test. `filterFamilyMembers` 
// returns an array, in any order, of the full names of family members who pass the passed in truth test.
// You will need to use recursion in your solution in order to handle nested family trees.
//
//in: 2 obj, test
// out: array
//
// A family member looks like this:
//
// {
//   firstName: 'Fred'
//   lastName: 'Zirdung'
//   location: 'San Francsico'
//   children: [/* ... */]
// }
//
// EXAMPLE:

var familyTree = {'firstName': 'Beth','lastName': 'Johnson','location': 'San Francisco','children': [{'firstName': 'Beth Jr.','lastName': 'Johnson',
      'location': 'Berkeley',
      'children': [
        {
          'firstName': 'Smitty',
          'lastName': 'Won',
          'location': 'Beijing',
          'children': []
        }
      ]
    },
    {
      'firstName': 'Joshie',
      'lastName': 'Wyattson',
      'location': 'Berkeley',
      'children': []
    }
  ]
};
//
// var livesInBerkeley = function (familyMember) {
//   return familyMember.location === 'Berkeley';
// }
//
// filterFamilyMembers(familyTree, livesInBerkeley)
//
// returns ['Beth Jr. Johnson', 'Joshie Wyattson'];

//console.log(familyTree.children);

var truthTest = function(member){
	//var arr = [];
	//console.log(member);
	
	for(var key in member){

	}
    if(typeof member=== 'object'){
    	//console.log('hi')
    	truthTest(member.children);
    }


	return member.location === 'Berkeley';
};

var filterFamilyMembers = function (familyTree, truthTest) {
  // All your code in this function body

  // return familyTree.filter(function(el){
  // 	console.log(el);
  // 	return truthTest(el);
  // });
	for(var key in familyTree){

	var arr = [];
	if(key==='children'){
				console.log(familyTree[key]);

	if(truthTest(familyTree[key])){

		arr.push(familyTree[key].firstName)
		
	}
}
}
	return arr;
};
console.log(filterFamilyMembers(familyTree, truthTest));
