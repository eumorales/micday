import { useState } from "react";
import Head from "next/head";
import Link from "next/link";

import { Flex, Text, Box, Heading, useMediaQuery } from "@chakra-ui/react";

import { canSSRAuth } from "@/utils/canSSRAuth";
import { SidebarPaciente } from "../../../components/sidebar/paciente";

import { MdOutlineWaterDrop } from "react-icons/md";
import { setupAPIClient } from "@/services/api";

import { format } from "date-fns";

interface UrinasItem {
  id: string;
  data: Date;
  perda_urina: boolean;
  quantidade: number;
  necessidade_urina: boolean;
}

interface BebidasItem {
  id: string;
  data: Date;
  tipo: string;
  quantidade: number;
}

interface PacienteProps {
  urinas: UrinasItem[];
  bebidas: BebidasItem[];
}

export default function DashboardPaciente({ urinas, bebidas }: PacienteProps) {
  const [isMobile] = useMediaQuery("(max-width: 500px)");

  const [urinasList, setUrinasList] = useState<UrinasItem[]>(urinas || []);
  const [bebidasList, setBebidasList] = useState<BebidasItem[]>(bebidas || []);

  return (
    <>
      <Head>
        <title>Página Inicial | mic.day </title>
      </Head>
      <SidebarPaciente>
        <Flex
          direction="column"
          alignItems="flex-start"
          justifyContent="flex-start"
        >
          <Flex
            direction="row"
            width="100%"
            alignItems="center"
            justifyContent="flex-start"
            mb={0}
          >
            <Heading
              fontSize={isMobile ? "28px" : "2xl"}
              mt={4}
              mb={6}
              mr={4}
              color="pink.700"
              pb={2}
              borderBottomWidth={2}
              borderBottomColor="pink.700"
            >
              Registros de Urina
            </Heading>
          </Flex>

          {urinasList.map((urina) => (
            <Box w="full">
              <Link key={urina.id} href={`/urina/${urina.id}`}>
                <Flex
                  cursor="pointer"
                  w="100%"
                  paddingX={3}
                  paddingY={6}
                  mb={2}
                  justifyContent="space-between"
                  direction="row"
                  bg="pink.50"
                  borderBottomWidth={2}
                  borderBottomColor="pink.700"
                >
                  <Flex
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <MdOutlineWaterDrop size={24} color="#97266D" />
                    <Text ml={2} fontWeight="semibold">
                      Urina
                    </Text>
                  </Flex>
                  <Text fontWeight="semibold">
                    {format(new Date(urina.data), "dd/MM/yyyy HH:mm")}
                  </Text>
                </Flex>
              </Link>
            </Box>
          ))}

          {urinasList.map((bebida) => (
            <Box w="full">
              <Link key={bebida.id} href={`/bebida/${bebida.id}`}>
                <Flex
                  cursor="pointer"
                  w="100%"
                  paddingX={3}
                  paddingY={6}
                  mb={2}
                  justifyContent="space-between"
                  direction="row"
                  bg="pink.50"
                  borderBottomWidth={2}
                  borderBottomColor="pink.700"
                >
                  <Flex
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <MdOutlineWaterDrop size={24} color="#97266D" />
                    <Text ml={2} fontWeight="semibold">
                      Bebida
                    </Text>
                  </Flex>
                  <Text fontWeight="semibold">
                    {format(new Date(bebida.data), "dd/MM/yyyy HH:mm")}
                  </Text>
                </Flex>
              </Link>
            </Box>
          ))}
        </Flex>
      </SidebarPaciente>
    </>
  );
}

export const getServerSideProps = canSSRAuth("Paciente", async (ctx) => {
  try {
    const apiClient = setupAPIClient(ctx);
    const response = await apiClient.get("/urina/detalhes");
    const bebidasResponse = await apiClient.get("/bebidas");

    if (response.data === null || bebidasResponse.data === null) {
      return {
        redirect: {
          destination: "/dashboard/paciente",
          permanent: false,
        },
      };
    }

    return {
      props: {
        urinas: response.data,
        bebidas: bebidasResponse.data,
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
