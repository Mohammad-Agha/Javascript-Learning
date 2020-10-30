function getData(resource, callback) {
  const request = new XMLHttpRequest()
  request.addEventListener('readystatechange', () => {
    if(request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText)
      callback(undefined, data)
    }
    else if(request.readyState === 4) {
      callback('Could not fetch the data', undefined)
    }
  })
  
  request.open('GET', resource)
  request.send();
}
console.log('start')

getData('person/credentials.json', (error, data) => {
  if(error) {
    console.log(error)
  }
  else {
    console.log(data);
    getData('person/videos.json', (error, data) => {
      if(error) {
        console.log(error)
      }
      else {
        console.log(data);
        getData('person/photos.json', (error, data) => {
          if(error) {
            console.log(error)
          }
          else {
            console.log(data);
          }
        })
      }
    })
  }
})

console.log('finish')
