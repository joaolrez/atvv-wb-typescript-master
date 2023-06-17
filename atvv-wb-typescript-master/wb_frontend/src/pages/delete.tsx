import 'materialize-css/dist/css/materialize.min.css'
import Navbar from '../components/nav';
import { useCallback } from 'react';
import { api } from '../services/api';
import { useParams } from 'react-router-dom';


function DeletarCliente() {
    const { id } = useParams();

    const onSubmit = useCallback(async () => {
        try {
            await api.delete(`/cliente/excluir/${id}`);
            alert('Cliente excluído com sucesso!');
        } catch (error) {
            console.log(error);
            alert('Erro ao excluir o cliente');
        }
    }, [id]);



    return (
        <>
            <Navbar />
                <div className="row box">
                    <h4>Exclusão Cliente</h4>
                    <div className="row">
                        <form onSubmit={onSubmit}>
                            <button type="submit">Excluir Cliente</button>
                        </form>
                    </div>
                </div>
        </>
    )
}   


export default DeletarCliente;
