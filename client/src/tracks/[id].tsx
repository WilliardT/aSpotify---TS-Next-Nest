import { Button, Grid, TextField } from "@mui/material";
import MainLayout from "layouts/MainLayout";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import axios from "axios";
import { useInput } from "hooks/useInput";
import { Itrack } from "types/track";

const TrackPage = ({ serverTrack }) => {
  const [track, setTrack] = useState<Itrack>(serverTrack);
  const router = useRouter();
  const username = useInput("");
  const text = useInput("");

  const addComment = async () => {
    try {
      const responce = await axios.post(
        "http://localhost:5000/tracks/comment",
        {
          username: username.value,
          text: text.value,
          trackId: track._id,
        }
        setTrack({...track, comments: [...track.comments, responce.data]})
      );
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <MainLayout 
      title={"Музыкальная площадка" + track.name + " - " +  track.artist}
      keywords={`Музыка, артисты` + track.name + ", " + track.artist}
    >
      <Button
        variant={"outlined"}
        style={{ fontSize: 32 }}
        onClick={() => router.push("/tracks")}
      >
        К списку
      </Button>
      <Grid container style={{ margin: "20px 0" }}>
        <img
          src={"http://localhost:5000/" + track.picture}
          width={200}
          height={200}
        />
        <div style={{ marginLeft: 30 }}>
          <h1>Название трека - {track.name}</h1>
          <h1>Артист - {track.artist}</h1>
          <h1>Прослушиваний - {track.listens}</h1>
        </div>
      </Grid>
      <h1>Слова к треку:</h1>
      <p>{track.text}</p>
      <h1>Комментарий</h1>
      <Grid container>
        <TextField {...username} label="Ваше имя" fullWidth />
        <TextField {...text} label="Коментарий" fullWidth multiline rows={4} />
        <Button onClick={addComment}>отправить</Button>
      </Grid>
      <div>
        {track.comments.map((comment) => (
          <div>
            <div>Автор: {comment.username}</div>
            <div>Комментарий {comment.text}</div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default TrackPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const responce = await axios.get("http://localhost:5000/tracks/" + params.id);
  return {
    props: {
      serverTrack: responce.data,
    },
  };
};
