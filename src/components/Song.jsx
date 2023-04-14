import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Song = ({ song }) => {
  return (
    <>
      <Link to="/album_page.html?id=">
        <Image fluid src={song.album.cover_medium} alt="1" />
      </Link>
      <p>
        <Link to="/album_page.html?id=songInfo.album.id">
          Album: {song.album.title} <br />
        </Link>
        <Link to="/artist_page.html?id=songInfo.artist.id">Artist: {song.artist.name}</Link>
      </p>
    </>
  );
};

export default Song;
