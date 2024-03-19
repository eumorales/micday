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
exports.MarcarOrientacaoLidaController = void 0;
const MarcarOrientacaoLidaService_1 = require("../../services/orientacao/MarcarOrientacaoLidaService");
class MarcarOrientacaoLidaController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const orientacaoId = req.params.orientacao_id;
            const { status } = req.body;
            const marcarOrientacaoLidaService = new MarcarOrientacaoLidaService_1.MarcarOrientacaoLidaService();
            try {
                const novoStatus = yield marcarOrientacaoLidaService.execute({
                    orientacao_id: orientacaoId,
                    status,
                });
                return res.json(novoStatus);
            }
            catch (error) {
                return res.status(400).json({ error: error.message });
            }
        });
    }
}
exports.MarcarOrientacaoLidaController = MarcarOrientacaoLidaController;
