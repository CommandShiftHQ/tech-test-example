import axios from 'axios';

const searchMedia = (query, includeImages, includeVideos) => {
    if(!query) {
        return Promise.resolve([]);
    }
    let mediaTypes = '';
    if(includeImages && includeVideos) {
        mediaTypes = 'image,video';
    } else if (includeImages){
        mediaTypes = 'image';
    } else {
        mediaTypes = 'video';
    }

    return axios.get('https://images-api.nasa.gov/search', {
        params: {
          q: query,
          media_type: mediaTypes
        }
      })
      .then(function (response) {
          console.log(response)
        const parsedData = response.data.collection.items.map(media => {
            const { title, description, date_created } = media.data[0];
            const { href } = media.links[0];
            
            return {title, description, date_created, href}
        })
        console.log(parsedData)
        return parsedData;
      })
      .catch(function (error) {
        console.log(error);
      })
}

export default searchMedia;