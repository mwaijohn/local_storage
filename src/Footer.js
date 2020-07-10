import React ,{useState} from 'react'

export default function Footer() {
    const [date, setDate] = useState(Date())
    return (
        <div>
            <small>{()=>setDate(Date())}</small>
        </div>
    )
    
}

// var setDate = () => {
//     setInterval(() => {
//         date = Date()
//     }, 1000)
// }

