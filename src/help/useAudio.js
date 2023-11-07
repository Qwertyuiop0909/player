export const useAudio = () => {
  const $audio = document.getElementById('audio')
  const $play = document.getElementById('play')
  const $logo = document.getElementById('logo')
  const $progress = document.getElementById('progress')
  const $progressContainer = document.getElementById('progress_container')

  const playSong = () => {
    if ($play.classList.contains('play')) {
      $play.classList.remove('play')
      $logo.classList.remove('active')
      $audio.pause()
    } else {
      $play.classList.add('play')
      $logo.classList.add('active')
      $audio.play()
    }
  }

  const updateVolume = (e) => {
    $audio.volume = +e.target.value / 100
  }

  const updateProgress = (e) => {
    const { duration, currentTime } = e.srcElement
    $progress.style.width = `${(currentTime * 100) / duration}%`
  }

  $audio.addEventListener('timeupdate', updateProgress)

  const setProgress = (e) => {
    $progress.style.width = `${(e.offsetX * 100) / 320}%`
    $audio.currentTime = (e.offsetX / 320) * $audio.duration
  }

  $progressContainer.addEventListener('click', setProgress)

  const resetAudio = () => {
    $play.classList.remove('play')
    $logo.classList.remove('active')
    $audio.pause()
    $progress.style.width = '0'
  }

  return {
    playSong,
    updateVolume,
    resetAudio,
  }
}
