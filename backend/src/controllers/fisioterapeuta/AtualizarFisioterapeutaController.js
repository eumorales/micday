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
exports.AtualizarFisioterapeutaController = void 0;
const AtualizarFisioterapeutaService_1 = require("../../services/fisioterapeuta/AtualizarFisioterapeutaService");
class AtualizarFisioterapeutaController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { atuacao, crefito } = req.body;
            const fisioterapeuta_id = req.fisioterapeuta_id;
            const usuario_id = req.usuario_id;
            const atualizarFisioterapeuta = new AtualizarFisioterapeutaService_1.AtualizarFisioterapeutaService();
            const fisioterapeuta = yield atualizarFisioterapeuta.execute({
                fisioterapeuta_id,
                usuario_id,
                atuacao,
                crefito,
            });
            return res.json(fisioterapeuta);
        });
    }
}
exports.AtualizarFisioterapeutaController = AtualizarFisioterapeutaController;
