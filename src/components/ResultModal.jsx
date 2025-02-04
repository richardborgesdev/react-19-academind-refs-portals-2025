import { forwardRef } from "react"; // for react < 19

const ResultModal = forwardRef(function ResultModal(
  { result, targetTime },
  ref
) {
  return (
    <dialog ref={ref} className="result-modal">
      <h2>Your {result}</h2>
      <p>The target time was {targetTime} seconds.</p>
      <p>
        You stopped the timer with <strong>X seconds left.</strong>
      </p>
      <form method="dialog">
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
