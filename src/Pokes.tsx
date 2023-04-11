import Poke from './Poke'
import axios from 'axios';
import testData from './testData.json'




function fetchPokes(useApi: boolean) {
    if (useApi) {
        let data = JSON.stringify({
            query: `{
                pokemon_v2_pokemon(limit: 24) {
                  name
                  id
                  height
                  order
                  pokemon_species_id
                  weight
                  pokemon_v2_pokemontypes {
                    pokemon_v2_type {
                      name
                      id
                    }
                  }
                }
              }`,
            variables: {}
        });

        let config = {
            method: 'post',
            url: 'https://beta.pokeapi.co/graphql/v1beta',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };
        console.log("fetching real data..");

        return axios(config)
            .then(function ({ data }: { data: Response }) {
                console.log(data);
                return (data);
            })
            .catch(function (error: any) {
                return (error);
            });
    } else {
        console.log("fetching local data..");

        return testData;
    }
}

function Pokes() {

    let pokes: any = (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1" || window.location.hostname === "") ? fetchPokes(false) : fetchPokes(true);

    let pokelist: any = pokes?.data?.pokemon_v2_pokemon;
    return (
        <div className="Pokes p-6 bg-gray-100">

   



            <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

                {pokelist.map(function (poke: any, i: any) {
                    return <Poke poke={poke} key={i} />;
                })}
                <button
                    type="button"
                    className="relative hover:scale-105 duration-300 block w-full rounded-lg border-2 border-dashed  border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" >
                    <svg className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true" >
                        <path strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 14v20c0 4.418 7.163 8 16 8 1.381 0 2.721-.087 4-.252M8 14c0 4.418 7.163 8 16 8s16-3.582 16-8M8 14c0-4.418 7.163-8 16-8s16 3.582 16 8m0 0v14m0-4c0 4.418-7.163 8-16 8S8 28.418 8 24m32 10v6m0 0v6m0-6h6m-6 0h-6" />
                    </svg>
                    <span className="mt-2 block text-sm font-semibold text-gray-900">Add another</span>
                </button>
            </ul>
        </div>

    )
}

export default Pokes