// We will mimic a call to a server with setTimeout()
const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' }
]

function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`
    });
    document.body.innerHTML = output;
  }, 2000)
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;
      // const error = true;
      error ? reject('Error: something went wrong') : resolve()
    }, 3000)
  });
}

// createPost({ title: 'New post', body: 'This is a new post' })
//   .then(getPosts)
//   .catch(error => console.log(error));


// async/await
// async function init() {
//   await createPost({ title: 'New post', body: 'This is a new post' });
//   getPosts();
// }
// init();

// async/await with fetch api
async function fetchUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json();
  console.log(data);
}

fetchUsers();

// promise.all

// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Goodbye'))
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json())

// // The time to finish depends on the max time needed by each promise to finish
// Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values))