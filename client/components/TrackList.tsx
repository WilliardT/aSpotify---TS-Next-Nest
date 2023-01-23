import React from 'react';
import { Itrack } from 'types/track';
import { Grid, Box } from '@mui/material';

interface TrackListProps {
  tracks: Itrack[]
}

const TrackList: React.FC<TrackListProps> = ({tracks:[]}) => {
  return (
    <Grid container direction="column">
      <Box p={2}>
        {tracks.map(track => 
            <TrackItem 
              key={track._id}
              track={track}
            />
        )}
      </Box>
    </Grid>
  )
}

export default TrackList;