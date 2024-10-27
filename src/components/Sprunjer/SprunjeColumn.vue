<script setup lang="ts">
import { inject } from 'vue'
import type { Sprunjer } from '@userfrosting/sprinkle-core/sprunjer'
const sprunjer = inject('sprunjer') as Sprunjer
</script>

<template>
    <td>
        <slot :sprunjer="sprunjer" />
    </td>
</template>
