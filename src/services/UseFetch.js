import {useState,useEffect} from 'react'; 


const useFetch = (url)=>{

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const apiKey = 'NZdTPURUMoTcHl4BEDznIRpz4jekxnvn5yK2eetp';
    
    useEffect(()=>{
      
        const abortCtrl = new AbortController();
           
            fetch(url+apiKey,
                {
                    signal:abortCtrl.signal,
                    method:'GET',
                 }
                )
            .then(res=>{
               
                if(!res.ok){
                    throw Error("Unable to fetch data")
                }
                return res.json()
               
                .then(data=>{
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err=>{
                    if(err.name==="AbortError"){
                        console.log('Aborted fetch');
                    }else{
                        setIsPending(false);
                        setError(err.message);
                    }
                })
            })

        return () =>abortCtrl.abort();
    },[url]);

    return {data, isPending, error}
};



export default useFetch;