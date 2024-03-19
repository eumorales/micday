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
exports.DeletarBebidaController = void 0;
const DeletarBebidaService_1 = require("../../services/bebida/DeletarBebidaService");
class DeletarBebidaController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const paciente_id = req.paciente_id;
            const bebida_id = req.query.bebida_id;
            const deletaBebidaService = new DeletarBebidaService_1.DeletarBebidaService();
            const bebida = yield deletaBebidaService.execute({
                paciente_id,
                bebida_id,
            });
            return res.json(bebida);
        });
    }
}
exports.DeletarBebidaController = DeletarBebidaController;
