<script lang="ts">
  import {DirectionKeys, type Stratagem, type Direction} from './strats';
  
  export let strat: Stratagem
  
  function onKeyDown(e: KeyboardEvent) {
    if (e.key in DirectionKeys) {
      // feed the code to the state machine
      console.log(e.key)
    } else {
      console.log('not a direction key')
    }
  }
</script>

<div>
  Key capture! Press a direction key.
</div>


<svelte:window on:keydown|preventDefault={onKeyDown} />
