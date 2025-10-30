import MujerMusicalJams from "../../../images/MusicalJamsMujer-min.png";

const CenterRecordPlayerPart = () => {
  return (
    <div className="col-md-9">
      <div className="row">
        <div className="col-md-10">
          <div className="lp-record-wrap">
            <img src={MujerMusicalJams} alt="Hada musical Jams" />
          </div>
        </div>
        <div className="col-md-2">
          <div className="turntable-right-col">
            <div className="slider-rail-wrap"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenterRecordPlayerPart;
