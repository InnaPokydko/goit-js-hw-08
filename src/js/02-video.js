import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function() {
console.log('played video')
});

player.on('play', throttle(onPlay, 1000));

player.getVideoEl().then(function(data){
  console.log('data:', data);
});

// (2 var)
//  const currentTime = function (data) {
//   localStorage.setItem(
//     "videoplayer-current-time", JSON.stringify(data.seconds)
//   );
//   console.log(data);
// };

// const onPlay = player.on("timeupdate", throttle(currentTime, 1000))

// 3 var
// const iframe = document.querySelector('iframe');
// const player = new Player(iframe);

// player.on('timeupdate', throttle(onPlay, 1000));

// function onPlay({ seconds }) {
//   localStorage.setItem('videoplayer-current-time', seconds);
// }

// player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

// 4 var
// const iframe = document.querySelector('iframe');
// const player = new Player(iframe);

// function onPlay(timeupdate) {
//   localStorage.setItem('videoplayer-current-time', timeupdate);
// }

// player.on('play', throttle(onPlay, 1000));

// player
//   .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
//   .then(function (seconds) {
//     // seconds = the actual time that the player seeked to
//   })
//   .catch(function (error) {
//     switch (error.name) {
//       case 'RangeError':
//         // the time was less than 0 or greater than the video’s duration
//         break;
//       default:
//         // some other error occurred
//         break;
//     }
//   });
