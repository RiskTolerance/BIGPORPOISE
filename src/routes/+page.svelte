<script lang="ts">
  import * as Card from "$lib/components/ui/card";
  const arr = [
    1,2,3
    ];
</script>

<div class="container mx-auto">
  <div class="inline-flex flex-col">
    <h1 class="font-serif text-9xl">BIG</h1>
    <h1 class="font-serif text-9xl ml-16">PORPOISE</h1>
  </div>
  
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-8">
    {#each arr as a}
       <Card.Root>
        <Card.Header>
          <Card.Title>Card Title</Card.Title>
          <Card.Description>Card Description</Card.Description>
        </Card.Header>
        <Card.Content>
          <p>Card Content</p>
        </Card.Content>
        <Card.Footer>
          <p>Card Footer</p>
        </Card.Footer>
      </Card.Root>
    {/each}
    
  </div>
</div>

