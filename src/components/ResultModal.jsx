import { forwardRef, useImperativeHandle, useRef } from "react"; // for react < 19

const ResultModal = forwardRef(function ResultModal(
  { targetTime, remainingTime, onReset },
  ref
) {
  const dialog = useRef();
  const userLost = remainingTime <= 0;
  const formattedTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - (remainingTime / targetTime) * 1000) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return (
    <dialog ref={dialog} className="result-modal" onClose={onReset}>
      {userLost && <h2>Your lost</h2>}
      {!userLost && <h2>Your score: {score}</h2>}
      <p>The target time was {targetTime} seconds.</p>
      <p>
        You stopped the timer with{" "}
        <strong>{formattedTime} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;

// export default function ResultModal({ ref, result, targetTime }) {
//   return (
//     <dialog ref={ref} className="result-modal" open>
//       <h2>Your {result}</h2>
//       <p>The target time was {targetTime} seconds.</p>
//       <p>
//         You stopped the timer with <strong>X seconds left.</strong>
//       </p>
//       <form method="dialog">
//         <button>Close</button>
//       </form>
//     </dialog>
//   );
// }
