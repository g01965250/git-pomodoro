import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faChartBar } from '@fortawesome/free-solid-svg-icons';

function Other (props){
  return (
    <div className="right-wrapper">
    <div className="icon-wrapper">
    <FontAwesomeIcon className="right-icon " icon={faList} onClick={props.setOpenpage}/>
    </div>
    <div className="title-wrapper">
      <p>POMODORO</p>
    </div>
  </div>
  );
}

export default Other;