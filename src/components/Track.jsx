const Tracks = ({ song }) => {
  return (
    <>
      <div className="py-3 trackHover">
        <a href="#i" className="card-title trackHover px-3" style={{ color: "white" }}>
          {song.title}
        </a>
        <small className="duration" style={{ color: "white" }}>
          {Math.floor(song.duration / 60)}:{(song.duration % 60).toString().padStart(2, "0")}
        </small>
      </div>
    </>
  );
};

export default Tracks;
