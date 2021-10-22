import { faList } from '@fortawesome/free-solid-svg-icons';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from'@fortawesome/free-solid-svg-icons';

function ListPage (props) {

  const paddedFormat = (num) => {
    return num < 10 ? "0" + num : num; 
  }

  const deletedata = (item,index) =>{
    props.setData(props.data.filter((a)=> !(item.uuid===a.uuid)))
    console.log(props.data);
    console.log("item",item);
    console.log("index",index);
  }

  return (
  <>
    <div className="todolist-page1">
      <div className="page1-title-wrapper">
        <FontAwesomeIcon className="title-icon" icon={faList}/>
        <div className="page1-title">TO-DO LIST</div>
        <div className="semicircle-wrapper">
          <div className="semicircle">
            <div className="smtime">{props.current && `${paddedFormat(parseInt(props.current.time / 60))}:${paddedFormat(parseInt(props.current.time % 60))}`}</div>
            <div className="list-title">{props.current.text}</div>
          </div>
        </div>
        <div className="smplaybtn">
          <div className="smplaybtn-wrapper">
            <div className="smplaybtn-border">
              <div className="smplay-bnt">
                <div className="smtriangle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="input-wrapper">
        <input className="input-massion page1-input"
        onChange={(e)=>props.setInputValue(e.target.value)}
        value={props.inputValue}
        placeholder='請輸入代辦事項'
        />
        <p className="addlist page1-addlist" onClick={() => {props.updateData(props.data)}}>+</p>
        <div className="list-menu-wrapper">
          <div className="menu-title">TO-DO</div>
          <div  className="scrollbarStyle" >
            <ul className="todolist-menu-wrapper">
              { 
                props.data.map((item ,index) => {
                  if(item.isComplete===false){
                    return (
                      <li className='list-menu' onClick={()=>{props.listChange(item,index)}}>
                        <button className='next-todo-check' onClick={()=>props.finish(item)}/>
                        {item.text}
                        <FontAwesomeIcon className="play" icon={faPlayCircle}/>
                        </li>
                    )
                  }
                }
              )}
            </ul>
          </div>
          <div className="menu-title">DONE</div>
          <div  className="scrollbarStyle" >
           <ul className="donelist-menu-wrapper">
            { 
                props.data.map((item ,index) => {
                  if(item.isComplete===true){
                    return (
                      <li className='list-menu'>
                        <button className='next-todo-check' onClick={()=>props.finish(item,index)}/>
                        {item.text}
                        <FontAwesomeIcon className="play " icon={faTrashAlt} onClick={()=>deletedata(item ,index)} />
                        </li>
                    )
                  }
                }
              )}
            </ul>
          </div>
        </div>
      </div>
      <div className="sidebar">
        <div className="close" onClick={props.setOpenpage}>+</div>
        <div className="title-wrapper">
          <p>POMODORO</p>
        </div>
      </div>
    </div>
  </>
  );
}


export default ListPage;