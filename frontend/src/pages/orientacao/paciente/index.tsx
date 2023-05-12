import { useState } from "react";
import { SidebarPaciente } from "@/components/sidebar/paciente";
import {
  Text,
  Flex,
  Button,
  Heading,
  useMediaQuery,
  VStack,
  Box,
} from "@chakra-ui/react";
import Head from "next/head";

import { canSSRAuth } from "@/utils/canSSRAuth";
import { setupAPIClient } from "@/services/api";
import Link from "next/link";
import { FiChevronLeft } from "react-icons/fi";
import { format } from "date-fns";

interface OrientacaoItem {
  id: string;
  descricao: string;
  data: Date;
  fisioterapeuta: {
    id: string;
    usuario: {
      nome: string;
    };
  };
}

interface OrientacaoListProps {
  orientacoes: OrientacaoItem[];
}

export default function OrientacoesPaciente({
  orientacoes,
}: OrientacaoListProps) {
  const [isMobile] = useMediaQuery("(max-width: 500px)");

  const orientacoesOrdenadas = orientacoes.sort((a, b) => {
    const dataA = new Date(a.data).getTime();
    const dataB = new Date(b.data).getTime();
    return dataB - dataA;
  });

  return (
    <>
      <Head>
        <title>Minhas Orientações | mic.day</title>
      </Head>
      <SidebarPaciente>
        <Flex
          direction={isMobile ? "column" : "row"}
          w="100%"
          align={isMobile ? "flex-start" : "center"}
          mb={isMobile ? 0 : 4}
        >
          <Link href="/dashboard/paciente">
            <Button
              p={4}
              display="flex"
              alignItems="center"
              justifyItems="center"
              mr={4}
              bg="pink.50"
              borderColor="pink.700"
              _hover={{ bg: "pink.50" }}
            >
              <FiChevronLeft size={24} color="#B83280" />
              Voltar
            </Button>
          </Link>
          <Heading
            color="pink.700"
            mt={4}
            mr={4}
            mb={4}
            fontSize={isMobile ? "28px" : "3xl"}
          >
            Minhas Orientações
          </Heading>
        </Flex>

        <VStack align="stretch" spacing={4} w="100%">
          {orientacoesOrdenadas.map((orientacao) => (
            <Box
              key={orientacao.id}
              p={4}
              shadow="md"
              bg="pink.50"
              borderBottomColor="pink.700"
              borderBottomWidth={2}
              fontSize="lg"
            >
              <Text mb={1}>
                <strong>Fisioterapeuta:</strong>{" "}
                {orientacao.fisioterapeuta.usuario.nome}
              </Text>
              <Text mb={1}>
                <strong>Data / Hora:</strong>{" "}
                {format(new Date(orientacao.data), "dd/MM/yyyy HH:mm")}
              </Text>
              <Text mb={1}>
                <strong>Descrição:</strong> {orientacao.descricao}
              </Text>
            </Box>
          ))}
        </VStack>
      </SidebarPaciente>
    </>
  );
}

export const getServerSideProps = canSSRAuth("Paciente", async (ctx) => {
  try {
    const apiClient = setupAPIClient(ctx);
    const response = await apiClient.get("/orientacoes/detalhes");

    if (response.data === null) {
      return {
        redirect: {
          destination: "/dashboard/paciente",
          permanent: false,
        },
      };
    }

    return {
      props: {
        orientacoes: response.data,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      redirect: {
        destination: "/dashboard/paciente",
        permanent: false,
      },
    };
  }
});