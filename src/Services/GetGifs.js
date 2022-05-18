const apiKey = 'fVjvHkTWUFlHHm6e1IDBsF23Hjjl2cnN'

export default function getGifs({ keyword = 'morty' } = {}) {
    
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=G&lang=en`

    const destructuring = (data) => {
        return data.map(image => {
            const { images, title, id } = image
            const { url } = images.downsized_medium
            return { title, id, url }
        })
    }

    return fetch(apiURL)
        .then(res => res.json())
        .then(response => {
            const { data = [] } = response
            if (Array.isArray(data)) {
                return destructuring(data)
            }
        })
}