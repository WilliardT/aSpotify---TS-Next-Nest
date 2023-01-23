import MainLayout from 'layouts/MainLayout';
import React from 'react';
import {Grid, Card, Button, Box} from '@mui/material';
import { useRouter } from 'next/router';
import TrackList from 'components/TrackList';
import { Itrack } from 'types/track';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { useAction } from 'hooks/useAction';

const Index = () => {
  const router = useRouter();
  const {track, error} = useTypedSelector(state => state.track)
  const {} = useAction()
  const tracks: Itrack[] = [
    {_id: '1', name: "track1", artist: "artist", text: 'text', listens: 5, audio: "", picture: "", comments: []},
    {_id: '2', name: "track1", artist: "artist", text: 'text', listens: 5, audio: "", picture: "", comments: []},
    {_id: '3', name: "track1", artist: "artist", text: 'text', listens: 5, audio: "", picture: "", comments: []},
  ]

  return (
    <MainLayout>
      <Grid container justifyContent='center'>
        <Card style={{width: 900}}>
          <Box>
            <Grid container justifyContent='space-between'>
              <h1>Список треков</h1>
              <Button onClick={() => router.push('/tracks/create')} >
                загрузить
              </Button>
            </Grid>
          </Box>
          <TrackList tracks={tracks} />
        </Card>
      </Grid>
    </MainLayout>
  )
}

export default Index;