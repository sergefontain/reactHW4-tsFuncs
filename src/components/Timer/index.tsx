import React, { FC } from "react"

const TimerFC: FC = () => {
    const [countMin, setCountMin] = React.useState("00")
    const [countSec, setCountSec] = React.useState("00")
    const [countMs, setCountMs] = React.useState("00")

    React.useEffect(() => {
        console.log("component did mount")
        const consoleWrite = () => {
            console.log(
                "useEffect с пустым массивом зависимостей, где установлено прослушивание клика на всем документе для логирования происходящих событий в консоли"
            )
        }
        const consoleFin = () => console.log("component unmount")

        document.addEventListener("click", consoleWrite)
        return () => {
            document.removeEventListener("click", consoleWrite)
            consoleFin()
        }
    }, [])
    React.useEffect(() => {
        const consoleWrite = () => {
            console.log(
                "useEffect с прослушкой изменений в трех элементах [countMin, countSec, countMs] для вызова перерендера всего компонента в связи с происходящими изменениями"
            )
        }

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
        let interval = setInterval(() => handleMSeconds(), 10)
        document.addEventListener("click", consoleWrite)
        return () => {
            clearInterval(interval)
            document.removeEventListener("click", consoleWrite)
        }
    }, [countMin, countSec, countMs])

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
