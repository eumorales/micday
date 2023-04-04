import prismaClient from "../../prisma";

interface PacienteRequest {
  idade: number;
  altura: string;
  peso: string;
  etnia?: string;
  usuario_id: string;
  fisioterapeuta_id: string;
  tipo_id: string;
}

class CriarPacienteService {
  async execute({
    idade,
    altura,
    peso,
    etnia,
    usuario_id,
    fisioterapeuta_id,
    tipo_id,
  }: PacienteRequest) {
    const paciente = await prismaClient.paciente.create({
      data: {
        idade: idade,
        altura: altura,
        peso: peso,
        etnia: etnia,
        usuario_id: usuario_id,
        fisioterapeuta_id: fisioterapeuta_id,
        tipo_id: tipo_id,
      },
    });

    return paciente;
  }
}

export { CriarPacienteService };