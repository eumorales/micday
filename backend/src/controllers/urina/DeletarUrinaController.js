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
exports.DeletarUrinaController = void 0;
const DeletarUrinaService_1 = require("../../services/urina/DeletarUrinaService");
class DeletarUrinaController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const paciente_id = req.paciente_id;
            const urina_id = req.query.urina_id;
            const deletaUrinaService = new DeletarUrinaService_1.DeletarUrinaService();
            const urina = yield deletaUrinaService.execute({
                paciente_id,
                urina_id,
            });
            return res.json(urina);
        });
    }
}
exports.DeletarUrinaController = DeletarUrinaController;
