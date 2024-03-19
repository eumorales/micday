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
exports.TrocarSenhaController = void 0;
const TrocarSenhaService_1 = require("../../services/usuario/TrocarSenhaService");
class TrocarSenhaController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuario_id = req.usuario_id;
            const { senha_atual, nova_senha } = req.body;
            const trocarSenhaService = new TrocarSenhaService_1.TrocarSenhaService();
            try {
                const usuarioAtualizado = yield trocarSenhaService.execute({
                    usuario_id,
                    senha_atual,
                    nova_senha,
                });
                return res.json(usuarioAtualizado);
            }
            catch (error) {
                return res.status(400).json({ error: error.message });
            }
        });
    }
}
exports.TrocarSenhaController = TrocarSenhaController;
