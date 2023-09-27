import TestModule from "./Test.js";
const Test = new TestModule();

/**
     Ungroup Data in an Object
    You volunteered to help out teaching a preschool in your area!
    You were given an array of all students and some important data about them, grouped by their teacher.
    Create a function that will ungroup every student so you can look at their details individually.

    Example
    ungroupStudents([{
    teacher: "Ms. Car",
    data: [{
        name: "James",
        emergenceNumber: "617-771-1082",
    }, {
        name: "Alice",
        alergies: ["nuts", "carrots"],
    }],
    }, {
    teacher: "Mr. Lamb",
    data: [{
        name: "Aaron",
        age: 3
    }]
    }]) ➞ [{
    teacher: "Ms. Car",
    name: "James",
    emergencyNumber: "617-771-1082",
    }, {
    teacher: "Ms. Car",
    name: "Alice",
    alergies: ["nuts", "carrots"],
    }, {
    teacher: "Mr. Lamb",
    name: "Aaron",
    age: 3,
    }]
 */

function ungroupStudents(students) {
  let result = [];

  Object.entries(students).forEach((entry) => {
    const [key, { teacher, data }] = entry;
    if (Array.isArray(data)) {
      data.map((d) => {
        result.push({ teacher: teacher, ...d });
      });
    } else {
      result.push({ teacher: teacher, ...data });
    }
  });

  return result;
}

Test.assertSimilar(
  ungroupStudents([
    {
      teacher: "Ms. Car",
      data: [
        {
          name: "James",
          emergencyNumber: "617-771-1082",
        },
        {
          name: "Alice",
          alergies: ["nuts", "carrots"],
        },
      ],
    },
    {
      teacher: "Mr. Lamb",
      data: [
        {
          name: "Aaron",
          age: 3,
        },
      ],
    },
  ]),
  [
    {
      teacher: "Ms. Car",
      name: "James",
      emergencyNumber: "617-771-1082",
    },
    {
      teacher: "Ms. Car",
      name: "Alice",
      alergies: ["nuts", "carrots"],
    },
    {
      teacher: "Mr. Lamb",
      name: "Aaron",
      age: 3,
    },
  ]
);

Test.assertSimilar(
  ungroupStudents([
    {
      teacher: "Ms. Sherman",
      data: [
        {
          name: "Carmen",
          feildTripConsentSlipSigned: false,
        },
      ],
    },
    {
      teacher: "Mr. Shoe",
      data: [
        {
          name: "Braden",
          favoriteBook: "Where the Wild Things Are",
        },
        {
          name: "Angelo",
          playsSports: true,
        },
      ],
    },
  ]),
  [
    {
      teacher: "Ms. Sherman",
      name: "Carmen",
      feildTripConsentSlipSigned: false,
    },
    {
      teacher: "Mr. Shoe",
      name: "Braden",
      favoriteBook: "Where the Wild Things Are",
    },
    {
      teacher: "Mr. Shoe",
      name: "Angelo",
      playsSports: true,
    },
  ]
);

/**
     Splitting Objects Inside an Array
    You bought a few bunches of fruit over the weekend. 
    Create a function that splits a bunch into singular objects inside an array.

    Examples
    splitBunches([
    { name: "grapes", quantity: 2 }
    ]) ➞ [
    { name: "grapes", quantity: 1 },
    { name: "grapes", quantity: 1 }
    ]

    splitBunches([
    { name: "currants", quantity: 1 },
    { name: "grapes", quantity: 2 },
    { name: "bananas", quantity: 2 }
    ]) ➞ [
    { name: "currants", quantity: 1},
    { name: "grapes", quantity: 1 },
    { name: "grapes", quantity: 1 },
    { name: "bananas", quantity: 1 },
    { name: "bananas", quantity: 1 }
    ]
 */

function splitBunches(bunches) {
  let result = [];
  bunches.forEach((bunch) => {
    const { name, quantity } = bunch;
    let qty = quantity;
    while (qty > 0) {
      result.push({ name: name, quantity: 1 });
      qty--;
    }
  });

  return result;
}

Test.assertSimilar(splitBunches([{ name: "bananas", quantity: 1 }]), [
  { name: "bananas", quantity: 1 },
]);
Test.assertSimilar(splitBunches([{ name: "bananas", quantity: 2 }]), [
  { name: "bananas", quantity: 1 },
  { name: "bananas", quantity: 1 },
]);
Test.assertSimilar(
  splitBunches([
    { name: "bananas", quantity: 2 },
    { name: "grapes", quantity: 2 },
  ]),
  [
    { name: "bananas", quantity: 1 },
    { name: "bananas", quantity: 1 },
    { name: "grapes", quantity: 1 },
    { name: "grapes", quantity: 1 },
  ]
);
Test.assertSimilar(
  splitBunches([
    { name: "cherry tomatoes", quantity: 3 },
    { name: "bananas", quantity: 1 },
    { name: "grapes", quantity: 2 },
    { name: "cherry tomatoes", quantity: 3 },
  ]),
  [
    { name: "cherry tomatoes", quantity: 1 },
    { name: "cherry tomatoes", quantity: 1 },
    { name: "cherry tomatoes", quantity: 1 },
    { name: "bananas", quantity: 1 },
    { name: "grapes", quantity: 1 },
    { name: "grapes", quantity: 1 },
    { name: "cherry tomatoes", quantity: 1 },
    { name: "cherry tomatoes", quantity: 1 },
    { name: "cherry tomatoes", quantity: 1 },
  ]
);
