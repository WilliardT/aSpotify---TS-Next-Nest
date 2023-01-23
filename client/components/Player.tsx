import { Pause, PlayArrow, VolumeUp } from '@mui/icons-material';
import { Grid, IconButton } from '@mui/material';
import { useAction } from 'hooks/useAction';
import { useTypedSelector } from 'hooks/useTypedSelector';
import React, { useEffect } from 'react';
import { Itrack } from 'types/track';
import styles from '../styles/Player.module.scss';
import TrackProgress from './TrackProgress';

let audio;

const Player = () => {

  const track: Itrack = {_id: '1', name: "track1", artist: "artist", text: 'text', listens: 5, audio: "", picture: "", comments: []}
  const {
    pause, volume, active, duration, currentTime
  } = useTypedSelector(state => state.player)
  const { pauseTrack, playTrack, setVolume, setCurrentTime, setDuration, setActiveTrack } = useAction()

  useEffect(() => {
    if (!audio) {
      audio = new Audio()
      audio.src = track.audio
    }
  },[])

  const play = () => {
    if (pause) {
      playTrack()
      audio.play()
    } else {
      pauseTrack()
      audio.pause()
    }
  }

  const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(e.target.value))
  }

  return (
    <div className={styles.player}>
      <IconButton onClick={play}>
        {pause ? <Pause/> : <PlayArrow/>}
      </IconButton>
      <Grid container direction="column" style={{width: 200, margin: '0 20px'}} >
        <div>{track.name}</div>
        <div style={{fontSize: 12, color: 'grey'}}>{track.artist}</div>
      </Grid>
      <TrackProgress left={0} right={100} onChange={() => ({})} />
      <VolumeUp style={{marginLeft: 'auto'}} />
      <TrackProgress left={volume} right={100} onChange={changeVolume} />
    </div>
  )
}

export default Player