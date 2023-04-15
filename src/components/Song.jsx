import { Image } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getSelectedSong } from "../redux/actions";

const Song = ({ song }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Link to={"/"} onClick={() => dispatch(getSelectedSong(song))}>
        <Image fluid src={song.album.cover_medium} alt={song.album.title} />
      </Link>

      <p>
        <Link className="text-decoration-none" to={`/album/${song.album.id}`}>
          Album: {song.album.title} <br />
        </Link>
        <Link className="text-decoration-none" to={`/artist/${song.artist.id}`}>
          Artist: {song.artist.name}
        </Link>
      </p>
    </>
  );
};

export default Song;
