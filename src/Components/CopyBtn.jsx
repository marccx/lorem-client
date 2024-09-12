export const CopyBtn = ({ onInputChange, textValue }) => {
  return (
    <button className="btn btn-secondary ms-auto" onClick={onInputChange}>
      <span>{textValue}</span>
    </button>
  );
};
