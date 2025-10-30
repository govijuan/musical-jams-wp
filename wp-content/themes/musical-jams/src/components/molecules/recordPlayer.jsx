import BrushedMetalContainer from "../atoms/brushedMetalContainer";
import LeftRecordSide from "./leftRecordPlayerSide";

const RecordPlayer = () => {
  return (
    <div className="record-player">
      <BrushedMetalContainer>
        <div className="container-fluid">
          <div class="row">
            Record Player here
            <LeftRecordSide
              handleOn={() => {
                console.log("Click on Button On");
              }}
            />
          </div>
        </div>
      </BrushedMetalContainer>
    </div>
  );
};

export default RecordPlayer;
