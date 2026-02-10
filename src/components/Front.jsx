import IconChange from './IconChange';
import FrontTxt from './FrontTxt';

const Front = (props) => {
  return (
    <div className="front-content">
      <IconChange />
      <FrontTxt handleStart={props.handleStart} />
    </div>
  );
}

export default Front;