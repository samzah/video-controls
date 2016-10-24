var $video = $('#the-video');
var $btn = $('#btn-play-pause');
$btn.on('click', function () {
if ($video.get(0).paused) {
$video.get(0).play();
$btn.html('Pause');
} else {
$video.get(0).pause();
$btn.html('Play');
}
});
