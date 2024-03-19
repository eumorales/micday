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
exports.CriarUsuarioService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const bcryptjs_1 = require("bcryptjs");
class CriarUsuarioService {
    execute({ nome, email, senha, cpf, telefone, tipo }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!email) {
                throw new Error("Email incorreto");
            }
            const usuarioExiste = yield prisma_1.default.usuario.findFirst({
                where: {
                    email: email,
                },
            });
            if (usuarioExiste) {
                throw new Error("Este email já possui um usuário");
            }
            if (tipo !== "Fisioterapeuta" && tipo !== "Paciente") {
                throw new Error("Informe um tipo de usuário válido");
            }
            const senhaHash = yield (0, bcryptjs_1.hash)(senha, 8);
            const usuario = yield prisma_1.default.usuario.create({
                data: {
                    nome: nome,
                    email: email,
                    senha: senhaHash,
                    cpf: cpf,
                    telefone: telefone,
                    tipo: tipo,
                },
                select: {
                    id: true,
                    nome: true,
                    email: true,
                    tipo: true,
                },
            });
            return usuario;
        });
    }
}
exports.CriarUsuarioService = CriarUsuarioService;
