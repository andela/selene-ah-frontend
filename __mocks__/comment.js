import faker from 'faker';

const DEFAULT_COMMENT = {
  id: faker.random.uuid,
  content: faker.random.word,
  createdAt: faker.date.recent(),
  updatedAt: faker.date.recent(),
  articleId: faker.random.uuid,
  author: {
    userName: faker.name.userName,
    imageUrl: faker.internet.avatar,
    bio: faker.random.word,
  },
};

export default DEFAULT_COMMENT;
