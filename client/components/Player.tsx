import { Pause, PlayArrow, VolumeUp } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';
import styles from '../styles/Player.module.scss';
import TrackProgress from './TrackProgress';

const Player = () => {

  const track: Itrack = {_id: '1', name: "track1", artist: "artist", text: 'text', listens: 5, audio: "", picture: "", comments: []}

  const active = false;

  return (
    <div className={styles.player}>
      <IconButton onClick={e => e.stopPropagation()}>
        {!active ? <Pause/> : <PlayArrow/>}
      </IconButton>
      <Grid container direction="column" style={{width: 200, margin: '0 20px'}} >
        <div>{track.name}</div>
        <div style={{fontSize: 12, color: 'grey'}}>{track.artist}</div>
      </Grid>
      <TrackProgress left={0} right={100} onChange={() => ({})} />
      <VolumeUp style={{marginLeft: 'auto'}} />
      <TrackProgress left={0} right={100} onChange={() => ({})} />
    </div>
  )
}

export default Player