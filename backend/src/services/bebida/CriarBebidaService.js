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
exports.CriarBebidaService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class CriarBebidaService {
    execute({ quantidade, data, tipo, usuario_id }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const paciente = yield prisma_1.default.paciente.findFirst({
                    where: {
                        usuario_id,
                    },
                });
                if (!paciente) {
                    throw new Error("Paciente não encontrado.");
                }
                const bebida = yield prisma_1.default.bebida.create({
                    data: {
                        quantidade,
                        data,
                        tipo,
                        paciente: {
                            connect: {
                                id: paciente.id,
                            },
                        },
                    },
                });
                return bebida;
            }
            catch (error) {
                console.error(error);
                throw new Error("Não foi possível criar o registro de bebida.");
            }
        });
    }
}
exports.CriarBebidaService = CriarBebidaService;
