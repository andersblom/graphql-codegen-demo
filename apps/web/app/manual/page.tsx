import client from '../../graphql/client';
import { gql } from '@apollo/client';

const GET_GREETING = gql`
    query GetGreeting {
        greeting
    }
`

export default async function Manual() {
    const res = await client.query({
        query: GET_GREETING,
    });

  return (
    <div>
      <h1>{res.data.greeting}</h1>
    </div>
  );
}

