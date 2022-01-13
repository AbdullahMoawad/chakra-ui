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
    Textarea,
} from "@chakra-ui/react";

export default function HeaderSeaction() {
    return (
        <Box bg={useColorModeValue("gray.50", "inherit")} pl={10} pr={10}>
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
                                <Heading as='h4' size='md' isTruncated>Header Section</Heading>
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
                                            Header Text
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

                                <SimpleGrid columns={6} spacing={6}>
                                    <FormControl as={GridItem} colSpan={[6, 2]}>
                                        <FormLabel
                                            htmlFor="country"
                                            fontSize="md"
                                            fontWeight="md"
                                            color={useColorModeValue("gray.700", "gray.50")}
                                        >
                                            GIF Position
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

                                    <FormControl as={GridItem} colSpan={[6, 2]}>
                                        <FormLabel
                                            htmlFor="country"
                                            fontSize="md"
                                            fontWeight="md"
                                            color={useColorModeValue("gray.700", "gray.50")}
                                        >
                                            Header GIF
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

                                    <FormControl as={GridItem} colSpan={[6, 2]}>
                                        <FormLabel
                                            htmlFor="country"
                                            fontSize="md"
                                            fontWeight="md"
                                            color={useColorModeValue("gray.700", "gray.50")}
                                        >
                                            Market Status
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

                                </SimpleGrid>
                                <SimpleGrid columns={6} spacing={6}>
                                    <FormControl as={GridItem} colSpan={[6, 3]}>
                                        <FormLabel
                                            htmlFor="country"
                                            fontSize="md"
                                            fontWeight="md"
                                            color={useColorModeValue("gray.700", "gray.50")}
                                        >
                                            Submitted By:
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
                                            htmlFor="country"
                                            fontSize="md"
                                            fontWeight="md"
                                            color={useColorModeValue("gray.700", "gray.50")}
                                        >
                                            Written By:
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



                                </SimpleGrid>
                                <SimpleGrid columns={3} spacing={6}>
                                    <FormControl as={GridItem} colSpan={[6, 4]}>
                                        <FormLabel
                                            htmlFor="email_address"
                                            fontSize="md"
                                            fontWeight="md"
                                            color={useColorModeValue("gray.700", "gray.50")}
                                        >
                                            What's in the market:
                                        </FormLabel>
                                        <Textarea
                                            placeholder="you@example.com"
                                            mt={1}
                                            rows={3}
                                            shadow="sm"
                                            focusBorderColor="brand.400"
                                            fontSize={{ sm: "sm" }}
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