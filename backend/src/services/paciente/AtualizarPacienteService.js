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
exports.AtualizarPacienteService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class AtualizarPacienteService {
    execute({ paciente_id, usuario_id, altura, peso, idade, tipo_incontinencia, etnia }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pacienteExiste = yield prisma_1.default.paciente.findFirst({
                    where: {
                        id: paciente_id,
                        usuario_id,
                    },
                });
                if (!pacienteExiste) {
                    throw new Error("Usuário inexistente.");
                }
                const pacienteAtualizado = yield prisma_1.default.paciente.update({
                    where: {
                        id: pacienteExiste.id,
                    },
                    data: {
                        altura,
                        peso,
                        idade,
                        etnia,
                        tipo_incontinencia
                    },
                    select: {
                        id: true,
                        altura: true,
                        peso: true,
                        etnia: true,
                        idade: true,
                        tipo_incontinencia: true,
                    },
                });
                return pacienteAtualizado;
            }
            catch (err) {
                console.log(err);
                throw new Error("Erro ao atualizar usuário.");
            }
        });
    }
}
exports.AtualizarPacienteService = AtualizarPacienteService;
