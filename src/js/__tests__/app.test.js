import healthIndication from '../app.js';

test.each([
  [{name: 'Маг', health: 90}, 'healthy'],
  [{name: 'Маг', health: 50}, 'wounded'],
  [{name: 'Маг', health: 27}, 'wounded'],
  [{name: 'Маг', health: 12}, 'critical'],
])
('testing players health function with %s person and %s expected', (person, expected) => {
  const result = healthIndication(person);
  expect(result).toBe(expected);
});

