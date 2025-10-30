import BrushedMetalContainer from "../atoms/brushedMetalContainer";
import LeftRecordSide from "./leftRecordPlayerSide";
import CenterRecordPlayerPart from "./centerRecordPlayerPart";

const RecordPlayer = () => {
  return (
    <div className="record-player">
      <BrushedMetalContainer>
        <div className="container-fluid">
          <div class="row">
            <LeftRecordSide
              handleOn={() => {
                console.log("Click on Button On");
              }}
            />
            <CenterRecordPlayerPart />
            <div className="col-md-1"></div>
          </div>
        </div>
      </BrushedMetalContainer>
    </div>
  );
};

export default RecordPlayer;
