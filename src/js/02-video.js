import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const TIME = 'videoplayer-current-time';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

try {
  const playbackTime = Number(localStorage.getItem(TIME))
  player.setCurrentTime(playbackTime)  
} catch (error) {
  console.log(error.name)
}

function onPlay(data){
  const currentTime = data.seconds
  localStorage.setItem(TIME, currentTime)
}




// player.setCurrentTime(savedTime).then(function(seconds) {
//   // seconds = Number(localStorage.getItem(TIME))
//   console.log(seconds)
//   // seconds = the actual time that the player seeked to
// }).catch(function(error) {
//   switch (error.name) {
//       case 'RangeError':
//         !seconds           
//          // the time was less than 0 or greater than the video’s duration
//           break;
//       default:
//         seconds === 0
//           // some other error occurred
//           break;
//   }
// });

