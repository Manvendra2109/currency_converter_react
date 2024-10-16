import { useEffect, useState } from "react";


// In this we are making custom hooks knowing how to make custom hooks 
function usecurrency(currency){
    const [data, setdata] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json`)
        .then((res) => res.json()) // converting the file into the json form
        .then((res) => setdata(res[currency]))
    }, [currency]) // this will come under the dependency means when the unit change then the other unit also changes
    console.log(data);
    return data
}

export default usecurrency;

 
