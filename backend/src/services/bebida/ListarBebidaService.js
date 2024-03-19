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
exports.ListarBebidaService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class ListarBebidaService {
    execute({ paciente_id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const listarBebidas = prisma_1.default.bebida.findMany({
                where: {
                    paciente_id: paciente_id
                },
                select: {
                    id: true,
                    tipo: true,
                    data: true,
                    quantidade: true,
                    paciente_id: true,
                }
            });
            return listarBebidas;
        });
    }
}
exports.ListarBebidaService = ListarBebidaService;
