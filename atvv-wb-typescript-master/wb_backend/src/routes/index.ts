import express from "express";

import {
  listagemTodosClientes,
  pesquisaPorID,
  criarCliente,
  deletarCliente,
  atualizarCliente
} from "../controllers/Cliente";


const router = express.Router();

router.get('/clientes', listagemTodosClientes);
router.get('/cliente/:id', pesquisaPorID);
router.post('/cliente/cadastrar',  criarCliente);
router.put('/cliente/atualizar/:id', atualizarCliente);
router.delete('/cliente/excluir/:id', deletarCliente);

export default router;
