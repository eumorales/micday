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
exports.DetalhesBebidaController = void 0;
const DetalhesBebidaService_1 = require("../../services/bebida/DetalhesBebidaService");
class DetalhesBebidaController {
    handle(req, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuario_id = req.usuario_id;
            const listarBebidaService = new DetalhesBebidaService_1.DetalhesBebidaService();
            const detalhesBebida = yield listarBebidaService.execute(usuario_id);
            return response.json(detalhesBebida);
        });
    }
}
exports.DetalhesBebidaController = DetalhesBebidaController;
