<script lang="ts">
	import Icon from "@iconify/svelte";

   let todos = [
      {content: 'Go to the gym!', isEditing: false, checked: false}, 
      {content: 'Cook pasta for dinner!', isEditing: false, checked: false}
   ]

   let newTodoContent:string

   const setEditing = (i:number, isEditing:boolean) => todos[i].isEditing = isEditing
   const addTodo = () => todos = [...todos, {content:newTodoContent, isEditing: false, checked: false}]
   const deleteTodo = (i:number) => todos = todos.filter(todo => todos.indexOf(todo) !== i)
</script>

<Icon icon="ph:anchor-simple-thin" />
<Icon icon="mdi:alarm" class="text-orange-400" />
<Icon icon="logos:vue" class="text-3xl" />
<Icon icon="carbon:sun" class="text-3xl" />

<div class="grid gap-5">
   <h2 class="text-red">TODO LIST</h2>
   <!-- add todo -->
   <div>
      <h3>Add a todo</h3>
      <div>
         <input type="text" bind:value={newTodoContent}>
         <button on:click={addTodo}>Add</button>
      </div>
   </div>

   <!-- todos container -->
   <div>
      {#each todos as todo, i }
      <div class="flex gap-1 items-center my-2.5">
         <input type="checkbox" bind:checked={todo.checked}>
         {#if todo.isEditing}
            <input type="text" bind:value={todo.content}>
         {:else}
            <p style="margin: 0;">{todo.content}</p>
         {/if}

         <div>
            {#if todo.isEditing}
               <button on:click={()=> setEditing(i, false)}>Save</button>
            {:else}
               <button on:click={()=> setEditing(i, true)}>Edit</button>
            {/if}
            <button on:click={() => deleteTodo(i)}>Delete</button>
         </div>
      </div>
      {/each}
   </div>
</div>