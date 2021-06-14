import React from 'react'

const maintenance = () => {
    return (
        <div>
            <div className="maintenance-wrapper">
                <div className="maintenance-contaioner">
                    <div className="maintenance-img">
                        <img src="assets/images/maintenance.svg" alt="" srcset="" />
                    </div>
                    <div className="maintenance-text">
                        <h2>Hang on! We are under Manintenance</h2>
                        {/* <p>it will not take a long time till we get the error fixed.</p>
                        <p>we will be live again shortly.</p> */}
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default maintenance
