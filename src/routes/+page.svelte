<script lang="ts">
  import * as Card from "$lib/components/ui/card";
  import { Quote } from "lucide-svelte";

  type quoteDataArr = [{'id':string,'image':string,'quote':string}]

  const arr = [
    {id: '1', quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequuntur corporis cumque debitis dicta dolorem dolores excepturi, facere fuga laborum laudantium maxime natus nemo nesciunt odio officia porro quaerat quam quis recusandae rem sed soluta sunt tenetur totam voluptas voluptatibus!', image: 'https://placehold.co/100x120'},
    {id: '1', quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequuntur corporis cumque debitis dicta dolorem dolores excepturi, facere fuga laborum laudantium maxime natus nemo nesciunt odio officia porro quaerat quam quis recusandae rem sed soluta sunt tenetur totam voluptas voluptatibus!', image: 'https://placehold.co/100x120'},
    {id: '1', quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequuntur corporis cumque debitis dicta dolorem dolores excepturi, facere fuga laborum laudantium maxime natus nemo nesciunt odio officia porro quaerat quam quis recusandae rem sed soluta sunt tenetur totam voluptas voluptatibus!', image: 'https://placehold.co/100x120'}
    ];
</script>

<div class="container mx-auto">
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-8">
    {#each arr as a}
    <div class="relative">
      <Card.Root class="text-black flex overflow-clip">
        <Quote size="40" class="stroke-sky-400 absolute -top-5 -left-5"></Quote>
        <img class="h-full border-r-8 border-black" src="{a.image}" alt="">
        <Card.Content class="">
          <Card.Quote class="text-sm">
            {a.quote.substring(0,120)}...
          </Card.Quote>
          <Card.Attribution class="text-sm">Garry</Card.Attribution>
        </Card.Content>
      </Card.Root>
    </div>
      
    {/each}
  </div>
</div>

