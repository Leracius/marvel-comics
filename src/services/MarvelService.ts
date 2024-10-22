import axios from "axios";
import { charactersSchema, MarvelSchema } from "../types/MarvelSchema";

const hash = "d382fe98c419fc7cb02a76a38b2102e4";
const apiKey = import.meta.env.VITE_API_KEY;
const baseUrl = "https://gateway.marvel.com:443/v1/public/comics";
const characterUrl = "https://gateway.marvel.com/v1/public/characters";

export const fetchMarvel = async (offsetPos: number, character: string) => {
  const params = {
    characters: character,
    ts: 1,
    apikey: apiKey,
    hash: hash,
    limit: 20,
    offset: offsetPos.toString(),
  };

  try {
    const {
      data: { data },
    } = await axios.get(baseUrl, { params });
    const result = MarvelSchema.safeParse(data);

    if (result.success) {
      // console.log(result.data);

      return result.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const fecthByCharacter = async () => {
  const params = {
    // characters: character,
    ts: 1,
    apikey: apiKey,
    hash: hash,
    limit: 40,
    offset: 0,
  };

  try {
    const {
      data: { data },
    } = await axios.get(characterUrl, { params });
    const result = charactersSchema.safeParse(data);

    if (result.success) {
      return result.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const fecthByCharacterByName = async (searchQuery: string) => {
  const params = {
    nameStartsWith: searchQuery,
    ts: 1,
    apikey: apiKey,
    hash: hash,
    limit: 40,
    offset: 0,
  };

  try {
    const {
      data: { data },
    } = await axios.get(characterUrl, { params });
    const result = charactersSchema.safeParse(data);

    if (result.success) {
      console.log(`mostrando resutlados con ${searchQuery}`);

      return result.data;
    }
  } catch (error) {
    console.log(error);
  }
};
