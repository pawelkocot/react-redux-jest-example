const users = [
  {
    id: 1,
    email: 'sincere@april.biz'
  },
  {
    id: 2,
    email: 'shanna@melissa.tv'
  }
];

export default () => new Promise((resolve) => {
  resolve(users);
});