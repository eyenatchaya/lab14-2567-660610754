"use client";
import { Container, Text, Title,Rating,Space,Textarea,Button,Divider,Group,Pagination} from "@mantine/core";

export default function Home() {
  return (
    <Container size="600px">
      <Title order={2} >Food Review 🍕</Title>

      <Title order={4} mt="sm">Your rating</Title>
      <Rating defaultValue={0} size="lg"/>

      <Textarea
        label="Your review"
        placeholder="Do you enjoy eating?"
        mt="xs"
        autosize
        minRows={3.4}
      />
      <Button variant="filled" color="orange" mt="xs">Submit Review</Button>


      <Divider size="xs" mt="xs" my="md"/>

      <Group justify="center" >
        <Title order={4}>Elon Musk</Title>
        <Rating value={5} readOnly size="sm"/>
      </Group>

      <Text ta="center" c="dimmed" size="sm">
        Best pizza in this world. I give you X score.
      </Text>

      <Divider size="xs" my="md"/>

      <Group justify="center" >
        <Title order={4}>Mark Zuck</Title>
        <Rating value={4} readOnly size="sm"/>
      </Group>

      <Text ta="center" c="dimmed" size="sm">
        My favourite part is pepperoni
      </Text>
      
      <Group justify="center" my="md">
        <Pagination total={20} color="orange"/>
      </Group>
      
      <Text ta="center" my="sm" c="dimmed" size="sm">
        Copyright © 2024 Natchaya Palee 660610754
      </Text>
      
      
    </Container>
  );
}