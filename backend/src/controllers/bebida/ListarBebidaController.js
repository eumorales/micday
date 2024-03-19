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
exports.ListarBebidaController = void 0;
const ListarBebidaService_1 = require("../../services/bebida/ListarBebidaService");
class ListarBebidaController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const paciente_id = req.paciente_id;
            const listarBebidaService = new ListarBebidaService_1.ListarBebidaService();
            const bebidas = yield listarBebidaService.execute({
                paciente_id,
            });
            return res.json(bebidas);
        });
    }
}
exports.ListarBebidaController = ListarBebidaController;
