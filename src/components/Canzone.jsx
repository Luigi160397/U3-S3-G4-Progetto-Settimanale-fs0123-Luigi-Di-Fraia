import { Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getSelectedSong } from "../redux/actions";
import { useDispatch } from "react-redux";

const Canzone = ({ song }) => {
  const dispatch = useDispatch();
  return (
    <Col className="col-sm-auto col-md-auto text-center mb-5">
      <a href="#i" onClick={() => dispatch(getSelectedSong(song))}>
        <Image fluid src={song.album.cover_medium} alt={song.title} />
      </a>
      <p>
        <a className="text-decoration-none" href="#i">
          Track: {song.title} <br />
        </a>
        <Link className="text-decoration-none" to={`/album/${song.album.id}`}>
          Album: {song.album.title}
        </Link>
      </p>
    </Col>
  );
};

export default Canzone;
