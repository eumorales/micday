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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AtualizarUrinaController = void 0;
const AtualizarUrinaService_1 = require("../../services/urina/AtualizarUrinaService");
class AtualizarUrinaController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { quantidade, perda_urina, necessidade_urina, data } = req.body;
            const urina_id = req.params.urina_id;
            const paciente_id = req.paciente_id;
            const atualizarUrinaService = new AtualizarUrinaService_1.AtualizarUrinaService();
            const urina = yield atualizarUrinaService.execute({
                urina_id,
                paciente_id,
                quantidade,
                perda_urina,
                necessidade_urina,
                data
            });
            return res.json(urina);
        });
    }
}
exports.AtualizarUrinaController = AtualizarUrinaController;
