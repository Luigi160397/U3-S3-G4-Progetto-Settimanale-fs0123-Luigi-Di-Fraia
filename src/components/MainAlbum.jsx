import { Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const MainAlbum = () => {
  const params = useParams();
  const albumEndpoint = `https://striveschool-api.herokuapp.com/api/deezer/album/${params.id}`;
  return (
    <>
      <Row className="mb-3">
        <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
          <Link to="/">TRENDING</Link>
          <Link to="/">PODCAST</Link>
          <Link to="/">MOODS AND GENRES</Link>
          <Link to="/">NEW RELEASES</Link>
          <Link to="/">DISCOVER</Link>
        </Col>
      </Row>
      <Row>
        <Col md={3} className="pt-5 text-center" id="img-container">
          <img src="{album.cover}" className="card-img img-fluid" alt="Album" />
          <div className="mt-4 text-center">
            <p className="album-title">album.title</p>
          </div>
          <div className="text-center">
            <p className="artist-name">album.artist.name</p>
          </div>
          <div className="mt-4 text-center">
            <button id="btnPlay" className="btn btn-success" type="button">
              Play
            </button>
          </div>
        </Col>
        <Col md={8} className="p-5">
          <Row>
            <Col md={10} className="mb-5" id="trackList">
              <div className="py-3 trackHover">
                <a href="#i" className="card-title trackHover px-3" style={{ color: "white" }}>
                  track.title
                </a>
                <small className="duration" style={{ color: "white" }}>
                  3.14
                </small>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default MainAlbum;
