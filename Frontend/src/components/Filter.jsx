
import { useDispatch,useSelector } from "react-redux";
import { PriceInc,resetFilter} from "../Redux/Slice/filterItems";
import { useState } from "react";
import { PriceDec,Sortalpha,sortMen ,sortWomen} from "../Redux/Slice/filterItems";

const Filter = ({data}) => {

const dispatch=useDispatch();


// const filterState=useSelector((state)=>state.filter.Filter)


const [resetIncFilter,setResetIncFilter]=useState(false)
const [resetDecFilter,setResetDecFilter]=useState(false)
const [resetalpha,setResetAlpha]=useState(false)
const [resetMen,setResetMen]=useState(false)
const [resetWomen,setResetWomen]=useState(false)



const handleResetInc=()=>{

  if(!resetIncFilter){

    dispatch(PriceInc(data))


  }else{

    dispatch(resetFilter())
  }

  setResetIncFilter(!resetIncFilter)

}


const handleResetDec=()=>{

  if(!resetDecFilter){

    dispatch(PriceDec(data))

  }else{

    dispatch(resetFilter())

  }
setResetDecFilter(!resetDecFilter)

}



const handleAlphabet=()=>{

if(!resetalpha){

  dispatch(Sortalpha(data))
}else{


  dispatch(resetFilter())
}

setResetAlpha(!resetalpha)

}


const handleMen=()=>{

  if(!resetMen){

    dispatch(sortMen(data))
  }else{

    dispatch(resetFilter())
  }

  setResetMen(!resetMen)


}


const handleWomen=()=>{
if(!resetWomen){

    dispatch(sortWomen(data))
  }else{

    dispatch(resetFilter())
  }

  setResetWomen(!resetWomen)



}

  return (
    <div className="bg-white  rounded-md shadow p-4 w-full md:w-[220px] lg:w-[250px] min-h-full">
      <div className="text-center bg-red-500 text-white text-base md:text-lg lg:text-xl font-bold py-2 rounded">
        Filter Products
      </div>

      <div className="mt-6 space-y-4 text-sm md:text-base lg:text-lg font-medium">
        <label className="flex items-center gap-2">
          <input onClick={handleResetInc} type="checkbox" />
          Price Increase
        </label>
        <label className="flex items-center gap-2">
          <input onClick={handleResetDec} type="checkbox" />
          Price Decrease
        </label>
        <label className="flex items-center gap-2">
          <input onClick={handleAlphabet} type="checkbox" />
          Sort A to Z
        </label>
        <label className="flex items-center gap-2">
          <input onClick={handleMen} type="checkbox" />
          Men
        </label>
        <label className="flex items-center gap-2">
          <input onClick={handleWomen} type="checkbox" />
          Women
        </label>
      </div>
    </div>
  );
};

export default Filter;
