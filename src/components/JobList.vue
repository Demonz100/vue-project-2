<template>
    <div>
        <div v-for="job in jobs" :key="job.id" class="job">
            <h3>{{ job.title }}</h3>
            <h3>{{ job.location }}</h3>
            <h3>{{ job.salary }}</h3>
        </div>
        <div class="functions">
            <button @click="test('vue2')">Vue2</button>
            <button @click="test('vue3')">Vue3</button>
            <button @click="test('vue4')">Vue4</button>
        </div>
        <div class="books">
            <div v-for="book in books.books" :key="`book-${book}`" class="job">
                <h3>{{ book }}</h3>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import type { PropType, Ref } from 'vue';
import type Job from '@/types/Job';
import { useBookStore } from '@/stores/bookStore'

export default defineComponent({
    props: {
        jobs: {
            required: true,
            type: Array as PropType<Job[]>
        }
    },
    setup() {
        const test = (message:string) => {
            console.log(message);
        }

        // const books: Ref<String[]> = ref([
        //     'Vue 2 - Advanced Guide',
        //     'Vue 3 - Basic Guide',
        //     'Vue 4 - The Mystery'
        // ])

        const books = useBookStore()

        return { test, books }
    },
})
</script>

<style>
.job {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 1.5rem;
    background-color: #ccc;
    border-radius: 8px;
    margin: 10px 0;
}

.functions {
    display: flex;
    justify-content: end;
}

.functions button {
    border: none;
    padding: 0.5rem 1rem;
    background-color: rgb(153, 240, 119);
    border-radius: 8px;
    margin-right: 5px;
}
</style>
