import faker from 'faker';

const DEFAULT_USER = {
  id: faker.random.uuid,
  firstName: faker.name.firstName,
  lastName: faker.name.lastName,
  userName: faker.name.userName,
  imageUrl: faker.internet.avatar,
  email: faker.internet.email,
};

export default DEFAULT_USER;
