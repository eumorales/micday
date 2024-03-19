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
exports.AtualizarUrinaService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class AtualizarUrinaService {
    execute({ urina_id, quantidade, perda_urina, necessidade_urina, data, paciente_id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const urina = yield prisma_1.default.urina.findUnique({
                where: {
                    id: urina_id,
                }
            });
            if (!urina) {
                throw new Error("Registro de urina não encontrado");
            }
            const atualizaUrina = yield prisma_1.default.urina.update({
                where: {
                    id: urina_id,
                },
                data: {
                    quantidade,
                    perda_urina,
                    necessidade_urina,
                    data: new Date(data),
                    paciente_id
                }
            });
            return atualizaUrina;
        });
    }
}
exports.AtualizarUrinaService = AtualizarUrinaService;
