// Synchronous code example

// function function1() {
//     console.log('we are in function1');
//     console.log('some code goes here');
// }

// console.log('start');

// function1();

// console.log('end');

// Asynchronous code example

// console.log('start');

// setTimeout(() => {
//     console.log('We are in the timeout');
// }, 4000)

// console.log('end');

// Using callbacks isn't necessary asynchronous

// console.log('start');

// const nums = [1, 2, 3, 4];

// nums.forEach(num => console.log(num));

// console.log('end');

// let us simulate a server response

// 1
// console.log('start');

// function loginUser(email, password) {
//     setTimeout(() => {
//         console.log('now we have the data');
//         return { userEmail: email, userPassword: password }
//     }, 1500)
// }

// const user = loginUser("email@example.com", 1234);
// console.log(user); // undefined

// console.log('end');

// 2
console.log('start');

function loginUser(email, password, callback) {
    setTimeout(() => {
        console.log('now we have the data');
        callback({ userEmail: email, userPassword: password });
    }, 3000)
}

function getUserVideos(email, callback) {
    setTimeout(() => {
        callback(['video1', 'video2', 'video3']);
    }, 2000)
}

function getVideoDetails(video, callback) {
    setTimeout(() => {
        callback('title of the video');
    }, 2000)
}

const user = loginUser("email@example.com", 123, user => {
    console.log(user);
    getUserVideos(user.email, videos => {
        console.log(videos);
        getVideoDetails(videos[0], title => {
            console.log(title);
        })
    })
});

console.log('end');