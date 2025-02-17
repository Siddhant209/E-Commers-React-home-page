import "../selectDropDown/SelectDrop.css"
import "../../header/Header.css"
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import { useState } from "react"
function SelectDrop({data,placeholder}) {
    const [items,setItems]=useState(placeholder);
    const [open,setOpen]=useState(false);
    const [selected,setSelected]=useState(null);
    const [listData,setListData]=useState(data);
    const [listData1,setListData1]=useState(data);

    // ---------------------------------------------//
    function onClose(index,items){
     setSelected(index);
     setOpen(false);
     setItems(items);
    }

     function filterInput(e){
      const keyword= e.target.value.toLowerCase();
       const list=listData1.filter((item)=>{
        return item.toLowerCase().includes(keyword)
       })
       const list2=list.filter((items,index)=>list.indexOf(items)===index)
       setListData(list2);
     }
       return (
        <ClickAwayListener onClickAway={()=>setOpen(false)}>
        <div className="select position-relative">
                           <span className="openSelect" onClick={()=>setOpen(!open)}> {items.length>12 ? items.substr(0,12)+'....': items }
                           <KeyboardArrowDownIcon className="arrow" />
                            </span>
         {
         open === true &&
       <div className="selectDrop">
        <div className="searchFiled">
            <input type="text" placeholder="Search here....." onChange={filterInput} />
        </div>
        <ul className="searchResult">
        <li onClick={()=>onClose(0,placeholder)} className={selected === 0 ? "active" : ""}>{placeholder}</li>
                {
                 listData &&
                 listData
                   .filter((item, index, self) => self.indexOf(item) === index)
                   .map((items, index) => {
                     return (
                       <li
                         onClick={() => onClose(index + 1, items)}
                         className={selected === index + 1 ? "active" : ""}
                         key={index + 1}
                       >
                         {items}
                       </li>
                     );
                   })
                }
            </ul>
       </div>
}
    </div>
        </ClickAwayListener>
    )
}

export default SelectDrop
