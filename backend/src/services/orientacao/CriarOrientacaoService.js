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
exports.CriarOrientacaoService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class CriarOrientacaoService {
    execute({ descricao, paciente_id, data, usuario_id }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const fisioterapeuta = yield prisma_1.default.fisioterapeuta.findFirst({
                    where: {
                        usuario_id,
                    },
                });
                if (!fisioterapeuta) {
                    throw new Error("Fisioterapeuta não encontrado.");
                }
                const orientacao = yield prisma_1.default.orientacao.create({
                    data: {
                        descricao,
                        data,
                        fisioterapeuta: {
                            connect: {
                                id: fisioterapeuta.id
                            },
                        },
                        paciente: {
                            connect: { id: paciente_id }
                        }
                    },
                });
                return orientacao;
            }
            catch (err) {
                console.error(err);
                throw new Error("Não foi possível criar a orientação.");
            }
        });
    }
}
exports.CriarOrientacaoService = CriarOrientacaoService;
