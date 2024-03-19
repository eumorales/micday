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
exports.DetalhesFisioterapeutaController = void 0;
const DetalhesFisioterapeutaService_1 = require("../../services/fisioterapeuta/DetalhesFisioterapeutaService");
class DetalhesFisioterapeutaController {
    handle(req, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const fisioterapeuta_id = req.fisioterapeuta_id;
            const usuario_id = req.usuario_id;
            const detalhesFisioterapeutaService = new DetalhesFisioterapeutaService_1.DetalhesFisioterapeutaService();
            const detalhesFisioterapeuta = yield detalhesFisioterapeutaService.execute(fisioterapeuta_id, usuario_id);
            return response.json(detalhesFisioterapeuta);
        });
    }
}
exports.DetalhesFisioterapeutaController = DetalhesFisioterapeutaController;
