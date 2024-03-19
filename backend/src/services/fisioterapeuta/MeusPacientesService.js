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
exports.MeusPacientesService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class MeusPacientesService {
    execute(usuario_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const paciente = yield prisma_1.default.paciente.findMany({
                where: {
                    fisioterapeuta: {
                        usuario_id: usuario_id,
                    },
                },
                include: {
                    usuario: {
                        select: {
                            email: true,
                            nome: true,
                            cpf: true,
                            telefone: true,
                        },
                    },
                    urinas: {
                        select: {
                            data: true,
                            quantidade: true,
                            perda_urina: true,
                            necessidade_urina: true,
                        },
                    },
                    bebidas: {
                        select: {
                            data: true,
                            quantidade: true,
                            tipo: true,
                        },
                    },
                },
            });
            return paciente;
        });
    }
}
exports.MeusPacientesService = MeusPacientesService;
