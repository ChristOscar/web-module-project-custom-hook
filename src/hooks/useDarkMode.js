import useLocalStorage from "./useLocalStorage";


 const useDarkMode = (initialValue) => {
    const [someValue, setSomeValue] = useLocalStorage('values', initialValue)
    return [someValue, setSomeValue];
 }
 export default useDarkMode