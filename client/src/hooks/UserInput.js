import { useLocalStorage } from './UseLocalStorage';
//custom hook
const UserInput = (key, initialValue) => {
  const [inputValue, setInputValue] = useLocalStorage(key, initialValue);

  const handleChange = updatedValue => {
    setInputValue(updatedValue);
  };

  return [inputValue, handleChange];
};
export default UserInput;
