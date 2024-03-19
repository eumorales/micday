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
exports.AuthUsuarioService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const bcryptjs_1 = require("bcryptjs");
const jsonwebtoken_1 = require("jsonwebtoken");
function checaEmail(value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
}
class AuthUsuarioService {
    execute({ emailOuCpf, senha }) {
        return __awaiter(this, void 0, void 0, function* () {
            let usuario;
            if (checaEmail(emailOuCpf)) {
                usuario = yield prisma_1.default.usuario.findFirst({
                    where: {
                        email: emailOuCpf,
                    },
                });
            }
            else {
                usuario = yield prisma_1.default.usuario.findFirst({
                    where: {
                        cpf: emailOuCpf,
                    },
                });
            }
            if (!usuario) {
                throw new Error("Email ou CPF incorreto");
            }
            const senhaCorreta = yield (0, bcryptjs_1.compare)(senha, usuario.senha);
            if (!senhaCorreta) {
                throw new Error("Senha incorreta");
            }
            const token = (0, jsonwebtoken_1.sign)({
                nome: usuario.nome,
                email: usuario.email,
                tipo_usuario: usuario.tipo,
            }, process.env.JWT_USUARIO, {
                subject: usuario.id,
                expiresIn: "30d",
            });
            return {
                id: usuario.id,
                nome: usuario.nome,
                email: usuario.email,
                tipo: usuario.tipo,
                cpf: usuario.cpf,
                telefone: usuario.telefone,
                tokenUsuario: token,
            };
        });
    }
}
exports.AuthUsuarioService = AuthUsuarioService;
