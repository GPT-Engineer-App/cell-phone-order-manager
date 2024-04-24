// Complete the Index page component here
// Use chakra-ui
import { Box, Flex, Heading, Text, Button, Input, Stack, FormControl, FormLabel, Icon, Table, Thead, Tbody, Tr, Th, Td, useToast } from "@chakra-ui/react";
import { FaPlus, FaSearch, FaShippingFast, FaPrint } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleOrderSubmit = () => {
    toast({
      title: "Order Created.",
      description: "The new order has been successfully created.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleShipping = () => {
    toast({
      title: "Order Shipped.",
      description: "The order has been marked as shipped.",
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Box p={5}>
      <Heading mb={4}>Cell-Phone Orders Management System</Heading>

      <Flex direction="column" mb={10}>
        <Heading size="md" mb={2}>
          Create New Order
        </Heading>
        <Stack spacing={3}>
          <FormControl>
            <FormLabel>Order Number</FormLabel>
            <Input placeholder="Enter order number" />
          </FormControl>
          <FormControl>
            <FormLabel>Tracking Number</FormLabel>
            <Input placeholder="Enter tracking number" />
          </FormControl>
          <FormControl>
            <FormLabel>Status</FormLabel>
            <Input placeholder="Enter status" />
          </FormControl>
          <FormControl>
            <FormLabel>Total Cost</FormLabel>
            <Input placeholder="Enter total cost" type="number" />
          </FormControl>
          <Button leftIcon={<FaPlus />} colorScheme="blue" onClick={handleOrderSubmit}>
            Add Order
          </Button>
        </Stack>
      </Flex>

      <Flex direction="column" mb={10}>
        <Heading size="md" mb={2}>
          Batch Search
        </Heading>
        <Flex mb={4}>
          <Input placeholder="Search by order number, make, model" mr={2} />
          <Button leftIcon={<FaSearch />} colorScheme="teal">
            Search
          </Button>
        </Flex>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Batch ID</Th>
              <Th>Order Number</Th>
              <Th>Total Cost</Th>
              <Th>Details</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>001</Td>
              <Td>123456</Td>
              <Td>$1500</Td>
              <Td>iPhone 12 (3 units)</Td>
            </Tr>
            <Tr>
              <Td>002</Td>
              <Td>123457</Td>
              <Td>$4500</Td>
              <Td>Samsung S21 (10 units)</Td>
            </Tr>
          </Tbody>
        </Table>
      </Flex>

      <Flex direction="column">
        <Heading size="md" mb={2}>
          Shipping and Invoicing
        </Heading>
        <Button leftIcon={<FaShippingFast />} colorScheme="purple" onClick={handleShipping}>
          Process Shipment
        </Button>
        <Button leftIcon={<FaPrint />} colorScheme="green" ml={3}>
          Print Invoice
        </Button>
      </Flex>
    </Box>
  );
};

export default Index;
