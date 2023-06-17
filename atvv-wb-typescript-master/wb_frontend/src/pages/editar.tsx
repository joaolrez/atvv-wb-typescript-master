import 'materialize-css/dist/css/materialize.min.css'
import  Navbar  from '../components/nav';
import { useForm } from 'react-hook-form';
import { useCallback } from 'react';
import { api } from '../services/api';
import { useParams } from 'react-router-dom';

interface CadastroProps {
    nome: string;
    sobreNome: string;
    estado: string;
    cidade: string;
    bairro: string;
    rua: string;
    numero: number;
    codigoPostal: string;
    informacoesAdicionais: string;
}


function Editar(){
    const {  register,  handleSubmit,} = useForm<CadastroProps>({
        mode: 'onBlur',
      });
      const { id } = useParams();

      const onSubmit = useCallback(
        async ({nome, sobreNome, estado, cidade, bairro, rua, numero, codigoPostal, informacoesAdicionais}: CadastroProps) => {
          await api.put(`cliente/atualizar/${id}`, {nome,sobreNome,estado, cidade, bairro, rua, numero, codigoPostal, informacoesAdicionais}).then(response => {
                if (response.status === 200) alert('Cliente alterado com sucesso!');
            }).catch(error => {
                console.log(error);
                alert('Erro ao cadastrar')
            })
        },
        [],
      );

        return (
            <> 
                <Navbar/>
                <div className='editar'>
                        <div className="row box">
                                <h4>Edição de Cliente</h4>
                                <div className="row">
                                    <form onSubmit={handleSubmit(onSubmit)} className="col s12">
                                        <div className="row">
                                            <div className="input-field col s6">
                                                <input id="icon_prefix " type="text" className="validate" placeholder="Nome" {...register('nome')}/>                                           
                                            </div>
                                            <div className="input-field col s6">
                                                <input id="icon_prefix " type="text" className="validate" placeholder= "Sobrenome" {...register('sobreNome')} />
                                            </div>
                                            <div className="input-field col s6">
                                                <input type="text" className="validate" placeholder="Estado" {...register('estado')} />
                                            </div>
                                            <div className="input-field col s6">
                                                <input type="text" className="validate" placeholder="Cidade" {...register('cidade')} />
                                            </div>
                                            <div className="input-field col s6">
                                                <input type="text" className="validate" placeholder="Bairro" {...register('bairro')} />
                                            </div>
                                            <div className="input-field col s6">
                                                <input type="text" className="validate" placeholder="Rua" {...register('rua')}  />
                                            </div>
                                            <div className="input-field col s6">
                                                <input type="number" className="validate" placeholder="Número" {...register('numero')}  />
                                            </div>
                                            <div className="input-field col s6">
                                                <input type="text" className="validate" placeholder="Código Postal" {...register('codigoPostal')} />
                                            </div>
                                            <div className="input-field col s6">
                                                <input type="text" className="validate" placeholder="Informações Adicionais" {...register('informacoesAdicionais')} />
                                            </div>
                                            <div className="row">
                                                <div className="col s12">
                                                    <button className='btn waves-effect waves-light botao' type="submit" name="action">Cadastrar
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


export default Editar;
