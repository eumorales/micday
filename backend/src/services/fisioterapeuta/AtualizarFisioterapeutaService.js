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
exports.AtualizarFisioterapeutaService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class AtualizarFisioterapeutaService {
    execute({ fisioterapeuta_id, usuario_id, atuacao, crefito }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const fisioterapeutaExiste = yield prisma_1.default.fisioterapeuta.findFirst({
                    where: {
                        id: fisioterapeuta_id,
                        usuario_id,
                    },
                });
                if (!fisioterapeutaExiste) {
                    throw new Error("Fisioterapeuta não existe.");
                }
                const fisioterapeutaAtualizado = yield prisma_1.default.fisioterapeuta.update({
                    where: {
                        id: fisioterapeutaExiste.id,
                    },
                    data: {
                        atuacao,
                        crefito,
                    },
                    select: {
                        id: true,
                        atuacao: true,
                        crefito: true,
                    },
                });
                return fisioterapeutaAtualizado;
            }
            catch (err) {
                console.log(err);
                throw new Error("Erro ao atualizar fisioterapeuta.");
            }
        });
    }
}
exports.AtualizarFisioterapeutaService = AtualizarFisioterapeutaService;
