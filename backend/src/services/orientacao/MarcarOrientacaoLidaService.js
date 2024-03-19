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
exports.MarcarOrientacaoLidaService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class MarcarOrientacaoLidaService {
    execute({ orientacao_id, status }) {
        return __awaiter(this, void 0, void 0, function* () {
            const orientacao = yield prisma_1.default.orientacao.findFirst({
                where: {
                    id: orientacao_id,
                },
            });
            if (!orientacao) {
                throw new Error("Orientação não encontrada.");
            }
            const novoStatus = yield prisma_1.default.orientacao.update({
                where: {
                    id: orientacao_id,
                },
                data: {
                    status,
                },
            });
            return novoStatus;
        });
    }
}
exports.MarcarOrientacaoLidaService = MarcarOrientacaoLidaService;
