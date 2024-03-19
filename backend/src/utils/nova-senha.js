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
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const prisma_1 = __importDefault(require("../prisma"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function redefinirSenha(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { token, novaSenha } = req.body;
        try {
            const decodedToken = jsonwebtoken_1.default.verify(token, process.env.JWT_RECUPERACAO_SENHA);
            const usuarioId = decodedToken.usuarioId;
            if (!usuarioId) {
                return res.status(400).json({ error: "Token inválido ou expirado." });
            }
            const usuario = yield prisma_1.default.usuario.findUnique({
                where: {
                    id: usuarioId === null || usuarioId === void 0 ? void 0 : usuarioId.toString(),
                },
            });
            if (!usuario) {
                return res.status(404).json({ error: "Usuário não encontrado." });
            }
            const hashNovaSenha = yield bcryptjs_1.default.hash(novaSenha, 8);
            yield prisma_1.default.usuario.update({
                where: { id: usuarioId },
                data: { senha: hashNovaSenha },
            });
            return res.status(200).json({ message: "Senha redefinida com sucesso." });
        }
        catch (error) {
            console.error("Erro ao redefinir a senha:", error);
            return res
                .status(500)
                .json({ error: "Ocorreu um erro ao redefinir a senha." });
        }
    });
}
exports.default = redefinirSenha;
