export const Input = ({ amount, inputType, onInputChange }) => {
  switch (inputType) {
    case "number":
      return (
        <input
          type="text"
          className="form-control form-control-number"
          maxLength="3"
          value={amount}
          onChange={onInputChange}
        />
      );
    case "select":
      return (
        <select
          className="form-select"
          aria-label="Default select example"
          value={amount}
          onChange={onInputChange}
        >
          <option value="words">Words</option>
          <option value="sentences">Sentences</option>
          <option value="paragraphs">Paragraphs</option>
        </select>
      );
    case "submit":
      return (
        <button
          type="submit"
          className="btn btn-primary"
          onClick={onInputChange}
        >
          <span>Generate Text</span>
        </button>
      );

    default:
      return <div></div>;
  }
};
