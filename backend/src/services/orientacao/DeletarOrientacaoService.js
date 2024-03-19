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
exports.DeletarOrientacaoService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class DeletarOrientacaoService {
    execute({ orientacao_id, paciente_id }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (orientacao_id === '' || paciente_id === '') {
                throw new Error('Error.');
            }
            try {
                const pertenceAoPaciente = yield prisma_1.default.orientacao.findFirst({
                    where: {
                        id: orientacao_id,
                        paciente_id: paciente_id,
                    }
                });
                if (!pertenceAoPaciente) {
                    throw new Error("Não autorizado");
                }
                yield prisma_1.default.orientacao.delete({
                    where: {
                        id: orientacao_id
                    }
                });
                return { message: "Finalizado com sucesso!" };
            }
            catch (err) {
                throw new Error(err);
            }
        });
    }
}
exports.DeletarOrientacaoService = DeletarOrientacaoService;
