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
exports.AtualizarOrientacaoController = void 0;
const AtualizarOrientacaoService_1 = require("../../services/orientacao/AtualizarOrientacaoService");
class AtualizarOrientacaoController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const orientacao_id = req.params.orientacao_id;
            const { descricao, paciente_id, data } = req.body;
            const atualizarOrientacaoService = new AtualizarOrientacaoService_1.AtualizarOrientacaoService();
            const orientacao = yield atualizarOrientacaoService.execute({
                orientacao_id,
                descricao,
                paciente_id,
                data
            });
            return res.json(orientacao);
        });
    }
}
exports.AtualizarOrientacaoController = AtualizarOrientacaoController;
