export const options = [ // INVOICE OPTIONS (inside invoiceModal.svelte)
    { id: 0, text: "Within 30 Days", value: 30 },
    { id: 1, text: "Within 60 Days", value: 60 },
    { id: 2, text: "Within 90 Days", value: 90 },
    { id: 3, text: "Within 120 Days", value: 120 },
];


export const invoiceFilter = [ // for invoice filter located in the index page
    {id: 0, text: "All", value:"all"},
    {id: 1, text: "Paid", value:"paid"},
    {id: 2, text: "Pending", value:"pending"},
    {id: 3, text: "Draft", value:"draft"},
]