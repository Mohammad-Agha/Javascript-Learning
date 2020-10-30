// fetch('person/credentials.json')
// .then(response => {
//   console.log('resolve', response)
//   return response.json()
// })
// .then(data => console.log(data))
// .catch(err => console.log('reject', err))

const getData = (type) => {
  return fetch(type)
  .then(response => response.json())
  .then(data => data)
}

getData('person/credentials.json')
.then(data => {
  console.log(data)
  return getData('person/videos.json')
}) 
.then(data => {
  console.log(data)
  return getData('person/photos.json') 
})
.then(data => console.log(data))
.catch(error => console.log(error))
