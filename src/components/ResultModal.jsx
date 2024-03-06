import { forwardRef, useRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(function ResultModal({targetTime, timeRemaining, resetTimer}, ref) {
    const dialog = useRef();

    const userLost = timeRemaining <= 0;
    const timeLeft = (timeRemaining / 1000).toFixed(2);
    const score = Math.round((1 - timeRemaining / (targetTime * 1000)) * 100);

    //To Detach this component from other components
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal()
            }
        }
    }); 

    return createPortal(
        <dialog ref={dialog} className="result-modal">
            {userLost && <h2>You Lost</h2>}
            {!userLost && <h2>Your Score: {score}</h2>}
            <p>
                The target time was <strong>{targetTime} seconds.</strong>
            </p>
            <p>
                You stopped the timer with <strong>{timeLeft} seconds left</strong>
            </p>
            <form method="dialog" onSubmit={resetTimer}>
                <button>Close</button>
            </form>
        </dialog>,
        document.getElementById('modal')
    )
});

export default ResultModal;