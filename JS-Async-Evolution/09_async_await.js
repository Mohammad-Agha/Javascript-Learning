const getData = async (type) => {
  const response = await fetch(type)
  const data = await response.json()
  return data
}

const main = async () => {
  try {
    const credentials = await getData('person/credentials.json')
    console.log(credentials)
    
    const videos = await getData('person/videos.json')
    console.log(videos)
    
    const photos = await getData('person/photos.json') 
    console.log(photos)
  } catch (error) {
    console.log(error);
  }
  
}

main()



// Alernative way
// (async () => {
//   try {
//     const credentials = await getData('person/credentials.json')
//     console.log(credentials)
    
//     const videos = await getData('person/videos.json')
//     console.log(videos)
    
//     const photos = await getData('person/photos.json') 
//     console.log(photos)
    
//   } catch (error) {
//     console.log(error);
//   }
// })()