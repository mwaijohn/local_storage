import React ,{useState,useEffect} from 'react'

export default function Footer() {
    const [date, setDate] = useState(Date())

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(Date)
        }, 1000);
       
        return () => {
            clearInterval(interval);
        }
    }, [])
    return (
        <div>
            <small>{date}</small>
        </div>
    )
    
}

// var setDate = () => {
//     setInterval(() => {
//         date = Date()
//     }, 1000)
// }

