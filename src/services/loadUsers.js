export default () => fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json());

// const users = [
//   {
//     id: 1,
//     email: 'sincere@april.biz'
//   },
//   {
//     id: 2,
//     email: 'shanna@melissa.tv'
//   },
//   {
//     id: 3,
//     email: 'nathan@yesenia.net'
//   },
//   {
//     id: 4,
//     email: 'julianne.oconner@kory.org'
//   },
//   {
//     id: 5,
//     email: 'lucio_hettinger@annie.ca'
//   },
//   {
//     id: 6,
//     email: 'karley_dach@jasper.info'
//   },
//   {
//     id: 7,
//     email: 'telly.hoeger@billy.biz'
//   },
//   {
//     id: 8,
//     email: 'sherwood@rosamond.me'
//   },
//   {
//     id: 9,
//     email: 'chaim_mcdermott@dana.io'
//   },
//   {
//     id: 10,
//     email: 'rey.padberg@karina.biz'
//   }
// ];
//
// export default () => new Promise((resolve) => {
//   setTimeout(() => resolve(users), 1000);
// });