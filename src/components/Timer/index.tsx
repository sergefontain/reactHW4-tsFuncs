import React, { FC } from "react"

const TimerFC: FC<{}> = ({}) => {
    const [countMin, setCountMin] = React.useState("00")
    const [countSec, setCountSec] = React.useState("00")
    const [countMs, setCountMs] = React.useState("00")

    React.useEffect(() => {
        /**
         * Did mount section start
         */
        let interval = setInterval(() => handleMSeconds(), 10)
        /**
         * Did mount section end
         */
        return () => {
            /**
             * Will unmount section start
             */
            clearInterval(interval)
            /**
             * Will unmount section end
             */
        }
    }, [countMin, countSec, countMs])

    let handleMinutes = () => {
        if (+countMin < 59) {
            setCountMin(`${+countMin + 1}`.padStart(2, countMin))
        } else {
            setCountMin("00")
        }
    }
    let handleSeconds = () => {
        if (+countSec < 59) {
            setCountSec(`${+countSec + 1}`.padStart(2, countSec))
        } else {
            setCountSec("00")
            handleMinutes()
        }
    }
    let handleMSeconds = () => {
        if (+countMs < 99) {
            setCountMs(`${+countMs + 1}`.padStart(2, countMs))
        } else {
            setCountMs("00")
            handleSeconds()
        }
    }

    return (
        <div id="timer_container">
            <p>
                <span>{countMin}</span> : <span>{countSec}</span> :{" "}
                <span>{countMs}</span>
            </p>
            <div id="elips"></div>
        </div>
    )
}

export default TimerFC
