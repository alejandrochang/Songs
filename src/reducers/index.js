import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    {title: 'No Scrubs', duratin: '4:05'},
    {title: 'Macarena', duratin: '2:30'},
    {title: 'All-Star', duratin: '3:15'},
    {title: 'I want it that way', duratin: '1:45'}
  ];
};

const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});


