import { graphql } from '../gen';

export const GET_GREETING = graphql(`
    query GetGreeting {
        greeting
    }
`)