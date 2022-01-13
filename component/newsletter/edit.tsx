import React from "react";
import {
    chakra,
    Box,
    useColorModeValue,
    SimpleGrid,
    GridItem,
    Heading,
    Stack,
    FormControl,
    FormLabel,
    Input,
    Button,
    Select,
} from "@chakra-ui/react";

export default function  Edit() {
    return (
        <Box bg={useColorModeValue("gray.50", "inherit")} pl={10} pr={10} pb={5} pt={5}>
            <Box>
                <SimpleGrid
                    display={{ base: "initial", md: "grid" }}
                    columns={{ md: 3 }}
                    spacing={{ md: 6 }}
                >

                    <GridItem mt={[1, null, 0]} colSpan={{ md: 6 }}>
                        <chakra.form

                            method="POST"
                            shadow="base"
                            rounded={[null, "md"]}
                            overflow={{ sm: "hidden" }}
                        >
                            <Box
                                px={{ base: 4, sm: 6 }}
                                py={3}
                                bg={useColorModeValue("gray.200", "gray.200")}
                                textAlign="left"
                            >
                                <Heading as='h4' size='md' isTruncated>Edite Newsletter</Heading>
                            </Box>
                            <Stack
                                px={4}
                                py={5}
                                bg={useColorModeValue("white", "gray.700")}
                                spacing={5}
                                p={{ sm: 6 }}
                            >

                                <SimpleGrid columns={3} spacing={6}>
                                    <FormControl as={GridItem} colSpan={[6, 4]}>
                                        <FormLabel
                                            htmlFor="email_address"
                                            fontSize="md"
                                            fontWeight="md"
                                            color={useColorModeValue("gray.700", "gray.50")}
                                        >
                                            Subject
                                        </FormLabel>
                                        <Input
                                            type="text"
                                            name="email_address"
                                            id="email_address"
                                            autoComplete="email"
                                            mt={1}
                                            focusBorderColor="brand.400"
                                            shadow="sm"
                                            size="sm"
                                            w="full"
                                            rounded="md"
                                        />
                                    </FormControl>
                                </SimpleGrid>

                                <div>
                                    <FormControl as={GridItem} colSpan={[6, 4]}>
                                        <FormLabel
                                            htmlFor="email_address"
                                            fontSize="md"
                                            fontWeight="md"
                                            color={useColorModeValue("gray.700", "gray.50")}
                                        >
                                            Intro Text
                                        </FormLabel>
                                        <Input
                                            type="text"
                                            name="email_address"
                                            id="email_address"
                                            autoComplete="email"
                                            mt={1}
                                            focusBorderColor="brand.400"
                                            shadow="sm"
                                            size="sm"
                                            w="full"
                                            rounded="md"
                                        />
                                    </FormControl>
                                </div>

                                <SimpleGrid columns={6} spacing={6}>
                                    <FormControl as={GridItem} colSpan={[6, 3]}>
                                        <FormLabel
                                            htmlFor="country"
                                            fontSize="md"
                                            fontWeight="md"
                                            color={useColorModeValue("gray.700", "gray.50")}
                                        >
                                            Country / Region
                                        </FormLabel>
                                        <Select
                                            id="country"
                                            name="country"
                                            autoComplete="country"
                                            placeholder="Select option"
                                            mt={1}
                                            focusBorderColor="brand.400"
                                            shadow="sm"
                                            size="sm"
                                            w="full"
                                            rounded="md"
                                        >
                                            <option>United States</option>
                                            <option>Canada</option>
                                            <option>Mexico</option>
                                        </Select>
                                    </FormControl>

                                    <FormControl as={GridItem} colSpan={[6, 3]}>
                                        <FormLabel
                                            htmlFor="last_name"
                                            fontSize="md"
                                            fontWeight="md"
                                            color={useColorModeValue("gray.700", "gray.50")}
                                        >
                                            Newsletter Date
                                        </FormLabel>
                                        <Input
                                            type="text"
                                            name="last_name"
                                            id="last_name"
                                            autoComplete="family-name"
                                            mt={1}
                                            focusBorderColor="brand.400"
                                            shadow="sm"
                                            size="sm"
                                            w="full"
                                            rounded="md"
                                        />
                                    </FormControl>

                                </SimpleGrid>
                            </Stack>
                            <Box
                                px={{ base: 4, sm: 6 }}
                                py={3}
                                bg={useColorModeValue("gray.50", "gray.900")}
                                textAlign="left"
                            >
                                <Button colorScheme='blue'>Save</Button>
                            </Box>
                        </chakra.form>
                    </GridItem>
                </SimpleGrid>
            </Box>

        </Box>
    );
}