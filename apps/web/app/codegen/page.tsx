import client from '../../graphql/client';
import { GET_GREETING } from '../../graphql/queries/MyQuery.query'

export default async function Codegen() {
    const res = await client.query({
        query: GET_GREETING,
    });

    // where did the type-defs go!? ☁

  return (
    <div>
      <h1>{res.data.greeting}</h1>
    </div>
  );
}
