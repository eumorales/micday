"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AtualizarUsuarioController = void 0;
const AtualizarUsuarioService_1 = require("../../services/usuario/AtualizarUsuarioService");
class AtualizarUsuarioController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome, cpf, telefone } = req.body;
            const usuario_id = req.usuario_id;
            const atualizarUsuario = new AtualizarUsuarioService_1.AtualizarUsuarioService();
            const usuario = yield atualizarUsuario.execute({
                usuario_id,
                nome,
                cpf,
                telefone,
            });
            return res.json(usuario);
        });
    }
}
exports.AtualizarUsuarioController = AtualizarUsuarioController;
