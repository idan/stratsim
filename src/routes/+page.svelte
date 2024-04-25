<script lang="ts">
    import Keysequence from "$lib/keysequence.svelte";
    import { stratagems } from "$lib/strats";
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<Keysequence strat={stratagems[0]}/>
