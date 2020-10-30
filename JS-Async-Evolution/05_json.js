function getTodos(callback) {
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
  
  request.open('GET', 'https://jsonplaceholder.typicode.com/todos/?_limit=10')
  request.send();
}
console.log('start')

getTodos((error, data) => {
  // console.log(error, data)
  if(error) console.log(error)
  else console.log(data);
})

console.log('finish')
