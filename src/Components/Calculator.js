export default function Calculator() {
  const buttons = ['AC', '+/-', '%', '/', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];
  return (
    <>
      <div className="calculator">
        <p className="outputResult">0</p>
        <div className="buttonContainer">
          {buttons.map((button) => (
            <button type="button" className="calcButtons" key={button}>{button}</button>
          ))}
        </div>
      </div>
    </>
  );
}
