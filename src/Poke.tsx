


function Poke({ poke }: {
    poke: {
        name: any;
        height: any;
        weight: any;
        id: any; pokemon_v2_pokemontypes: any
    }
}) {


    let types: any = poke.pokemon_v2_pokemontypes;

    let pokeid = poke.id;


    let typemap: any = { "grass": { "bg": "green-500", "font": "text-white" }, "poison": { "bg": "green-700", "font": "text-white" }, "fire": { "bg": "red-500", "font": "text-white" }, "flying": { "bg": "blue-400", "font": "text-white" }, "water": { "bg": "blue-700", "font": "text-white" }, "bug": { "bg": "green-800", "font": "text-white" }, "normal": { "bg": "gray-200", "font": "" } };

    return (

        <li key={pokeid} className=" divide-y divide-gray-200 rounded-lg bg-white shadow drop-shadow-l hover:scale-105 duration-300">
            <div className="flex w-full items-center justify-between space-x-6 p-6">
                <div className="flex-1 truncate">
                    <div className="flex items-center space-x-3">
                        <img className="h-25 w-25 flex-shrink-0 rounded-full bg-gray-300" src={"./src/assets/sprites/" + pokeid + ".png"} alt="" />
                        <div>

                            <h3 className="truncate text-sm m-1 font-bold text-gray-900">{poke.name.toUpperCase()}</h3>


                            {types.map((type: {
                                pokemon_v2_type: {
                                    name: any; id: any, pokemon_v2_type: { name: String, id: any }
                                }
                            }) => (
                                < span key={type.pokemon_v2_type.id} className={`mx-1 inline-block flex-shrink-0 rounded-full bg-${typemap[type.pokemon_v2_type.name].bg} px-2 pb-1 py-0.5 text-xs font-medium ${typemap[type.pokemon_v2_type.name].font}`} >
                                    {type.pokemon_v2_type.name}
                                </span>
                            ))}


                        </div>
                    </div>
                    <div>
                        <p className="m-1 truncate text-sm text-gray-500">Totally legit description about this one</p>
                        <div className=" m-1 flex flex-row items-center justify-between">

                            <div className="sm:py-4 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
                                </svg>

                                {poke.height}m</div>
                            <div className="sm:py-4 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
                                </svg>

                                {poke.weight}Kg</div>
                            <div className="sm:py-4 flex items-center">
                                <button type="button" className=" rounded bg-gray-800 px-6 py-2 text-xs font-semibold text-white shadow-sm hover:bg-green-500 duration-150">
                                    <span className="inline-flex">

                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                                        </svg>
                                        Buy
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li >



    )
}

export default Poke