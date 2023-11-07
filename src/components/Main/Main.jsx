/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/media-has-caption */
import { useEffect, useState } from 'react'
import './main.scss'
import { Data } from '../../data'
import { useAudio } from '../../help/useAudio'

export const Main = () => {
  const [audio, setAudio] = useState(0)

  const nextRecord = () => {
    if (audio === Data.length - 1) setAudio(0)
    else setAudio((prev) => prev + 1)
  }

  const backRecord = () => {
    if (audio === 0) setAudio(Data.length - 1)
    else setAudio((prev) => prev - 1)
  }

  let playSong
  let updateVolume
  let resetAudio

  useEffect(() => {
    const obj = useAudio()
    playSong = obj.playSong
    updateVolume = obj.updateVolume
    resetAudio = obj.resetAudio
    return () => resetAudio()
  }, [audio])

  return (
    <div className="main__wrapper">
      <div className="main__container">

        <div className="main__buttons">
          <button type="button" id="back" onClick={() => backRecord()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="30" viewBox="0 0 32 30" fill="none">
              <path d="M17.3335 19.0984L25.4624 24.5433C27.1991 25.6386 29.3332 24.213 29.3332 21.9577V18.8156M17.3335 11.2079L25.4624 5.76293C27.1991 4.66764 29.3332 6.09323 29.3332 8.34856V13.9323" stroke="#253053" strokeWidth="2" strokeLinecap="round" />
              <path d="M8.84019 9.91368L13.7852 6.93669C15.377 5.97832 17.3334 7.22572 17.3334 9.19913V21.1071C17.3334 23.0805 15.377 24.3279 13.7852 23.3696L3.89522 17.4156C2.25726 16.4295 2.25726 13.8767 3.89523 12.8907L5.13147 12.1464" stroke="#253053" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <button type="button" id="play" onClick={() => playSong()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="49" viewBox="0 0 48 49" fill="none">
              <path d="M38.2828 10.2C41.8194 13.8075 44 18.7491 44 24.2C44 29.7156 41.7672 34.7098 38.1564 38.328M10 38.483C6.29728 34.853 4 29.7948 4 24.2C4 18.67 6.24444 13.6641 9.87206 10.0437" stroke="#253053" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M32.5698 16.2879C34.6916 18.3175 36 21.0976 36 24.1644C36 27.2676 34.6604 30.0772 32.4938 32.1128M15.6 32.2C13.3784 30.1578 12 27.312 12 24.1644C12 21.0532 13.3467 18.2368 15.5232 16.2" stroke="#253053" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M27.3126 21.1022C29.1042 22.4176 30 23.0752 30 24.2C30 25.3248 29.1042 25.9824 27.3126 27.2978C26.8182 27.6608 26.3276 28.0028 25.8768 28.2876C25.4814 28.5376 25.0336 28.796 24.5698 29.0498C22.7826 30.028 21.8888 30.5172 21.0874 29.9756C20.2858 29.434 20.213 28.3004 20.0674 26.0332C20.0262 25.392 20 24.7634 20 24.2C20 23.6366 20.0262 23.008 20.0674 22.3668C20.213 20.0995 20.2858 18.9659 21.0874 18.4244C21.8888 17.8829 22.7826 18.372 24.5698 19.3502C25.0336 19.6039 25.4814 19.8624 25.8768 20.1124C26.3276 20.3972 26.8182 20.7392 27.3126 21.1022Z" stroke="#253053" strokeWidth="2" />
            </svg>

          </button>
          <button type="button" id="next" onClick={() => nextRecord()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
              <path d="M14.6665 12.2599L6.53757 6.31328C4.8009 5.11701 2.66677 6.67395 2.66677 9.13715V12.5687M14.6665 20.8775L6.53757 26.8242C4.8009 28.0205 2.66677 26.4635 2.66677 24.0003L2.66677 17.9021" stroke="#253053" strokeWidth="2" strokeLinecap="round" />
              <path d="M23.1598 22.291L18.2148 25.5423C16.623 26.589 14.6666 25.2266 14.6666 23.0714L14.6666 10.0661C14.6666 7.91087 16.623 6.54847 18.2148 7.59514L28.1048 14.0978C29.7427 15.1747 29.7427 17.9627 28.1048 19.0397L26.8685 19.8525" stroke="#253053" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="main__controls">
          <div className="main__volume">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15.5001 11.9998C15.5001 12.5317 15.4647 13.4879 15.4128 14.6052C15.2726 17.6226 15.2025 19.1313 14.2798 19.7797C14.1029 19.9041 13.9048 20.0049 13.7001 20.0747C12.7327 20.4048 11.5976 19.747 9.50009 18.3725M7.01629 17.0417C6.76828 16.9998 6.51225 16.9998 6.00018 16.9998C4.62626 16.9998 3.9393 16.9998 3.33997 16.7225C2.79239 16.4692 2.24482 15.9539 1.95863 15.4228C1.6454 14.8414 1.60856 14.237 1.53488 13.0282C1.52396 12.849 1.51525 12.6722 1.50928 12.4998M1.95863 8.57679C2.24482 8.04563 2.79239 7.53042 3.33997 7.27707C3.9393 6.99979 4.62626 6.99979 6.00018 6.99979C6.51225 6.99979 6.76828 6.99979 7.01629 6.95791C7.26147 6.9165 7.50056 6.84478 7.72804 6.74438C7.95815 6.64283 8.1719 6.50189 8.59941 6.22002L8.81835 6.07566C11.3613 4.39898 12.6328 3.56063 13.7001 3.92487C13.9048 3.9947 14.1029 4.09551 14.2798 4.21984C15.1151 4.80685 15.2517 6.09882 15.3741 8.57679" stroke="#253053" strokeLinecap="round" />
              <path d="M20 18C20 18 21.5 16.2 21.5 12C21.5 9.56658 20.9965 7.93882 20.5729 7" stroke="#253053" strokeLinecap="round" />
              <path d="M18 15C18 15 18.5 14.1 18.5 12C18.5 11.1381 18.4158 10.4784 18.3165 10" stroke="#253053" strokeLinecap="round" />
              <path d="M22 2L2 22" stroke="#253053" strokeLinecap="round" />
            </svg>
            <input id="volume" type="range" min={0} max={100} onClick={(e) => updateVolume(e)} />
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 22 18" fill="none">
              <path d="M19.4907 3.15918C19.4907 3.15918 20.9907 4.95918 20.9907 9.15918C20.9907 13.3592 19.4907 15.1592 19.4907 15.1592" stroke="#253053" strokeLinecap="round" />
              <path d="M17.4907 6.15918C17.4907 6.15918 17.9907 7.05918 17.9907 9.15918C17.9907 11.2592 17.4907 12.1592 17.4907 12.1592" stroke="#253053" strokeLinecap="round" />
              <path d="M1.44935 5.73597C1.73554 5.20481 2.28311 4.6896 2.83069 4.43625C3.43002 4.15897 4.11698 4.15897 5.4909 4.15897C6.00297 4.15897 6.259 4.15897 6.50701 4.11709C6.75219 4.07568 6.99128 4.00396 7.21876 3.90356C7.44887 3.80201 7.66262 3.66107 8.09013 3.3792L8.30907 3.23484C10.852 1.55816 12.1235 0.719811 13.1908 1.08405C13.3955 1.15388 13.5936 1.25469 13.7705 1.37902C14.6932 2.02747 14.7633 3.53617 14.9035 6.55358C14.9554 7.67088 14.9908 8.62708 14.9908 9.15898C14.9908 9.69088 14.9554 10.6471 14.9035 11.7644C14.7633 14.7818 14.6932 16.2905 13.7705 16.9389C13.5936 17.0633 13.3955 17.1641 13.1908 17.2339C12.1235 17.5981 10.852 16.7598 8.30906 15.0831L8.09013 14.9388C7.66262 14.6569 7.44887 14.5159 7.21876 14.4144C6.99128 14.314 6.75219 14.2423 6.50701 14.2009C6.259 14.159 6.00297 14.159 5.4909 14.159C4.11698 14.159 3.43002 14.159 2.83069 13.8817C2.28311 13.6284 1.73554 13.1131 1.44935 12.582C1.13612 12.0006 1.09928 11.3962 1.0256 10.1874C1.01468 10.0082 1.00597 9.83138 1 9.65898" stroke="#253053" strokeLinecap="round" />
            </svg>
          </div>

          <p>{Data[audio].name}</p>
          <div id="progress_container" className="main__progress-container">
            <div id="progress" />
          </div>
        </div>
        <img id="logo" className="main__logo-img" src={Data[audio].logo} alt="musiclogo" />
        <audio id="audio" src={Data[audio].record} />
      </div>
    </div>
  )
}
