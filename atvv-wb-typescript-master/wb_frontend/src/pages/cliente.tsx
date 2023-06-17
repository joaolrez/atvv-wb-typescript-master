import 'materialize-css/dist/css/materialize.min.css'
import Navbar from '../components/nav';
import { MdModeEdit, MdDeleteForever } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useEffect, useState, useCallback, SetStateAction } from 'react';
import { AxiosError } from 'axios';
import { api } from '../services/api';
import { useForm } from 'react-hook-form';
import EditUserModal from './editar';

interface ICliente {
    nome: string;
    sobreNome: string;
    id: number;
    estado: string;
    cidade: string;
    bairro: string;
    rua: string;
    numero: number;
    codigoPostal: string;
    informacoesAdicionais: string;
}

function Clientes() {

    const [showModal, setShowModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);



    const {
        register,
        handleSubmit,
    } = useForm<ICliente>({
        mode: 'onBlur',
    });

    const onSubmit = useCallback(
        async ({
            nome,
            sobreNome,
            estado,
            cidade,
            bairro,
            rua,
            numero,
            codigoPostal,
            informacoesAdicionais,
        }: ICliente) => {
            await api
                .post('/cliente/cadastrar', {
                    nome,
                    sobreNome,
                    estado,
                    cidade,
                    bairro,
                    rua,
                    numero,
                    codigoPostal,
                    informacoesAdicionais,
                })
                .then((response) => {
                    if (response.status === 200) alert('Cliente cadastrado com sucesso!');
                })
                .catch((error) => {
                    console.log(error);
                    alert('Erro ao cadastrar');
                });
        },
        []
    );




    const [clientes, setClientes] = useState<ICliente[]>([]);



    const getAllClientes = useCallback(() => {
        api
            .get('/clientes', {
            })
            .then(({ data }) => {
                console.log(data);
                setClientes(data);
            })
            .catch((error: Error | AxiosError) => {
                console.log(error);
            });
        setTimeout(() => {
        }, 5000);
    }, [setClientes]);

    useEffect(() => {
        getAllClientes();
    }, []);

    return (
        <>

            <Navbar />
            <div className="listagem">
                    <div>
                        <div className='col s12 m12 l6 estilo'>
                            <div>
                                <h4>Clientes</h4>
                                <table className="responsive-table highlight">
                                    <thead>
                                        <tr>
                                            <th>Nome</th>
                                            <th>Sobrenome</th>
                                            <th>Estado</th>
                                            <th>Cidade</th>
                                            <th>Bairro</th>
                                            <th>Rua</th>
                                            <th>Numero</th>
                                            <th>CodPostal</th>
                                            <th>Complemento</th>
                                            <th>Editar</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {clientes && clientes?.map(cli => {
                                            return (
                                                <tr>
                                                    <td>{cli.nome}</td>
                                                    <td>{cli.sobreNome}</td>
                                                    <td>{cli.estado}</td>
                                                    <td>{cli.cidade}</td>
                                                    <td>{cli.bairro}</td>
                                                    <td>{cli.rua}</td>
                                                    <td>{cli.numero}</td>
                                                    <td>{cli.codigoPostal}</td>
                                                    <td>{cli.informacoesAdicionais}</td>
                                                    <td><Link className='icon' to={`/editar/${cli.id}`}><MdModeEdit /></Link>
                                                        <Link className='icon' to={`/delete/${cli.id}`}><MdDeleteForever /></Link></td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <br />
                    </div>
                    <br />
                

                <div className="row box">
                    <h4>Cadastro de Cliente</h4>
                    <div className="row">
                        <form onSubmit={handleSubmit(onSubmit)} className="col s12">
                            <div className="row">
                                <div className="input-field col s6">
                                    <input
                                        id="icon_prefix"
                                        type="text"
                                        className="validate"
                                        placeholder="Nome"
                                        {...register('nome')}
                                    />
                                </div>
                                <div className="input-field col s6">
                                    <input
                                        id="icon_prefix"
                                        type="text"
                                        className="validate"
                                        placeholder="Sobrenome"
                                        {...register('sobreNome')}
                                    />
                                </div>
                                <div className="input-field col s6">
                                    <input
                                        type="text"
                                        className="validate"
                                        placeholder="Estado"
                                        {...register('estado')}
                                    />
                                </div>
                                <div className="input-field col s6">
                                    <input
                                        type="text"
                                        className="validate"
                                        placeholder="Cidade"
                                        {...register('cidade')}
                                    />
                                </div>
                                <div className="input-field col s6">
                                    <input
                                        type="text"
                                        className="validate"
                                        placeholder="Bairro"
                                        {...register('bairro')}
                                    />
                                </div>
                                <div className="input-field col s6">
                                    <input
                                        type="text"
                                        className="validate"
                                        placeholder="Rua"
                                        {...register('rua')}
                                    />
                                </div>
                                <div className="input-field col s6">
                                    <input
                                        type="number"
                                        className="validate"
                                        placeholder="Número"
                                        {...register('numero')}
                                    />
                                </div>
                                <div className="input-field col s6">
                                    <input
                                        type="text"
                                        className="validate"
                                        placeholder="Código Postal"
                                        {...register('codigoPostal')}
                                    />
                                </div>
                                <div className="input-field col s6">
                                    <input
                                        type="text"
                                        className="validate"
                                        placeholder="Informações Adicionais"
                                        {...register('informacoesAdicionais')}
                                    />
                                </div>
                                <div className="row">
                                    <div className="col s12">
                                        <button
                                            className="btn waves-effect waves-light botao"
                                            type="submit"
                                            name="action"
                                        >
                                            Cadastrar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <br />
            </div>


        </>
    )
}


export default Clientes;