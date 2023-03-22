import * as C from "./styles";
import { FiFilter } from "react-icons/fi";
import { TbFilterOff } from "react-icons/tb";

export default function Filters({ filter, handleClick }) {
  if (filter == "Trabalho") {
    return (
      <C.FilterContainer>
        <p id="" onClick={handleClick}>
          Todas
        </p>
        <p onClick={handleClick} id="Trabalho" className="activefilter">
          Trabalho
        </p>
        <p onClick={handleClick} id="Pessoal">
          Pessoal
        </p>
        <p onClick={handleClick} id="Outros">
          Outros
        </p>
      </C.FilterContainer>
    );
  } else if (filter == "Pessoal") {
    return (
      <C.FilterContainer>
        <p id="" onClick={handleClick}>
          Todas
        </p>
        <p onClick={handleClick} id="Trabalho">
          Trabalho
        </p>
        <p onClick={handleClick} id="Pessoal" className="activefilter">
          Pessoal
        </p>
        <p onClick={handleClick} id="Outros">
          Outros
        </p>
      </C.FilterContainer>
    );
  } else if (filter == "Outros") {
    return (
      <C.FilterContainer>
        <p id="" onClick={handleClick}>
          Todas
        </p>
        <p onClick={handleClick} id="Trabalho">
          Trabalho
        </p>
        <p onClick={handleClick} id="Pessoal">
          Pessoal
        </p>
        <p onClick={handleClick} id="Outros" className="activefilter">
          Outros
        </p>
      </C.FilterContainer>
    );
  } else {
    return (
      <C.FilterContainer>
        <p id="" onClick={handleClick} className="activefilter">
          Todas
        </p>
        <p onClick={handleClick} id="Trabalho">
          Trabalho
        </p>
        <p onClick={handleClick} id="Pessoal">
          Pessoal
        </p>
        <p onClick={handleClick} id="Outros">
          Outros
        </p>
      </C.FilterContainer>
    );
  }
}
