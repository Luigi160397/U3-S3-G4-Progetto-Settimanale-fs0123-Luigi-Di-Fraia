import { Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Canzone = ({ song }) => {
  return (
    <Col className="col-sm-auto col-md-auto text-center mb-5">
      <Link to={`/album/${song.id}`}>
        <Image fluid src={song.album.cover_medium} alt={song.title} />
      </Link>
      <p>
        <Link to={`/album/${song.album.id}`}>
          Track: {song.title} <br />
        </Link>
        <Link to={`/artist/${song.album.id}`}>Album: {song.album.title}</Link>
      </p>
    </Col>
  );
};

export default Canzone;
