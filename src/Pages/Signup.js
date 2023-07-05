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
  Select,
} from "@chakra-ui/react";
import React, { useState } from "react";
// import "../Styles/Signup.css";
import { HiEye, HiEyeOff, HiOutlineMail, HiOutlineUser } from "react-icons/hi";

import { BsHospital } from "react-icons/bs";

function Signup(props) {
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

              colSpan={{ sm: 0, md: 0, lg: 5 }}
              // display={{ md: "none" }}
            >
              <Box p={{ sm: 10, md: 16, lg: 14, xl: 16 }} textAlign="center">
                <Box lineHeight={10}>
                  <Heading color={"blue.500"}>Signup</Heading>
                  <Text>Patient Navigation and Referral System</Text>
                </Box>

                {/* FORM */}
                <form>
                  <Box mt={14}>
                    <Box
                      display={{ lg: "", xl: "flex" }}
                      justifyContent="center"
                    >
                      <FormControl isRequired m={2}>
                        <InputGroup>
                          <InputLeftElement
                            pointerEvents="none"
                            children={<HiOutlineUser color="#A0AEC0" />}
                          />

                          <Input
                            bg={"#F0F0F0"}
                            borderRadius={50}
                            border="0"
                            placeholder="First name"
                          />
                        </InputGroup>
                      </FormControl>

                      <FormControl isRequired m={2}>
                        <InputGroup>
                          <InputLeftElement
                            pointerEvents="none"
                            children={<HiOutlineUser color="#A0AEC0" />}
                          />

                          <Input
                            bg={"#F0F0F0"}
                            borderRadius={50}
                            border="0"
                            placeholder="Last name"
                          />
                        </InputGroup>
                      </FormControl>
                    </Box>

                    <FormControl isRequired m={2}>
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

                    <Box
                      display={{ lg: "", xl: "flex" }}
                      justifyContent="center"
                    >
                      <FormControl isRequired m={2}>
                        <InputGroup>
                          <InputLeftElement
                            pointerEvents="none"
                            children={<HiOutlineUser color="#A0AEC0" />}
                          />

                          <Input
                            bg={"#F0F0F0"}
                            borderRadius={50}
                            border="0"
                            placeholder="Password"
                          />
                        </InputGroup>
                      </FormControl>

                      <FormControl isRequired m={2}>
                        <InputGroup>
                          <InputLeftElement
                            pointerEvents="none"
                            children={<HiOutlineUser color="#A0AEC0" />}
                          />

                          <Input
                            bg={"#F0F0F0"}
                            borderRadius={50}
                            border="0"
                            placeholder="Confirm password"
                          />
                        </InputGroup>
                      </FormControl>
                    </Box>

                    {/* HEALTH  */}

                    <Box
                      display={{ lg: "", xl: "flex" }}
                      justifyContent="center"
                    >
                      <FormControl isRequired m={2}>
                        <InputGroup>
                          {/* <InputLeftElement
                            pointerEvents="none"
                            children={<BsHospital color="#A0AEC0" />}
                          /> */}

                          <Select
                            bg={"#F0F0F0"}
                            borderRadius={50}
                            border="0"
                            placeholder="Health facility"
                          ></Select>
                        </InputGroup>
                      </FormControl>

                      <FormControl isRequired m={2} w={{ xl: "40%" }}>
                        <InputGroup>
                          <InputLeftElement
                            pointerEvents="none"
                            children={<HiOutlineUser color="#A0AEC0" />}
                          />

                          <Input
                            bg={"#F0F0F0"}
                            borderRadius={50}
                            border="0"
                            placeholder="Code"
                          />
                        </InputGroup>
                      </FormControl>
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
                        Sign up
                      </Button>
                    </Box>

                    <Link
                      href="/login"
                      textAlign="center"
                      fontSize={14}
                      color={"blue.500"}
                    >
                      Already have an account? Login here
                    </Link>
                  </Box>
                </form>
              </Box>
            </GridItem>
            <GridItem
              colSpan={4}
              height={{ sm: 0, xl: "80vh" }}
              bg="blue.500"
              borderTopRightRadius={"xl"}
              borderBottomRightRadius={"xl"}
            ></GridItem>
          </Grid>
        </Box>
      </Flex>
    </div>
  );
}

export default Signup;
