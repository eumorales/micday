import { Response, Request } from "express";
import { CriarPacienteService } from "../../services/paciente/CriarPacienteService";

class CriarPacienteController {
    async handle(req: Request, res: Response){
        const { idade, altura, peso, etnia, usuario_id, fisioterapeuta_id, tipo_id } = req.body;

        const criarPacienteService = new CriarPacienteService();

        const paciente = await criarPacienteService.execute({
            idade,
            altura, 
            peso, 
            etnia, 
            usuario_id, 
            fisioterapeuta_id, 
            tipo_id 
        });

        return res.json(paciente);
    }
}

export { CriarPacienteController }

