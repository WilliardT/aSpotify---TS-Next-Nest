import MainLayout from 'layouts/MainLayout';
import React from 'react';
import {Grid, Card, Button, Box} from '@mui/material';
import { useRouter } from 'next/router';
import TrackList from 'components/TrackList';
import { Itrack } from 'types/track';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { useAction } from 'hooks/useAction';
import { wrapper } from 'store';
import { fetchTracks } from 'store/action-creators/track';

const Index = () => {
  const router = useRouter();
  const {tracks, error} = useTypedSelector(state => state.track)

  if (error) {
    return <MainLayout>
      <h2>{error}</h2>
    </MainLayout>
  }

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

export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
  store.dispatch(fetchTracks())
})