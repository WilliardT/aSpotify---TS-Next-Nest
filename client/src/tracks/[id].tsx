import MainLayout from 'layouts/MainLayout';
import { useRouter } from 'next/router';
import React from 'react';
import { Itrack } from 'types/track';

const TrackPage = () => {

  const track: Itrack = {_id: '1', name: "track1", artist: "artist", text: 'text', listens: 5, audio: "", picture: "", comments: []}
  const router = useRouter();

  return (
    <MainLayout>
      <Button
        variant={"outlined"}
        style={{fontSize: 32}}
        onClick={() => router.push('/tracks')}
        >
          К списку
      </Button>
      <Grid container style={{margin: '20px 0'}}>
        <img src={track.picture} width={200} height={200}/>
        <div style={{marginLeft: 30}}>
          <h1>Название трека - {track.name}</h1>
          <h1>Артист - {track.artist}</h1>
          <h1>Прослушиваний - {track.listens}</h1>
        </div>
      </Grid>
      <h1>Слова к треку:</h1>
      <p>{track.text}</p>
      <h1>Комментарий</h1>
      <Grid container>
        <TextField 
          label="Ваше имя"
          fullWidth
        />
        <TextField 
          label="Коментарий"
          fullWidth
          multiline
          rows={4}
        />
        <Button>отправить</Button>
      </Grid>
      <div>
        {track.comments.map(comment => 
          <div>
            <div>Автор: {comment.username}</div>
            <div>Комментарий {comment.text}</div>
          </div>
        )}
      </div>
    </MainLayout>
  )
}

export default TrackPage;
