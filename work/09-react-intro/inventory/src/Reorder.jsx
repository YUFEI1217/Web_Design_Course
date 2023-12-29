// function onReorder( ) { 
//     return (
//     <div>Hello
//         <button onClick={() => setCount((count) => count + 1)}>
//           +
//         </button>
//         <button onClick={() => setCount((count) => count - 1)} disabled={!count}>
//           - 
//         </button>
//     </div>
//     );
// }

function Reorder({ onReorder }) {
    return (
      <button onClick={onReorder}>Reorder</button>
    );
  }

export default Reorder;