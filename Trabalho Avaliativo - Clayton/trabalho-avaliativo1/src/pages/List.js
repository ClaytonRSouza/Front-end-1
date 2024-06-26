
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import "./List.css"


const List = () => {
    const [characters, setCharacters] = useState();
    const [loading, setLoading] = useState(true);

    const getCharacters = async () => {
        try {
            const response = await axios.get('https://hp-api.onrender.com/api/characters')
            setCharacters(response.data.slice(0, 20));
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getCharacters();
    }, [])

    if (loading) {
        return <div>Carregando...</div>
    }

    return (
        <div className="listContainer">
            <h1>Personagens de Harry Potter</h1>
            <div className="charactersGrid">
                {characters.map((character) => (
                    <li key={character.id} className="characterCard">
                        <Link to={`/character/${character.id}`} color="blanchedalmond">
                            <img src={character.image} alt={character.name} className="characterImg" />
                            <h2>{character.name}</h2>
                            <h4>{character.actor}</h4>
                        </Link>
                    </li>
                ))}
            </div>
        </div>
    );
}

export default List;