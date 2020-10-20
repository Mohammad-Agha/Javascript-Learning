// We will mimic a call to a server with setTimeout()
const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' }
]

function getPosts() {
  console.log('Get posts started');
  setTimeout(() => {
    let output = '';
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`
    });
    document.body.innerHTML = output;
    console.log('Get posts finished');
  }, 2000)
}
// the new post isn't getting printed to the screen because creating a post takes more time than getting the posts, what we can do is use a callback function
function createPost(post, callback) {
  console.log('Create post started');
  setTimeout(() => {
    posts.push(post);
    console.log('Create post finished');
    callback();
  }, 5000)
}

// getPosts();

// createPost({ title: 'New post', body: 'This is a new post' });
createPost({ title: 'New post', body: 'This is a new post' }, getPosts);

