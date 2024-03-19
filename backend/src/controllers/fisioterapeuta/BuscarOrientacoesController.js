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
exports.BuscarOrientacoesController = void 0;
const BuscarOrientacoesService_1 = require("../../services/fisioterapeuta/BuscarOrientacoesService");
class BuscarOrientacoesController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const paciente_id = req.query.paciente_id;
            const buscarOrientacoes = new BuscarOrientacoesService_1.BuscarOrientacoesService();
            const orientacoes = yield buscarOrientacoes.execute({
                paciente_id,
            });
            return res.json(orientacoes);
        });
    }
}
exports.BuscarOrientacoesController = BuscarOrientacoesController;
