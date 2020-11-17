import Person from '../src/index';

test('Person must have a name', () => {
    const person1 = new Person('Jeff');
    expect(person1.name).toEqual('Jeff');
});
