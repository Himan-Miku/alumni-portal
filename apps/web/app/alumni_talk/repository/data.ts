import axios from 'axios';

const API_KEY = 'AIzaSyBwGzaoE-eBHuiy7b2KSLFDLs7E3ZKGzBQ';
const API_URL = 'https://www.googleapis.com/youtube/v3/search';
const CHANNEL_ID = 'UC4Pc9V7-QjsJZKkUS8I0iqw';


export const fetchYoutubeData = async (pageToken : string ) => {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
        part: 'snippet,id',
        channelId: CHANNEL_ID,
        maxResults: 9,
        order: 'date',
        key: API_KEY,
        pageToken: ''
        },
    });
    return response.data;
}