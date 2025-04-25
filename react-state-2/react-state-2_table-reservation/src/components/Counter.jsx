// add 'onAdd' and 'onSubstract' to the Counter's list of prop
export default function Counter({ onAdd, onSubstract }) {
  return (
    <>
      <h2>How many people would you like to visit us with?</h2>
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="decrement people count"
          /* assign the new props to the button's 'onClick' prop: the button will subtract new people */
          onClick={onSubstract}
        >
          -
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="increment people count"
          /* assign the new props to the button's 'onClick' prop: the button will add new people */
          onClick={onAdd}
        >
          +
        </button>
      </div>
    </>
  );
}
