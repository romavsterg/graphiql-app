import { HttpResponse, http } from 'msw';
import { trevobladesData } from './data';

const allFieldsTrevoblades = trevobladesData;

export const handlers = [
  http.get('https://countries.trevorblades.com/graphql', () => {
    return HttpResponse.json(allFieldsTrevoblades);
  }),
  http.get('https://swapi-graphql.netlify.app/.netlify/functions/index', () => {
    return HttpResponse.json(allFieldsTrevoblades);
  }),
];
