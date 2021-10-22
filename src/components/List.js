import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import PlayBtn from './PlayBtn';

function List (props){

  
  const [ start , setStart ] = useState(false)
  const [morePage , setMorePage ] = useState(false)

  
/*   const listChange = (item) =>{
    const copydata = props.data.slice()
    let xxxxx= copydata.findIndex((X) =>X.uuid===item.uuid)
    props.setCurrent(copydata[xxxxx]);
  }
 */
  const paddedFormat = (num) => {
    return num < 10 ? "0" + num : num; 
  }


  const data3 = props.data.filter((item) => item.isComplete===false)


  useEffect(()=>{
    if (props.data.find((d) => d.isComplete===false)!==undefined){ 
      if(props.data.length > 0 && !props.current){
        props.setCurrent(props.data[0])
      }
    }else{
      props.setCurrent(false)
    }
  }, [props.data])

  useEffect(()=>{
    const copydata =  props.data.find((d)=>d.isComplete===false)
    if(props.current.isComplete===true){{
      if (copydata!==undefined){ 
        props.setCurrent(copydata)
      }else{
        props.setCurrent(!props.current)
      }
    }
    }
  }, [props.data,props.current])

  
  console.log("current",props.current);

  useEffect(() => {
    if (!start || !props.current) {
      return 
    }
    let id = setInterval(() => {
      props.setCurrent({ ...props.current, time: props.current.time - 1 })
    }, 1000)
    return () => clearInterval(id)
  }, [props.current, start])
  console.log(start);

  const startCountDown = () => {
    setStart(prev => !prev)
  }

  const currentfinish = (item) =>{
    const copydata = props.data.slice()
    let xxxxx= copydata.findIndex((X) =>X.uuid===item.uuid)
    if(xxxxx!== -1){
    copydata[xxxxx].isComplete=!copydata[xxxxx].isComplete
    }
    props.setData(copydata)
  }

  return(
    <>
      <div className="left-wrapper">
          <div className="input-wrapper">
            <input className="input-massion"
            onChange={(e)=>props.setInputValue(e.target.value)}
            value={props.inputValue}
            onKeyDown={props.enter}
            placeholder='請輸入代辦事項'
            />
            <p className="addlist" onClick={() => {props.updateData(props.data)}}>+</p>
          </div>
          <div >
            <ul className="next-todo-menu">
              {
                props.current && 
                <div>
                  <div className="first-todolist-wrapper">
                    <button className="check" onClick={()=>{currentfinish(props.current)}} />
                    <p className="first-todolist">{props.current.text}</p>
                  </div>
                  <div className="time">{`${paddedFormat(parseInt(props.current.time / 60))}:${paddedFormat(parseInt(props.current.time % 60))}`}</div>
                </div>
              }
              { props.data.filter(item => !item.isComplete).map((item , index) => {      
                if ( index>3 || item.uuid === props.current.uuid ){
                  return<span/>
                }
                if(item.isComplete===false){
                  return(
                    <li className='next-todo-list' key={index} onClick={() => {props.listChange(item,index)}} >
                      <button className='next-todo-check' 
                      onClick={(e) =>{
                        e.stopPropagation()
                        props.finish(item)}}/>
                      {item.text}
                      <FontAwesomeIcon className="play" icon={faPlayCircle} />
                    </li>
                  )
                }
                })
              }
            </ul>
              {data3.length > 4 && <p className="more" onClick={props.setOpenpage}>MORE</p> }
          </div>
          <PlayBtn 
          onClick={startCountDown} 
          className={!start ? 'play':'start'} 
          classNameStart={!start ? 'play-triangle':'play-pause' }/>
      </div>

    </>
  );
}
export default List;
