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
exports.CriarUrinaController = void 0;
const CriarUrinaService_1 = require("../../services/urina/CriarUrinaService");
class CriarUrinaController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { quantidade, data, perda_urina, necessidade_urina } = req.body;
            const usuario_id = req.usuario_id;
            const criarUrinaService = new CriarUrinaService_1.CriarUrinaService();
            const urina = yield criarUrinaService.execute({
                quantidade,
                data,
                perda_urina,
                necessidade_urina,
                usuario_id
            });
            return res.json(urina);
        });
    }
}
exports.CriarUrinaController = CriarUrinaController;
