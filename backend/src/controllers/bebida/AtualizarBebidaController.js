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
exports.AtualizarBebidaController = void 0;
const AtualizarBebidaService_1 = require("../../services/bebida/AtualizarBebidaService");
class AtualizarBebidaController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { tipo, quantidade, data } = req.body;
            const bebida_id = req.params.bebida_id;
            const paciente_id = req.paciente_id;
            const atualizarBebidaService = new AtualizarBebidaService_1.AtualizarBebidaService();
            const bebida = yield atualizarBebidaService.execute({
                bebida_id,
                paciente_id,
                tipo,
                quantidade,
                data
            });
            return res.json(bebida);
        });
    }
}
exports.AtualizarBebidaController = AtualizarBebidaController;
