import { useEffect } from "react"

const Async = () => {

    useEffect(async() => {

        const myPromise = (a,b)=>{
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    let c = a + ", "+ b;
                    reject({error:true});
                },500);
            })
        } 

        myPromise("Hello", "There")
        .then((result)=>{
            console.log(result);
        }).catch(result=>{
            console.log("catch",result);
        })

        try{
            const result = await myPromise("Hello", "There");
        }catch(error){
            console.log("Catch",error);
        }

    }, []);
    return (
        <div>
            <h1>Promises, Async and Await</h1>
        </div>
    )
}

export default Async
