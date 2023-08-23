import { HeroList } from "../../heroes"

//AQUI TOMAMOS LO HECHO EN HEROLIST PARA RENDERIZARLO
export const DcPage = () => {
  return (
    <>
      <h1>DC Comics</h1>
      <hr />

      <HeroList publisher='DC Comics' />
    </>
  )
}
