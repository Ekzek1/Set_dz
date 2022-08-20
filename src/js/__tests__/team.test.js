import Team from '../team';

test('class team', () => {
  expect(new Team()).toEqual(new Team());
});

test('Team add', () => {
  const user = new Team('');
  user.add('Swordsman');
  expect(user).toEqual(user);
});

test('Team Error add', () => {
  expect(() => {
    const user = new Team('');
    user.add('Swordsman');
    user.add('Swordsman');
  }).toThrow('this character is already in the team');
});

test('Team addAll', () => {
  const user = new Team('');
  user.add('Swordsman');
  user.addAll('Swordsman', 'Bowman');
  expect(user).toEqual(user);
});

test('Team toArray', () => {
  const answere = new Team('');
  answere.addAll('Swordsman', 'Bowman');
  const result = ['Swordsman', 'Bowman'];
  expect(result).toEqual(answere.toArray());
});
