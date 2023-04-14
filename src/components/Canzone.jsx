import { Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Canzone = ({ song }) => {
  return (
    <Col className="col-sm-auto col-md-auto text-center mb-5">
      <a href="#i">
        <Image fluid src={song.album.cover_medium} alt={song.title} />
      </a>
      <p>
        <a href="#i">
          Track: {song.title} <br />
        </a>
        <Link to={`/album/${song.album.id}`}>Album: {song.album.title}</Link>
      </p>
    </Col>
  );
};

export default Canzone;
