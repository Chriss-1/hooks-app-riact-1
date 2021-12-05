import { Fragment } from 'react'
import { Articulos } from "./components/Articulos"
import { Navbar } from './components/Navbar'
import {ArticulosContextProvider} from './contex/contex'


function App() {

  return (
    <ArticulosContextProvider>
      <Fragment>
        <Navbar />
        <Articulos />
      </Fragment>
    </ArticulosContextProvider>
  );
}

export default App;
