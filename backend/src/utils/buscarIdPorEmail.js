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
const prisma_1 = __importDefault(require("../prisma"));
function obterIdUsuarioPorEmail(email) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const usuario = yield prisma_1.default.usuario.findFirst({
                where: { email },
                select: { id: true },
            });
            return (_a = usuario === null || usuario === void 0 ? void 0 : usuario.id) !== null && _a !== void 0 ? _a : null;
        }
        catch (error) {
            console.error('Erro ao obter ID do usuário por e-mail:', error);
            return null;
        }
    });
}
exports.default = obterIdUsuarioPorEmail;
