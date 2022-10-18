export function play_video() {
    window.addEventListener('DOMContentLoaded', function () {
        var video = this.document.querySelector('.main__fichi-video');

        video.addEventListener('click', function () {
            if (video.classList.contains('main__fichi-ready')) {
                return;
            }

            video.classList.add('main__fichi-ready');
            var src = video.dataset.src;

            video.insertAdjacentHTML('afterbegin', '<iframe class="main__fichi-video-frame" src="' + src + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"allowfullscreen></iframe>');
        });
    });
}