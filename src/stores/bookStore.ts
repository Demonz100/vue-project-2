import { defineStore } from "pinia";

export const useBookStore = defineStore('bookStore',{
    state: () => ({
        books: [
            'Vue 2 - Advanced Guide',
            'Vue 3 - Basic Guide',
            'Vue 4 - The Mystery'
        ]
    })
})