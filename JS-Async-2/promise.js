// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Got the user');
//         reject(new Error('User not logged in'));
//         resolve({ user: "mohammad" });
//     }, 2000)
// });

// promise
//     .then(user => {
//         console.log(user);
//     })
//     .catch(error => {
//         console.log(error.message);
//     })

// let us refactor the callback hell in app.js

console.log('start');

function loginUser(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('now we have the user');
            resolve({ userEmail: email, userPassword: password });
        }, 3000)
    })
}

function getUserVideos(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('now we have the video');
            resolve(['video1', 'video2', 'video3']);
        }, 2000)
    })
}

function getVideoDetails(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('now we have the video detail');
            resolve('title of the video');
        }, 2000)
    })
}

// loginUser('email@email.com', 1234)
//     .then(user => getUserVideos(user.email))
//     .then(videos => getVideoDetails(videos[0]))
//     .then(detail => console.log(detail))

// here each promise is waiting the previous promise to finish in ordered to be fired of
// solution use Promise.all

// const yt = new Promise(resolve => setTimeout(() => {
//     console.log('Getting stuff from youtube');
//     resolve({ videos: [1, 2, 3, 4] });
// }, 2000))

// const fb = new Promise(resolve => setTimeout(() => {
//     console.log('Getting stuff from facebook');
//     resolve({ users: ["user1", "user2"] });
// }, 4000))

// Promise.all([yt, fb])
//     .then(result => console.log(result))

// A more beautified way to do it is this async/await
async function displayUser() {
    try {
        const loggedUser = await loginUser('email', 123)
        const videos = await getUserVideos(loggedUser.userEmail)
        const detail = await getVideoDetails(videos[0]);
        console.log(detail);
    }
    catch (err) {
        console.log(err.message);
    }
}

displayUser();

console.log('end');