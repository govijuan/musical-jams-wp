const LeftRecordSide = ({ handleOn }) => {
  return (
    <div class="col-md-2">
      <div class="lbutton-wrapper">
        <button className="lbutton" onClick={handleOn}>
          <div className="lbutton-icon"></div>
        </button>
      </div>
    </div>
  );
};

export default LeftRecordSide;
