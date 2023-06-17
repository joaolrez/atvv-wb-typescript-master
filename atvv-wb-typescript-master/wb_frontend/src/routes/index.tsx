import { BrowserRouter ,Route, Routes as RoutesWrapper } from 'react-router-dom';
import Clientes  from '../pages/cliente';
import Editar from '../pages/editar';
import DeletarCliente from '../pages/delete';


function Routes() {
  return ( 
      <RoutesWrapper>
        <Route path="/" element={<Clientes />} />
        <Route path="/editar/:id" element={<Editar/>} />
        <Route path="/delete/:id" element={<DeletarCliente />} />
      </RoutesWrapper>
  );
}

export default Routes;
