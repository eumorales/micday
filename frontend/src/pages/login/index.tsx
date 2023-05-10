import { useState, useContext } from "react";

import Head from "next/head";
import Image from "next/image";
import Logo from "../../../public/images/Logo.svg";
import Entrar from "../../../public/images/entrar.svg";

import {
  Flex,
  Text,
  Center,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Button,
  useMediaQuery
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon, EmailIcon, LockIcon } from "@chakra-ui/icons";

import Link from "next/link";

import { AuthContext } from "../../context/AuthContext";

import { canSSRGuest } from "@/utils/canSSRGuest";

export default function Login() {
  const [isMobile] = useMediaQuery("(max-width: 800px)");

  const { logarUsuario } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  async function handleLogin() {
    if (email === "" || senha === "") {
      return;
    }

    try {
      await logarUsuario({
        email,
        senha,
      });
      console.log();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Head>
        <title>Login | mic.day</title>
      </Head>
      <Flex
        height="100vh"
        alignItems="center"
        justifyContent={"center"}
        flexDirection={{ base: "column", md: "row" }}
      >
        <Flex
          maxW={isMobile ? '500px' : '85%'}
          direction="column"
          p={14}
          rounded={8}
        >
          <Flex mb={5}>
            <Image src={Logo} quality={100} width={120} alt="Logo mic.day" />
          </Flex>

          <Text mb={4} fontSize={24} fontWeight="bold">
            Entrar no sistema
          </Text>

          <InputGroup size="lg">
            <InputLeftElement children={<EmailIcon color="gray.400" />} />
            <Input
              variant={"outline"}
              size="lg"
              placeholder="exemplo@email.com"
              _placeholder={{ color: "gray.400" }}
              focusBorderColor="pink.500"
              type="email"
              mb={5}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputGroup>

          <InputGroup size="lg" mb={3}>
            <InputLeftElement children={<LockIcon color="gray.400" />} />
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              variant={"outline"}
              placeholder="Digite sua senha"
              _placeholder={{ color: "gray.400" }}
              focusBorderColor="pink.500"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <InputRightElement width="4.5rem">
              <Button
                bg="transparent"
                size="sm"
                onClick={handleClick}
                _hover={{ bg: "transparent" }}
              >
                {show ? (
                  <ViewOffIcon
                    boxSize={6}
                    bg=""
                    color="pink.600"
                    _hover={{ bg: "transparent" }}
                  />
                ) : (
                  <ViewIcon
                    boxSize={6}
                    bg="transparent"
                    color="pink.600"
                    _hover={{ bg: "transparent" }}
                  />
                )}
              </Button>
            </InputRightElement>
          </InputGroup>

          <Center mb={6} pr={2} justifyContent="end">
            <Link href="/">
              <Text
                cursor="pointer"
                color="pink.600"
                fontSize={16}
                fontWeight={"semibold"}
                _hover={{ color: "pink.500" }}
              >
                Esqueceu sua senha?
              </Text>
            </Link>
          </Center>

          <Button
            background="pink.600"
            color="#FFF"
            size="lg"
            borderRadius={24}
            mb={7}
            _hover={{ bg: "pink.500" }}
            onClick={handleLogin}
          >
            Entrar
          </Button>

          <Center>
            <Link href="/cadastro">
              <Text cursor="pointer">
                Ainda não possui conta? <strong >Cadastre-se</strong>
              </Text>
            </Link>
          </Center>
        </Flex>

        <Flex display={isMobile ? 'none' : 'block'}>
          <Center p={4} mb={5} minW={400}>
            <Image src={Entrar} quality={100} width={500} alt="Image login" />
          </Center>
        </Flex>
      </Flex>
    </>
  );
}

export const getServerSideProps = canSSRGuest(async (ctx) => {
  return {
    props: {},
  };
});
