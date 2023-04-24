import { writable } from 'svelte/store';

export let globalStore = writable({
    theme: "Dark", // status of the current theme // Dark or Light
    modalStatus: null, // status of modal //
    invoices: [], // all invoices,
})