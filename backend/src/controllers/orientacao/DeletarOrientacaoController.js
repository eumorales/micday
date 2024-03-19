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
exports.DeletarOrientacaoController = void 0;
const DeletarOrientacaoService_1 = require("../../services/orientacao/DeletarOrientacaoService");
class DeletarOrientacaoController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const paciente_id = req.paciente_id;
            const orientacao_id = req.query.orientacao_id;
            const deletaOrientacaoService = new DeletarOrientacaoService_1.DeletarOrientacaoService();
            const orientacao = yield deletaOrientacaoService.execute({
                paciente_id,
                orientacao_id,
            });
            return res.json(orientacao);
        });
    }
}
exports.DeletarOrientacaoController = DeletarOrientacaoController;
