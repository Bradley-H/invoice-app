import type { Actions } from './$types';

export const actions = {
    default: async (req) => {
        const data = await req.formData();
        const user = await data.get('user');
        const password = await data.get('password');

        return {
            user, password
        }
    }
} satisfies Actions;