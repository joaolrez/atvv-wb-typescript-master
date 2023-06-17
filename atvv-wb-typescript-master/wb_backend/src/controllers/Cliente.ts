import { Response, Request } from "express";
import { AppDataSource } from "config/database";
import { v4 as uuidv4 } from 'uuid';

import { Cliente } from "../models/Cliente";


const repositorioCliente = AppDataSource.getRepository(Cliente);




const criarCliente = async (req: Request, res: Response) => {
  const { nome, sobreNome, estado, cidade, bairro, rua, numero, codigoPostal, informacoesAdicionais } = req.body;
  const registroCliente = repositorioCliente.create({ id: uuidv4(), nome, sobreNome, estado, cidade, bairro, rua, numero, codigoPostal, informacoesAdicionais,});

  await repositorioCliente.save(registroCliente);
  res.json(registroCliente);
}



const listagemTodosClientes = async (  _: Request,  res: Response) => {
  try {
    const consultaClientes = await repositorioCliente.createQueryBuilder().select(['cli']).from(Cliente, 'cli').getMany();
    return res.json(consultaClientes);
  } catch (error) {
    res.json({ error: 'error' });
  }
}

const pesquisaPorID = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const consultaCliente = await repositorioCliente.createQueryBuilder().select(['cli']).from(Cliente, 'cli').where('cli.id = :id', { id }).getOne();

    return res.json(consultaCliente);
  } catch (error) {
    res.json({ error: 'erro ao listar os clientes' });
  }
}


const deletarCliente = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await repositorioCliente
      .createQueryBuilder().delete().from(Cliente).where(
        "id = :id", {
        id
      })
      .execute();
    res.json({
      "message": "cliente deletado com sucesso"
    })
  } catch (error) {
    console.log(error);
  }
}

const atualizarCliente = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { nome, sobreNome, estado, cidade, bairro, rua, numero, codigoPostal, informacoesAdicionais } = req.body;
    console.log(req.params); // Verifique se o ID do cliente está sendo recebido corretamente
    console.log(req.body); // Verifique se os dados do cliente estão sendo recebidos corretamente

    await repositorioCliente.update(id, { nome, sobreNome, estado, cidade, bairro, rua, numero, codigoPostal, informacoesAdicionais,});
    res.json({
      message: 'Cliente atualizado com sucesso',
    });
  } catch (error) {
    res.json(error);
  }
};
export {
  listagemTodosClientes,
  pesquisaPorID,
  criarCliente,
  deletarCliente,
  atualizarCliente
}
