import * as C from "./styles";

export default function Loading({ loading, colorBase, colorLine }) {
  if (loading) {
    return (
      <C.Container>
        <C.Loader colorBase={colorBase} colorLine={colorLine}></C.Loader>
      </C.Container>
    );
  }
}
