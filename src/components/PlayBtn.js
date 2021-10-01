


function PlayBtn (props){

 
  return(
    <div className={props.className} onClick={props.onClick} >
        <div className="play-bnt-wrapper ">
          <div className="play-bnt "></div>
          <div className="sm-play-bnt"></div>
          <div className="play-white-bnt"></div>
          <div className={props.classNameStart}></div>
          <div className="play-point"></div>
        </div>
      </div>
  );
}


export default PlayBtn;