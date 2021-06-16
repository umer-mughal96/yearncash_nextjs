import React from 'react'
import DateCountdown from 'react-date-countdown-timer';

const Countdown = () => {
    return (
        <div>
            {process.browser && <DateCountdown dateTo='January 01, 2023 00:00:00 GMT+03:00' callback={()=>alert('Hello')}  /> }
           
        </div>
    )
}

export default Countdown

