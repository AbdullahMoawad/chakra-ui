import React from "react";
import {
    chakra,
    Box,
    useColorModeValue,
    SimpleGrid,
    GridItem,
    Heading,
    Stack,
    Text,
    FormControl,
    FormLabel,
    Input,
    Button,
    Flex,
    Icon,
    VisuallyHidden,
    Checkbox,
    Textarea,
} from "@chakra-ui/react";

export default function Story() {
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
                                <Heading as='h4' size='md' isTruncated>Story</Heading>
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
                                    <FormControl>
                                        <FormLabel
                                            fontSize="sm"
                                            fontWeight="md"
                                            color={useColorModeValue("gray.700", "gray.50")}
                                        >
                                            Cover photo
                                        </FormLabel>
                                        <Flex
                                            mt={1}
                                            justify="center"
                                            px={6}
                                            pt={5}
                                            pb={6}
                                            borderWidth={2}
                                            borderColor={useColorModeValue("gray.300", "gray.500")}
                                            borderStyle="dashed"
                                            rounded="md"
                                        >
                                            <Stack spacing={1} textAlign="center">
                                                <Icon
                                                    mx="auto"
                                                    boxSize={12}
                                                    color={useColorModeValue("gray.400", "gray.500")}
                                                    stroke="currentColor"
                                                    fill="none"
                                                    viewBox="0 0 48 48"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </Icon>
                                                <Flex
                                                    fontSize="sm"
                                                    color={useColorModeValue("gray.600", "gray.400")}
                                                    alignItems="baseline"
                                                >
                                                    <chakra.label
                                                        htmlFor="file-upload"
                                                        cursor="pointer"
                                                        rounded="md"
                                                        fontSize="md"
                                                        color={useColorModeValue("brand.600", "brand.200")}
                                                        pos="relative"
                                                        _hover={{
                                                            color: useColorModeValue("brand.400", "brand.300"),
                                                        }}
                                                    >
                                                        <span>Upload a file</span>
                                                        <VisuallyHidden>
                                                            <input
                                                                id="file-upload"
                                                                name="file-upload"
                                                                type="file"
                                                            />
                                                        </VisuallyHidden>
                                                    </chakra.label>
                                                    <Text pl={1}>or drag and drop</Text>
                                                </Flex>
                                                <Text
                                                    fontSize="xs"
                                                    color={useColorModeValue("gray.500", "gray.50")}
                                                >
                                                    PNG, JPG, GIF up to 10MB
                                                </Text>
                                            </Stack>
                                        </Flex>
                                    </FormControl>
                                </div>


                                <SimpleGrid columns={3} spacing={6}>
                                    <FormControl as={GridItem} colSpan={[6, 4]}>
                                        <FormLabel
                                            htmlFor="email_address"
                                            fontSize="md"
                                            fontWeight="md"
                                            color={useColorModeValue("gray.700", "gray.50")}
                                        >
                                            Story Content:
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

                                <SimpleGrid columns={3} spacing={6}>
                                    <FormControl as={GridItem} colSpan={[6, 4]}>
                                        <FormLabel
                                            htmlFor="email_address"
                                            fontSize="md"
                                            fontWeight="md"
                                            color={useColorModeValue("gray.700", "gray.50")}
                                        >
                                            Why It Matters:
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

                                <Stack mt={4} spacing={4}>

                                    <Flex alignItems="start">
                                        <Flex alignItems="center" h={5}>
                                            <Checkbox
                                                colorScheme="brand"
                                                id="comments"
                                                rounded="md"
                                            />
                                        </Flex>
                                        <Box ml={3} fontSize="sm">
                                            <chakra.label
                                                htmlFor="comments"
                                                fontWeight="md"
                                                color={useColorModeValue("gray.700", "gray.50")}
                                            >
                                                Enable Tweet
                                            </chakra.label>

                                        </Box>
                                    </Flex>
                                </Stack>
                                <SimpleGrid columns={3} spacing={6}>
                                    <FormControl as={GridItem} colSpan={[6, 4]}>
                                        <FormLabel
                                            htmlFor="email_address"
                                            fontSize="md"
                                            fontWeight="md"
                                            color={useColorModeValue("gray.700", "gray.50")}
                                        >
                                            Tweet Text:
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

                            </Stack>
                            <Box
                                px={{ base: 4, sm: 6 }}
                                py={3}
                                bg={useColorModeValue("gray.50", "gray.900")}
                                textAlign="left"
                            >
                                <Button colorScheme='blue' type='submit'>Save</Button>
                            </Box>
                        </chakra.form>
                    </GridItem>
                </SimpleGrid>
            </Box>

        </Box>
    );
}