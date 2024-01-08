import { HttpResponse, http } from 'msw';
import { swapiData, trevobladesData } from './data';

const allFieldsTrevoblades = trevobladesData;
const allFieldsSwapi = swapiData;

export const handlers = [
  http.get('https://countries.trevorblades.com/graphql', () => {
    return HttpResponse.json(allFieldsTrevoblades);
  }),
  http.get('https://swapi-graphql.netlify.app/.netlify/functions/index', () => {
    return HttpResponse.json(allFieldsSwapi);
  }),
];
