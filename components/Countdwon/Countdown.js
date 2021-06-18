import React from 'react';
import moment from 'moment';

const Countdown = ({ countdown, unixEndDate }) => {

  return (
    <div class="row text-center">
      <div class="col">
                        <div class="days">
                            <h5>{countdown.days}</h5>
                            <span>Days</span>
                        </div>
                    </div>
                    <div class="col">
                        <div class="hours">
                            <h5>{countdown.hours}</h5>
                            <span>Hours</span>
                        </div>
                    </div>
                    <div class="col">
                        <div class="minutes">
                            <h5>{countdown.mins}</h5>
                            <span>MINUTES</span>
                        </div>
                    </div>
                    <div class="col">
                        <div class="seconds">
                            <h5>{countdown.secs}</h5>
                            <span>Seconds</span>
                        </div>
                    </div>
      <p>Counting down to {moment.unix(unixEndDate).format('dddd, MMMM Do, YYYY | h:mm A')}</p>
    </div>
  );
}

export default Countdown;
