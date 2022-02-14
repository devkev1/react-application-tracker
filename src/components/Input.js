const Input = ({ setInputText, inputText }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  return <input value={inputText} onChange={inputTextHandler} type="text" />;
};

export default Input;
