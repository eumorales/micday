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
exports.CriarPacienteController = void 0;
const CriarPacienteService_1 = require("../../services/paciente/CriarPacienteService");
class CriarPacienteController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idade, altura, peso, etnia, usuario_id, fisioterapeuta_id, tipo_incontinencia } = req.body;
            const criarPacienteService = new CriarPacienteService_1.CriarPacienteService();
            const paciente = yield criarPacienteService.execute({
                idade,
                altura,
                peso,
                etnia,
                usuario_id,
                fisioterapeuta_id,
                tipo_incontinencia
            });
            return res.json(paciente);
        });
    }
}
exports.CriarPacienteController = CriarPacienteController;
