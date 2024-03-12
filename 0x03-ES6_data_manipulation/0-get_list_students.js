const arrayOfObjects = [
  {
    // eslint-disable-next-line quote-props
    'id': 1, 'firstName': 'Guillaume', 'location': 'San Francisco',
  },
  {
    // eslint-disable-next-line quote-props, quotes
    'id': 2, 'firstName': 'James', 'location': "Columbia",
  },
  {
    // eslint-disable-next-line quote-props, quotes
    'id': 5, 'firstName': 'Serena', 'location': 'San Francisco',
  },
];

export default function getListStudents() {
  return (arrayOfObjects);
}
