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
exports.CriarBebidaController = void 0;
const CriarBebidaService_1 = require("../../services/bebida/CriarBebidaService");
class CriarBebidaController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { quantidade, data, tipo } = req.body;
            const usuario_id = req.usuario_id;
            const criarBebidaService = new CriarBebidaService_1.CriarBebidaService();
            const bebida = yield criarBebidaService.execute({
                tipo,
                quantidade,
                data,
                usuario_id
            });
            return res.json(bebida);
        });
    }
}
exports.CriarBebidaController = CriarBebidaController;
