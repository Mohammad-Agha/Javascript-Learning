// const getData = () => {
//   return new Promise((resolve, reject) => {
//     const error = true
//     // const error = false
//     error ? resolve('fetched data') : reject('error')
//   })
// }

// getData()
// .then(data => console.log(data))
// .catch(err => console.log(err))

function getData(resource) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()
    request.addEventListener('readystatechange', () => {
      if(request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText)
        resolve(data)
      }
      else if(request.readyState === 4) {
        reject('Could not fetch data')
      }
    })
    
    request.open('GET', resource)
    request.send();
  })
  
}
console.log('start')

getData('person/credentials.json')
.then(data => {
  console.log('Got the credentials', data)
  return getData('person/videos.json')
})
.then(data => {
  console.log('Got the vidoes', data)
  return getData('person/photos.json')
})
.then(data => console.log('Got the photos', data))
.catch(error => console.log(error))

console.log('finish')
