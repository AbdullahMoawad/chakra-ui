import React from "react";
import {
    chakra,
    Box,
    Flex,
    useColorModeValue,
    SimpleGrid,
    GridItem,
    Heading,
    Text,
    Stack,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftAddon,
    FormHelperText,
    Textarea,
    Avatar,
    Icon,
    Button,
    VisuallyHidden,
    Select,
    Checkbox,
    RadioGroup,
    Radio,
} from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";

export default function CreateNesletter() {
    return (
        <Box bg={useColorModeValue("gray.50", "inherit")} p={10}>
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
                                bg={useColorModeValue("gray.50", "gray.900")}
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
                                            fontSize="sm"
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

                                <SimpleGrid columns={6} spacing={6}>
                                    <FormControl as={GridItem} colSpan={[6, 3]}>
                                        <FormLabel
                                            htmlFor="country"
                                            fontSize="sm"
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
                                            fontSize="sm"
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
            <Box visibility={{ base: "hidden", sm: "visible" }} aria-hidden="true">
                <Box py={5}>
                    <Box
                        borderTop="solid 1px"
                        borderTopColor={useColorModeValue("gray.200", "whiteAlpha.200")}
                    ></Box>
                </Box>
            </Box>

            <Box mt={[10, 0]}>
                <SimpleGrid
                    display={{ base: "initial", md: "grid" }}
                    columns={{ md: 3 }}
                    spacing={{ md: 6 }}
                >
                    <GridItem mt={[1, null, 0]} colSpan={{ md: 2 }}>
                        <chakra.form

                            method="POST"
                            shadow="base"
                            rounded={[null, "md"]}
                            overflow={{ sm: "hidden" }}
                        >
                            <Stack
                                px={4}
                                py={5}
                                p={[null, 6]}
                                bg={useColorModeValue("white", "gray.700")}
                                spacing={6}
                            >
                                <SimpleGrid columns={6} spacing={6}>
                                    <FormControl as={GridItem} colSpan={[1, 3]}>
                                        <FormLabel
                                            htmlFor="country"
                                            fontSize="sm"
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
                                            fontSize="sm"
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





                                    <FormControl as={GridItem} colSpan={6}>
                                        <FormLabel
                                            htmlFor="street_address"
                                            fontSize="sm"
                                            fontWeight="md"
                                            color={useColorModeValue("gray.700", "gray.50")}
                                        >
                                            Street address
                                        </FormLabel>
                                        <Input
                                            type="text"
                                            name="street_address"
                                            id="street_address"
                                            autoComplete="street-address"
                                            mt={1}
                                            focusBorderColor="brand.400"
                                            shadow="sm"
                                            size="sm"
                                            w="full"
                                            rounded="md"
                                        />
                                    </FormControl>

                                    <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
                                        <FormLabel
                                            htmlFor="city"
                                            fontSize="sm"
                                            fontWeight="md"
                                            color={useColorModeValue("gray.700", "gray.50")}
                                        >
                                            City
                                        </FormLabel>
                                        <Input
                                            type="text"
                                            name="city"
                                            id="city"
                                            autoComplete="city"
                                            mt={1}
                                            focusBorderColor="brand.400"
                                            shadow="sm"
                                            size="sm"
                                            w="full"
                                            rounded="md"
                                        />
                                    </FormControl>

                                    <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                                        <FormLabel
                                            htmlFor="state"
                                            fontSize="sm"
                                            fontWeight="md"
                                            color={useColorModeValue("gray.700", "gray.50")}
                                        >
                                            State / Province
                                        </FormLabel>
                                        <Input
                                            type="text"
                                            name="state"
                                            id="state"
                                            autoComplete="state"
                                            mt={1}
                                            focusBorderColor="brand.400"
                                            shadow="sm"
                                            size="sm"
                                            w="full"
                                            rounded="md"
                                        />
                                    </FormControl>

                                    <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                                        <FormLabel
                                            htmlFor="postal_code"
                                            fontSize="sm"
                                            fontWeight="md"
                                            color={useColorModeValue("gray.700", "gray.50")}
                                        >
                                            ZIP / Postal
                                        </FormLabel>
                                        <Input
                                            type="text"
                                            name="postal_code"
                                            id="postal_code"
                                            autoComplete="postal-code"
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
                                textAlign="right"
                            >
                                <Button
                                    type="submit"
                                    colorScheme="brand"
                                    _focus={{ shadow: "" }}
                                    fontWeight="md"
                                >
                                    Save
                                </Button>
                            </Box>
                        </chakra.form>
                    </GridItem>
                </SimpleGrid>
            </Box>

            <Box visibility={{ base: "hidden", sm: "visible" }} aria-hidden="true">
                <Box py={5}>
                    <Box
                        borderTop="solid 1px"
                        borderTopColor={useColorModeValue("gray.200", "whiteAlpha.200")}
                    ></Box>
                </Box>
            </Box>

            <Box mt={[10, 0]}>
                <SimpleGrid
                    display={{ base: "initial", md: "grid" }}
                    columns={{ md: 3 }}
                    spacing={{ md: 6 }}
                >

                    <GridItem mt={[1, null, 0]} colSpan={{ md: 2 }}>
                        <chakra.form

                            method="POST"
                            shadow="base"
                            rounded={[null, "md"]}
                            overflow={{ sm: "hidden" }}
                        >
                            <Stack
                                px={4}
                                py={5}
                                p={[null, 6]}
                                bg={useColorModeValue("white", 'gray.700')}
                                spacing={6}
                            >
                                <chakra.fieldset>
                                    <Box
                                        as="legend"
                                        fontSize="md"
                                        color={useColorModeValue("gray.900", "gray.50")}
                                    >
                                        By Email
                                    </Box>
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
                                                    Comments
                                                </chakra.label>
                                                <Text color={useColorModeValue("gray.500", "gray.400")}>
                                                    Get notified when someones posts a comment on a
                                                    posting.
                                                </Text>
                                            </Box>
                                        </Flex>
                                        <Flex alignItems="start">
                                            <Flex alignItems="center" h={5}>
                                                <Checkbox
                                                    colorScheme="brand"
                                                    id="candidates"
                                                    rounded="md"
                                                />
                                            </Flex>
                                            <Box ml={3} fontSize="sm">
                                                <chakra.label
                                                    htmlFor="candidates"
                                                    fontWeight="md"
                                                    color={useColorModeValue("gray.700", "gray.50")}
                                                >
                                                    Candidates
                                                </chakra.label>
                                                <Text color={useColorModeValue("gray.500", "gray.400")}>
                                                    Get notified when a candidate applies for a job.
                                                </Text>
                                            </Box>
                                        </Flex>
                                        <Flex alignItems="start">
                                            <Flex alignItems="center" h={5}>
                                                <Checkbox
                                                    colorScheme="brand"
                                                    id="offers"
                                                    rounded="md"
                                                />
                                            </Flex>
                                            <Box ml={3} fontSize="sm">
                                                <chakra.label
                                                    htmlFor="offers"
                                                    fontWeight="md"
                                                    color={useColorModeValue("gray.700", "gray.50")}
                                                >
                                                    Offers
                                                </chakra.label>
                                                <Text color={useColorModeValue("gray.500", "gray.400")}>
                                                    Get notified when a candidate accepts or rejects an
                                                    offer.
                                                </Text>
                                            </Box>
                                        </Flex>
                                    </Stack>
                                </chakra.fieldset>
                                <chakra.fieldset>
                                    <Box
                                        as="legend"
                                        fontSize="md"
                                        color={useColorModeValue("gray.900", "gray.50")}
                                    >
                                        Push Notifications
                                        <Text
                                            fontSize="sm"
                                            color={useColorModeValue("gray.500", "gray.400")}
                                        >
                                            These are delivered via SMS to your mobile phone.
                                        </Text>
                                    </Box>
                                    <RadioGroup
                                        fontSize="sm"
                                        color={useColorModeValue("gray.700", "gray.50")}
                                        colorScheme="brand"
                                        mt={4}
                                        defaultValue="1"
                                    >
                                        <Stack spacing={4}>
                                            <Radio spacing={3} value="1">
                                                Everything
                                            </Radio>
                                            <Radio spacing={3} value="2">
                                                Same as email
                                            </Radio>
                                            <Radio spacing={3} value="3">
                                                No push notifications
                                            </Radio>
                                        </Stack>
                                    </RadioGroup>
                                </chakra.fieldset>
                            </Stack>
                            <Box
                                px={{ base: 4, sm: 6 }}
                                py={3}
                                bg={useColorModeValue("gray.50", "gray.900")}
                                textAlign="right"
                            >
                                <Button
                                    type="submit"
                                    colorScheme="brand"
                                    _focus={{ shadow: "" }}
                                    fontWeight="md"
                                >
                                    Save
                                </Button>
                            </Box>
                        </chakra.form>
                    </GridItem>
                </SimpleGrid>
            </Box>
        </Box>
    );
}