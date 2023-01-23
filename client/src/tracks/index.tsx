import MainLayout from 'layouts/MainLayout';
import React from 'react';
import {Grid, Card, Button, Box} from '@mui/material';
import { useRouter } from 'next/router';
import TrackList from 'components/TrackList';

function index() {
  const router = useRouter();
  const tracks: ITrack[] = [
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

export default index;