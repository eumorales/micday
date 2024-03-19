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
exports.AtualizarStatusPacienteController = void 0;
const AtualizarStatusPacienteService_1 = require("../../services/paciente/AtualizarStatusPacienteService");
class AtualizarStatusPacienteController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { status } = request.body;
            const { paciente_id } = request.params;
            const atualizarStatusPacienteService = new AtualizarStatusPacienteService_1.AtualizarStatusPacienteService();
            try {
                const pacienteAtualizado = yield atualizarStatusPacienteService.execute({
                    paciente_id,
                    status,
                });
                return response.json(pacienteAtualizado);
            }
            catch (err) {
                return response.status(400).json({ error: err.message });
            }
        });
    }
}
exports.AtualizarStatusPacienteController = AtualizarStatusPacienteController;
