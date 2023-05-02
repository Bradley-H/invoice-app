import type { PageServerLoad } from './$types';
import dotenv from 'dotenv';
import { convertDate } from '../../store/functionStore';
import mongoose from 'mongoose'
dotenv.config();


export const load = (async (params, Request ) => {

    console.log(params, Request);
    

    // let inv = new Invoice({
    //     id: "RXGT3",
    //     clientName: "Henry",
    //     clientEmail: "abc123@yahoo.com",
    //     status: "paid",
    //     due: new Date(),
        
    //     total: 100,
    //     senderAddress: {
    //         street: "123 Main St",
    //         city: "New York",
    //         postCode: "12345",
    //         country: "USA"
    //     },
    //     clientAddress: {
    //         street: "123 Main St",
    //         city: "New York",
    //         postCode: "12345",
    //         country: "USA"
    //     },
    //     items: [
    //         {
    //             name: "Item 1",
    //             quantity: 1,
    //             price: 100,
    //             total: 100
    //         },
    //         {
    //             name: "Item 2",
    //             quantity: 1,
    //             price: 100,
    //             total: 100
    //         }
    //     ],
    //     createdAt: new Date(),
    //     paymentTerms: 30,
    //     paymentDue: new Date(),
    //     description: "This is a description"
    // });

    return {};
}) satisfies PageServerLoad;