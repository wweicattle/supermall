export function debounce(func,delay){
    let timer=null;
    return function (){
      if(timer)clearTimeout(timer);
      timer=setTimeout(()=>{
        func.apply(                           );
        console.log(this);
      },delay)
    }

  }