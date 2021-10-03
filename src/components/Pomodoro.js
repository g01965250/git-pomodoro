import List from './List'
import ListPage from './ListPage'
import Other from './Other'
import { useEffect, useState } from 'react';


function Pomodoro (){

  const [ data , setData ] = useState([])
  const [ inputValue , setInputValue ] = useState('')
  const [ current , setCurrent ] = useState('')
  const [ openpage , setOpenpage ] = useState(true)




  function _uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,function(c) {var r = Math.random()*16|0,v=c=='x'?r:r&0x3|0x8;return v.toString(16);});
  }

  const updateData = () =>{
    if(inputValue!==''){
      setData((prev) => [...prev, {text: inputValue , isComplete: false , time: 1500, uuid:_uuid()}]);
      setInputValue('')
    }
  }


/*  const finish = (index,item) =>{
 const copydata = data.map((d) => {
      if(d.uuid === item.uuid) {
      d.isComplete = !d.isComplete
      }
      console.log('d',d);
      return d
      })  */
      const finish = (item) =>{
        const copydata = data.slice()
        let xxxxx= copydata.findIndex((X) =>X.uuid===item.uuid)

        if(xxxxx!== -1){
        copydata[xxxxx].isComplete=!copydata[xxxxx].isComplete
        }

        console.log(item.uuid);
        console.log(copydata);

      setData(copydata)
  }

  const open = () => {
    setOpenpage(!openpage)
  }


  const listChange = (item) =>{
    const copydata = data.slice()
    let xxxxx= copydata.findIndex((X) =>X.uuid===item.uuid)
    setCurrent(copydata[xxxxx]);
  }
  
/*   useEffect(() =>{
    if (data.isComplete === !data.isComplete){
      setData(data)
    }
  },[data.isComplete]) */ 

  const enter = (e)=>{
    let {key} = e
    if(key==='Enter'){
      updateData()
    }
  }
  



  return (
    <>
      <div className={openpage ? "openpage"  : "none"}>
       <div className="wrapper">
         <List
          enter={enter}
          updateData={updateData}
          finish={finish}
          inputValue={inputValue}
          setInputValue={setInputValue}
          data={data}
          setData={setData}
          current={current}
          setCurrent={setCurrent}
          setOpenpage={open}
          listChange={listChange}
         />
         <Other
          setOpenpage={open}
         />
       </div>
      </div>
       <div className={openpage ? "none"  : "openpage"}>
        <div className="wrapper page1">
         <ListPage
          updateData={updateData}
          finish={finish}
          inputValue={inputValue}
          setInputValue={setInputValue}
          data={data}
          setData={setData}
          current={current}
          setCurrent={setCurrent}
          setOpenpage={open}
          listChange={listChange}
         />
        </div>
      </div>
    </>
  );
}

export default Pomodoro;