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
exports.CriarOrientacaoController = void 0;
const CriarOrientacaoService_1 = require("../../services/orientacao/CriarOrientacaoService");
class CriarOrientacaoController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { descricao, data, paciente_id } = req.body;
            const usuario_id = req.usuario_id;
            const criarOrientacaoService = new CriarOrientacaoService_1.CriarOrientacaoService();
            const orientacao = yield criarOrientacaoService.execute({
                descricao,
                usuario_id,
                paciente_id,
                data
            });
            return res.json(orientacao);
        });
    }
}
exports.CriarOrientacaoController = CriarOrientacaoController;
