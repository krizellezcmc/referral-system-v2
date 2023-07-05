import {
  Box,
  Flex,
  Grid,
  GridItem,
  Text,
  Heading,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Button,
  Link,
  Stack,
  Image,
} from "@chakra-ui/react";
import React, { useState } from "react";
import "../Styles/Login.css";
import { HiEye, HiEyeOff, HiOutlineMail } from "react-icons/hi";
import { BiLockAlt } from "react-icons/bi";
import zcmc from "../Assets/zcmc.png";

function Login(props) {
  const [show, setShow] = useState(false);
  return (
    <div className="background">
      <Flex
        width={"100vw"}
        height={"100vh"}
        alignItems={"center"}
        justifyContent={"center"}
        bg="gray.100"
      >
        <Box
          height="80vh"
          w={{ sm: "90vw", md: "65vw", lg: "50vw", xl: "65vw" }}
          bg="white"
          borderRadius={"xl"}
        >
          <Grid
            templateColumns={{ md: "repeat(1, 1fr)", xl: "repeat(9, 1fr)" }}
          >
            <GridItem
              // height={"100%"}
              height={{ xs: 0, sm: 0, xl: "80vh" }}
              bg="blue.500"
              borderTopLeftRadius={"xl"}
              borderBottomLeftRadius={"xl"}
              colSpan={{ sm: 0, md: 0, lg: 5 }}
              display={{ md: "none", lg: "none", xl: "inline" }}
            >
              <Image
                src={zcmc}
                h={"100%"}
                borderTopLeftRadius={"xl"}
                borderBottomLeftRadius={"xl"}
              />
            </GridItem>
            <GridItem colSpan={4} height={{ sm: 0, xl: "80vh" }}>
              <Box p={{ sm: 10, md: 16, lg: 14, xl: 14 }} textAlign="center">
                <Box lineHeight={10}>
                  <Heading color={"blue.500"}>Welcome</Heading>
                  <Text>Patient Navigation and Referral System</Text>
                </Box>

                {/* FORM */}
                <form>
                  <Box mt={14}>
                    <Box textAlign={"center"}>
                      <FormControl isRequired>
                        <InputGroup>
                          <InputLeftElement
                            pointerEvents="none"
                            children={<HiOutlineMail color="#A0AEC0" />}
                          />

                          <Input
                            bg={"#F0F0F0"}
                            borderRadius={50}
                            border="0"
                            placeholder="Email"
                          />
                        </InputGroup>
                      </FormControl>

                      {/* PASSWORD */}
                      <FormControl isRequired mt={5}>
                        <InputGroup>
                          <InputLeftElement
                            pointerEvents="none"
                            children={<BiLockAlt color="#A0AEC0" />}
                          />

                          <Input
                            bg={"#F0F0F0"}
                            borderRadius={50}
                            border="0"
                            placeholder="Password"
                          />

                          <InputRightElement
                            pointerEvents="none"
                            // onClick={show}
                            children={
                              !show ? (
                                <HiEyeOff color="#A0AEC0" />
                              ) : (
                                <HiEye color="#A0AEC0" />
                              )
                            }
                          />
                        </InputGroup>
                      </FormControl>
                    </Box>

                    <Stack>
                      <Box mt={2}>
                        <Link
                          float={"right"}
                          fontWeight={"semibold"}
                          fontSize={14}
                          color={"blue.500"}
                        >
                          Forgot password?
                        </Link>
                      </Box>
                      <Box align={"center"} pb={4}>
                        <Button
                          mt={14}
                          borderRadius={50}
                          variant="solid"
                          colorScheme={"blue"}
                          fontSize={16}
                          fontWeight={"semibold"}
                          w={161}
                          h={42}
                        >
                          Sign in
                        </Button>
                      </Box>

                      <Link
                        href="/signup"
                        textAlign="center"
                        fontSize={14}
                        color={"blue.500"}
                      >
                        No account? Register here
                      </Link>
                    </Stack>
                  </Box>
                </form>
              </Box>
            </GridItem>
          </Grid>
        </Box>
      </Flex>
    </div>
  );
}

export default Login;
