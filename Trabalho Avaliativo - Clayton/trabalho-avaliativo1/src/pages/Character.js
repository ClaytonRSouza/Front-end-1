import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Card, CardBody, CardHeader, Flex, Heading } from "@chakra-ui/react"
import "./Character.css"

const Character = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState();
    const [loading, setLoading] = useState(true);



    useEffect(() => {
        const characterDetails = async () => {
            try {
                const response = await axios.get(`https://hp-api.onrender.com/api/characters`);
                const foundCharacter = response.data.find(char => char.id === id)
                if (foundCharacter) {
                    setCharacter(foundCharacter)
                } else {
                    console.error("Perssonagem não encontrado");
                }
            } catch (error) {
                console.error('Erro ao buscar os detalhes...', error)
            } finally {
                setLoading(false)
            }

        };
        characterDetails();

    }, [id]);

    if (loading) {
        return (
            <div>Carregando...</div>
        )
    }

    return (
        <div className="characterContainer">
            <Card>
                <Box>
                    <Flex justifyContent="center">
                        <Card
                            marginTop={8}
                            maxWidth={400}
                            className="cardContainer"
                        >
                            <CardHeader>
                                <Heading size="lg">{character.name}</Heading>
                            </CardHeader>
                            <CardBody>
                                <img src={character.image} alt={character.name} style={{ maxWidth: '250px', height: 'auto' }} className="cardContainerImg" />
                                <Flex direction="column" gap={4} alignItems="flex-start">
                                    <h3>Details:</h3>
                                    <Box>House: {character.house}</Box>
                                    <Box>Date of birth: {character.dateOfBirth}</Box>
                                    <Box>Ancestry: {character.ancestry}</Box>
                                    <Box>Patronus: {character.patronus}</Box>
                                </Flex>
                            </CardBody>
                        </Card>
                    </Flex>
                </Box>
            </Card>
        </div>
    );
}

export default Character;