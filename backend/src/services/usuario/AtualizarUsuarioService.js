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
exports.AtualizarUsuarioService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class AtualizarUsuarioService {
    execute({ usuario_id, nome, cpf, telefone }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usuarioExiste = yield prisma_1.default.usuario.findFirst({
                    where: {
                        id: usuario_id,
                    },
                });
                if (!usuarioExiste) {
                    throw new Error("Usuario não existe.");
                }
                const usuarioAtualizado = yield prisma_1.default.usuario.update({
                    where: {
                        id: usuario_id,
                    },
                    data: {
                        nome,
                        cpf,
                        telefone,
                    },
                    select: {
                        nome: true,
                        cpf: true,
                        telefone: true,
                    },
                });
                return usuarioAtualizado;
            }
            catch (err) {
                console.log(err);
                throw new Error("Erro ao atualizar usuario.");
            }
        });
    }
}
exports.AtualizarUsuarioService = AtualizarUsuarioService;
