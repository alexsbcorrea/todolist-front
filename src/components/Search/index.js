import * as C from "./styles";
import { BsSearch } from "react-icons/bs";

export default function Search({ value, handleChange }) {
  return (
    <C.Search>
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Pesquisar"
        value={value}
        onChange={handleChange}
      />
    </C.Search>
  );
}
