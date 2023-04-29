import prismaClient from "../../prisma";

interface AtualizaUrinaRequest {
    urina_id: string;
    paciente_id: string;
    quantidade: number;
    perda_urina: boolean;
    necessidade_urina: boolean;
    data: Date;
}

class AtualizarUrinaService {
    async execute({urina_id, quantidade, perda_urina, necessidade_urina,data, paciente_id}: AtualizaUrinaRequest){

        // console.log(paciente_id)
        const atualizaUrina = await prismaClient.urina.update({
            where:{
                id: urina_id, 
            },
            data:{
                quantidade,
                perda_urina,
                necessidade_urina,
                data,
                paciente_id
            }
        })

        return atualizaUrina;
    }
}

export { AtualizarUrinaService }