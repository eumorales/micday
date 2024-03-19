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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrocarSenhaService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const bcryptjs_1 = require("bcryptjs");
class TrocarSenhaService {
    execute({ usuario_id, senha_atual, nova_senha }) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuario = yield prisma_1.default.usuario.findUnique({
                where: {
                    id: usuario_id
                }
            });
            if (!usuario) {
                throw new Error("Usuário não encontrado");
            }
            const senhaAtualCorreta = yield (0, bcryptjs_1.compare)(senha_atual, usuario.senha);
            if (!senhaAtualCorreta) {
                throw new Error("Senha atual incorreta");
            }
            const senhaHash = yield (0, bcryptjs_1.hash)(nova_senha, 8);
            const usuarioAtualizado = yield prisma_1.default.usuario.update({
                where: {
                    id: usuario_id
                },
                data: {
                    senha: senhaHash
                }
            });
            return usuarioAtualizado;
        });
    }
}
exports.TrocarSenhaService = TrocarSenhaService;
