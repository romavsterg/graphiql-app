export const trevobladesData = {
  data: {
    __schema: {
      types: [
        {
          name: 'Boolean',
          fields: null,
        },
        {
          name: 'Continent',
          fields: [
            {
              name: 'code',
              type: {
                name: null,
                ofType: {
                  name: 'ID',
                  fields: null,
                },
              },
            },
            {
              name: 'countries',
              type: {
                name: null,
                ofType: {
                  name: null,
                  fields: null,
                },
              },
            },
            {
              name: 'name',
              type: {
                name: null,
                ofType: {
                  name: 'String',
                  fields: null,
                },
              },
            },
          ],
        },
        {
          name: 'ContinentFilterInput',
          fields: null,
        },
        {
          name: 'Country',
          fields: [
            {
              name: 'awsRegion',
              type: {
                name: null,
                ofType: {
                  name: 'String',
                  fields: null,
                },
              },
            },
            {
              name: 'capital',
              type: {
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'code',
              type: {
                name: null,
                ofType: {
                  name: 'ID',
                  fields: null,
                },
              },
            },
            {
              name: 'continent',
              type: {
                name: null,
                ofType: {
                  name: 'Continent',
                  fields: [
                    {
                      name: 'code',
                    },
                    {
                      name: 'countries',
                    },
                    {
                      name: 'name',
                    },
                  ],
                },
              },
            },
            {
              name: 'currencies',
              type: {
                name: null,
                ofType: {
                  name: null,
                  fields: null,
                },
              },
            },
            {
              name: 'currency',
              type: {
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'emoji',
              type: {
                name: null,
                ofType: {
                  name: 'String',
                  fields: null,
                },
              },
            },
            {
              name: 'emojiU',
              type: {
                name: null,
                ofType: {
                  name: 'String',
                  fields: null,
                },
              },
            },
            {
              name: 'languages',
              type: {
                name: null,
                ofType: {
                  name: null,
                  fields: null,
                },
              },
            },
            {
              name: 'name',
              type: {
                name: null,
                ofType: {
                  name: 'String',
                  fields: null,
                },
              },
            },
            {
              name: 'native',
              type: {
                name: null,
                ofType: {
                  name: 'String',
                  fields: null,
                },
              },
            },
            {
              name: 'phone',
              type: {
                name: null,
                ofType: {
                  name: 'String',
                  fields: null,
                },
              },
            },
            {
              name: 'phones',
              type: {
                name: null,
                ofType: {
                  name: null,
                  fields: null,
                },
              },
            },
            {
              name: 'states',
              type: {
                name: null,
                ofType: {
                  name: null,
                  fields: null,
                },
              },
            },
            {
              name: 'subdivisions',
              type: {
                name: null,
                ofType: {
                  name: null,
                  fields: null,
                },
              },
            },
          ],
        },
        {
          name: 'CountryFilterInput',
          fields: null,
        },
        {
          name: 'Float',
          fields: null,
        },
        {
          name: 'ID',
          fields: null,
        },
        {
          name: 'Int',
          fields: null,
        },
        {
          name: 'Language',
          fields: [
            {
              name: 'code',
              type: {
                name: null,
                ofType: {
                  name: 'ID',
                  fields: null,
                },
              },
            },
            {
              name: 'name',
              type: {
                name: null,
                ofType: {
                  name: 'String',
                  fields: null,
                },
              },
            },
            {
              name: 'native',
              type: {
                name: null,
                ofType: {
                  name: 'String',
                  fields: null,
                },
              },
            },
            {
              name: 'rtl',
              type: {
                name: null,
                ofType: {
                  name: 'Boolean',
                  fields: null,
                },
              },
            },
          ],
        },
        {
          name: 'LanguageFilterInput',
          fields: null,
        },
        {
          name: 'Query',
          fields: [
            {
              name: 'continent',
              type: {
                name: 'Continent',
                ofType: null,
              },
            },
            {
              name: 'continents',
              type: {
                name: null,
                ofType: {
                  name: null,
                  fields: null,
                },
              },
            },
            {
              name: 'countries',
              type: {
                name: null,
                ofType: {
                  name: null,
                  fields: null,
                },
              },
            },
            {
              name: 'country',
              type: {
                name: 'Country',
                ofType: null,
              },
            },
            {
              name: 'language',
              type: {
                name: 'Language',
                ofType: null,
              },
            },
            {
              name: 'languages',
              type: {
                name: null,
                ofType: {
                  name: null,
                  fields: null,
                },
              },
            },
          ],
        },
        {
          name: 'State',
          fields: [
            {
              name: 'code',
              type: {
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'country',
              type: {
                name: null,
                ofType: {
                  name: 'Country',
                  fields: [
                    {
                      name: 'awsRegion',
                    },
                    {
                      name: 'capital',
                    },
                    {
                      name: 'code',
                    },
                    {
                      name: 'continent',
                    },
                    {
                      name: 'currencies',
                    },
                    {
                      name: 'currency',
                    },
                    {
                      name: 'emoji',
                    },
                    {
                      name: 'emojiU',
                    },
                    {
                      name: 'languages',
                    },
                    {
                      name: 'name',
                    },
                    {
                      name: 'native',
                    },
                    {
                      name: 'phone',
                    },
                    {
                      name: 'phones',
                    },
                    {
                      name: 'states',
                    },
                    {
                      name: 'subdivisions',
                    },
                  ],
                },
              },
            },
            {
              name: 'name',
              type: {
                name: null,
                ofType: {
                  name: 'String',
                  fields: null,
                },
              },
            },
          ],
        },
        {
          name: 'String',
          fields: null,
        },
        {
          name: 'StringQueryOperatorInput',
          fields: null,
        },
        {
          name: 'Subdivision',
          fields: [
            {
              name: 'code',
              type: {
                name: null,
                ofType: {
                  name: 'ID',
                  fields: null,
                },
              },
            },
            {
              name: 'emoji',
              type: {
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'name',
              type: {
                name: null,
                ofType: {
                  name: 'String',
                  fields: null,
                },
              },
            },
          ],
        },
        {
          name: '__Directive',
          fields: [
            {
              name: 'name',
              type: {
                name: null,
                ofType: {
                  name: 'String',
                  fields: null,
                },
              },
            },
            {
              name: 'description',
              type: {
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'isRepeatable',
              type: {
                name: null,
                ofType: {
                  name: 'Boolean',
                  fields: null,
                },
              },
            },
            {
              name: 'locations',
              type: {
                name: null,
                ofType: {
                  name: null,
                  fields: null,
                },
              },
            },
            {
              name: 'args',
              type: {
                name: null,
                ofType: {
                  name: null,
                  fields: null,
                },
              },
            },
          ],
        },
        {
          name: '__DirectiveLocation',
          fields: null,
        },
        {
          name: '__EnumValue',
          fields: [
            {
              name: 'name',
              type: {
                name: null,
                ofType: {
                  name: 'String',
                  fields: null,
                },
              },
            },
            {
              name: 'description',
              type: {
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'isDeprecated',
              type: {
                name: null,
                ofType: {
                  name: 'Boolean',
                  fields: null,
                },
              },
            },
            {
              name: 'deprecationReason',
              type: {
                name: 'String',
                ofType: null,
              },
            },
          ],
        },
        {
          name: '__Field',
          fields: [
            {
              name: 'name',
              type: {
                name: null,
                ofType: {
                  name: 'String',
                  fields: null,
                },
              },
            },
            {
              name: 'description',
              type: {
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'args',
              type: {
                name: null,
                ofType: {
                  name: null,
                  fields: null,
                },
              },
            },
            {
              name: 'type',
              type: {
                name: null,
                ofType: {
                  name: '__Type',
                  fields: [
                    {
                      name: 'kind',
                    },
                    {
                      name: 'name',
                    },
                    {
                      name: 'description',
                    },
                    {
                      name: 'specifiedByURL',
                    },
                    {
                      name: 'fields',
                    },
                    {
                      name: 'interfaces',
                    },
                    {
                      name: 'possibleTypes',
                    },
                    {
                      name: 'enumValues',
                    },
                    {
                      name: 'inputFields',
                    },
                    {
                      name: 'ofType',
                    },
                  ],
                },
              },
            },
            {
              name: 'isDeprecated',
              type: {
                name: null,
                ofType: {
                  name: 'Boolean',
                  fields: null,
                },
              },
            },
            {
              name: 'deprecationReason',
              type: {
                name: 'String',
                ofType: null,
              },
            },
          ],
        },
        {
          name: '__InputValue',
          fields: [
            {
              name: 'name',
              type: {
                name: null,
                ofType: {
                  name: 'String',
                  fields: null,
                },
              },
            },
            {
              name: 'description',
              type: {
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'type',
              type: {
                name: null,
                ofType: {
                  name: '__Type',
                  fields: [
                    {
                      name: 'kind',
                    },
                    {
                      name: 'name',
                    },
                    {
                      name: 'description',
                    },
                    {
                      name: 'specifiedByURL',
                    },
                    {
                      name: 'fields',
                    },
                    {
                      name: 'interfaces',
                    },
                    {
                      name: 'possibleTypes',
                    },
                    {
                      name: 'enumValues',
                    },
                    {
                      name: 'inputFields',
                    },
                    {
                      name: 'ofType',
                    },
                  ],
                },
              },
            },
            {
              name: 'defaultValue',
              type: {
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'isDeprecated',
              type: {
                name: null,
                ofType: {
                  name: 'Boolean',
                  fields: null,
                },
              },
            },
            {
              name: 'deprecationReason',
              type: {
                name: 'String',
                ofType: null,
              },
            },
          ],
        },
        {
          name: '__Schema',
          fields: [
            {
              name: 'description',
              type: {
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'types',
              type: {
                name: null,
                ofType: {
                  name: null,
                  fields: null,
                },
              },
            },
            {
              name: 'queryType',
              type: {
                name: null,
                ofType: {
                  name: '__Type',
                  fields: [
                    {
                      name: 'kind',
                    },
                    {
                      name: 'name',
                    },
                    {
                      name: 'description',
                    },
                    {
                      name: 'specifiedByURL',
                    },
                    {
                      name: 'fields',
                    },
                    {
                      name: 'interfaces',
                    },
                    {
                      name: 'possibleTypes',
                    },
                    {
                      name: 'enumValues',
                    },
                    {
                      name: 'inputFields',
                    },
                    {
                      name: 'ofType',
                    },
                  ],
                },
              },
            },
            {
              name: 'mutationType',
              type: {
                name: '__Type',
                ofType: null,
              },
            },
            {
              name: 'subscriptionType',
              type: {
                name: '__Type',
                ofType: null,
              },
            },
            {
              name: 'directives',
              type: {
                name: null,
                ofType: {
                  name: null,
                  fields: null,
                },
              },
            },
          ],
        },
        {
          name: '__Type',
          fields: [
            {
              name: 'kind',
              type: {
                name: null,
                ofType: {
                  name: '__TypeKind',
                  fields: null,
                },
              },
            },
            {
              name: 'name',
              type: {
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'description',
              type: {
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'specifiedByURL',
              type: {
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'fields',
              type: {
                name: null,
                ofType: {
                  name: null,
                  fields: null,
                },
              },
            },
            {
              name: 'interfaces',
              type: {
                name: null,
                ofType: {
                  name: null,
                  fields: null,
                },
              },
            },
            {
              name: 'possibleTypes',
              type: {
                name: null,
                ofType: {
                  name: null,
                  fields: null,
                },
              },
            },
            {
              name: 'enumValues',
              type: {
                name: null,
                ofType: {
                  name: null,
                  fields: null,
                },
              },
            },
            {
              name: 'inputFields',
              type: {
                name: null,
                ofType: {
                  name: null,
                  fields: null,
                },
              },
            },
            {
              name: 'ofType',
              type: {
                name: '__Type',
                ofType: null,
              },
            },
          ],
        },
        {
          name: '__TypeKind',
          fields: null,
        },
      ],
    },
  },
};

export const swapiData = {
  data: {
    __schema: {
      types: [
        {
          name: 'Root',
          fields: [
            {
              name: 'allFilms',
              type: {
                name: 'FilmsConnection',
                ofType: null,
              },
            },
            {
              name: 'film',
              type: {
                name: 'Film',
                ofType: null,
              },
            },
            {
              name: 'allPeople',
              type: {
                name: 'PeopleConnection',
                ofType: null,
              },
            },
            {
              name: 'person',
              type: {
                name: 'Person',
                ofType: null,
              },
            },
            {
              name: 'allPlanets',
              type: {
                name: 'PlanetsConnection',
                ofType: null,
              },
            },
            {
              name: 'planet',
              type: {
                name: 'Planet',
                ofType: null,
              },
            },
            {
              name: 'allSpecies',
              type: {
                name: 'SpeciesConnection',
                ofType: null,
              },
            },
            {
              name: 'species',
              type: {
                name: 'Species',
                ofType: null,
              },
            },
            {
              name: 'allStarships',
              type: {
                name: 'StarshipsConnection',
                ofType: null,
              },
            },
            {
              name: 'starship',
              type: {
                name: 'Starship',
                ofType: null,
              },
            },
            {
              name: 'allVehicles',
              type: {
                name: 'VehiclesConnection',
                ofType: null,
              },
            },
            {
              name: 'vehicle',
              type: {
                name: 'Vehicle',
                ofType: null,
              },
            },
            {
              name: 'node',
              type: {
                name: 'Node',
                ofType: null,
              },
            },
          ],
        },
        {
          name: 'String',
          fields: null,
        },
        {
          name: 'Int',
          fields: null,
        },
        {
          name: 'FilmsConnection',
          fields: [
            {
              name: 'pageInfo',
              type: {
                name: null,
                ofType: {
                  name: 'PageInfo',
                  fields: [
                    {
                      name: 'hasNextPage',
                    },
                    {
                      name: 'hasPreviousPage',
                    },
                    {
                      name: 'startCursor',
                    },
                    {
                      name: 'endCursor',
                    },
                  ],
                },
              },
            },
            {
              name: 'edges',
              type: {
                name: null,
                ofType: {
                  name: 'FilmsEdge',
                  fields: [
                    {
                      name: 'node',
                    },
                    {
                      name: 'cursor',
                    },
                  ],
                },
              },
            },
            {
              name: 'totalCount',
              type: {
                name: 'Int',
                ofType: null,
              },
            },
            {
              name: 'films',
              type: {
                name: null,
                ofType: {
                  name: 'Film',
                  fields: [
                    {
                      name: 'title',
                    },
                    {
                      name: 'episodeID',
                    },
                    {
                      name: 'openingCrawl',
                    },
                    {
                      name: 'director',
                    },
                    {
                      name: 'producers',
                    },
                    {
                      name: 'releaseDate',
                    },
                    {
                      name: 'speciesConnection',
                    },
                    {
                      name: 'starshipConnection',
                    },
                    {
                      name: 'vehicleConnection',
                    },
                    {
                      name: 'characterConnection',
                    },
                    {
                      name: 'planetConnection',
                    },
                    {
                      name: 'created',
                    },
                    {
                      name: 'edited',
                    },
                    {
                      name: 'id',
                    },
                  ],
                },
              },
            },
          ],
        },
        {
          name: 'PageInfo',
          fields: [
            {
              name: 'hasNextPage',
              type: {
                name: null,
                ofType: {
                  name: 'Boolean',
                  fields: null,
                },
              },
            },
            {
              name: 'hasPreviousPage',
              type: {
                name: null,
                ofType: {
                  name: 'Boolean',
                  fields: null,
                },
              },
            },
            {
              name: 'startCursor',
              type: {
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'endCursor',
              type: {
                name: 'String',
                ofType: null,
              },
            },
          ],
        },
        {
          name: 'Boolean',
          fields: null,
        },
        {
          name: 'FilmsEdge',
          fields: [
            {
              name: 'node',
              type: {
                name: 'Film',
                ofType: null,
              },
            },
            {
              name: 'cursor',
              type: {
                name: null,
                ofType: {
                  name: 'String',
                  fields: null,
                },
              },
            },
          ],
        },
        {
          name: 'Film',
          fields: [
            {
              name: 'title',
              type: {
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'episodeID',
              type: {
                name: 'Int',
                ofType: null,
              },
            },
            {
              name: 'openingCrawl',
              type: {
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'director',
              type: {
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'producers',
              type: {
                name: null,
                ofType: {
                  name: 'String',
                  fields: null,
                },
              },
            },
            {
              name: 'releaseDate',
              type: {
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'speciesConnection',
              type: {
                name: 'FilmSpeciesConnection',
                ofType: null,
              },
            },
            {
              name: 'starshipConnection',
              type: {
                name: 'FilmStarshipsConnection',
                ofType: null,
              },
            },
            {
              name: 'vehicleConnection',
              type: {
                name: 'FilmVehiclesConnection',
                ofType: null,
              },
            },
            {
              name: 'characterConnection',
              type: {
                name: 'FilmCharactersConnection',
                ofType: null,
              },
            },
            {
              name: 'planetConnection',
              type: {
                name: 'FilmPlanetsConnection',
                ofType: null,
              },
            },
            {
              name: 'created',
              type: {
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'edited',
              type: {
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'id',
              type: {
                name: null,
                ofType: {
                  name: 'ID',
                  fields: null,
                },
              },
            },
          ],
        },
        {
          name: 'Node',
          fields: [
            {
              name: 'id',
              type: {
                name: null,
                ofType: {
                  name: 'ID',
                  fields: null,
                },
              },
            },
          ],
        },
        {
          name: 'ID',
          fields: null,
        },
        {
          name: 'FilmSpeciesConnection',
          fields: [
            {
              name: 'pageInfo',
              type: {
                name: null,
                ofType: {
                  name: 'PageInfo',
                  fields: [
                    {
                      name: 'hasNextPage',
                    },
                    {
                      name: 'hasPreviousPage',
                    },
                    {
                      name: 'startCursor',
                    },
                    {
                      name: 'endCursor',
                    },
                  ],
                },
              },
            },
            {
              name: 'edges',
              type: {
                name: null,
                ofType: {
                  name: 'FilmSpeciesEdge',
                  fields: [
                    {
                      name: 'node',
                    },
                    {
                      name: 'cursor',
                    },
                  ],
                },
              },
            },
            {
              name: 'totalCount',
              type: {
                name: 'Int',
                ofType: null,
              },
            },
            {
              name: 'species',
              type: {
                name: null,
                ofType: {
                  name: 'Species',
                  fields: [
                    {
                      name: 'name',
                    },
                    {
                      name: 'classification',
                    },
                    {
                      name: 'designation',
                    },
                    {
                      name: 'averageHeight',
                    },
                    {
                      name: 'averageLifespan',
                    },
                    {
                      name: 'eyeColors',
                    },
                    {
                      name: 'hairColors',
                    },
                    {
                      name: 'skinColors',
                    },
                    {
                      name: 'language',
                    },
                    {
                      name: 'homeworld',
                    },
                    {
                      name: 'personConnection',
                    },
                    {
                      name: 'filmConnection',
                    },
                    {
                      name: 'created',
                    },
                    {
                      name: 'edited',
                    },
                    {
                      name: 'id',
                    },
                  ],
                },
              },
            },
          ],
        },
        {
          name: 'FilmSpeciesEdge',
          fields: [
            {
              name: 'node',
              type: {
                name: 'Species',
                ofType: null,
              },
            },
            {
              name: 'cursor',
              type: {
                name: null,
                ofType: {
                  name: 'String',
                  fields: null,
                },
              },
            },
          ],
        },
        {
          name: 'Species',
          fields: [
            {
              name: 'name',
              type: {
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'classification',
              type: {
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'designation',
              type: {
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'averageHeight',
              type: {
                name: 'Float',
                ofType: null,
              },
            },
            {
              name: 'averageLifespan',
              type: {
                name: 'Int',
                ofType: null,
              },
            },
            {
              name: 'eyeColors',
              type: {
                name: null,
                ofType: {
                  name: 'String',
                  fields: null,
                },
              },
            },
            {
              name: 'hairColors',
              type: {
                name: null,
                ofType: {
                  name: 'String',
                  fields: null,
                },
              },
            },
            {
              name: 'skinColors',
              type: {
                name: null,
                ofType: {
                  name: 'String',
                  fields: null,
                },
              },
            },
            {
              name: 'language',
              type: {
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'homeworld',
              type: {
                name: 'Planet',
                ofType: null,
              },
            },
            {
              name: 'personConnection',
              type: {
                name: 'SpeciesPeopleConnection',
                ofType: null,
              },
            },
            {
              name: 'filmConnection',
              type: {
                name: 'SpeciesFilmsConnection',
                ofType: null,
              },
            },
            {
              name: 'created',
              type: {
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'edited',
              type: {
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'id',
              type: {
                name: null,
                ofType: {
                  name: 'ID',
                  fields: null,
                },
              },
            },
          ],
        },
        {
          name: 'Float',
          fields: null,
        },
        {
          name: 'Planet',
          fields: [
            {
              name: 'name',
              type: {
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'diameter',
              type: {
                name: 'Int',
                ofType: null,
              },
            },
            {
              name: 'rotationPeriod',
              type: {
                name: 'Int',
                ofType: null,
              },
            },
            {
              name: 'orbitalPeriod',
              type: {
                name: 'Int',
                ofType: null,
              },
            },
            {
              name: 'gravity',
              type: {
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'population',
              type: {
                name: 'Float',
                ofType: null,
              },
            },
            {
              name: 'climates',
              type: {
                name: null,
                ofType: {
                  name: 'String',
                  fields: null,
                },
              },
            },
            {
              name: 'terrains',
              type: {
                name: null,
                ofType: {
                  name: 'String',
                  fields: null,
                },
              },
            },
            {
              name: 'surfaceWater',
              type: {
                name: 'Float',
                ofType: null,
              },
            },
            {
              name: 'residentConnection',
              type: {
                name: 'PlanetResidentsConnection',
                ofType: null,
              },
            },
            {
              name: 'filmConnection',
              type: {
                name: 'PlanetFilmsConnection',
                ofType: null,
              },
            },
            {
              name: 'created',
              type: {
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'edited',
              type: {
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'id',
              type: {
                name: null,
                ofType: {
                  name: 'ID',
                  fields: null,
                },
              },
            },
          ],
        },
        {
          name: 'PlanetResidentsConnection',
          fields: [
            {
              name: 'pageInfo',
              type: {
                name: null,
                ofType: {
                  name: 'PageInfo',
                  fields: [
                    {
                      name: 'hasNextPage',
                    },
                    {
                      name: 'hasPreviousPage',
                    },
                    {
                      name: 'startCursor',
                    },
                    {
                      name: 'endCursor',
                    },
                  ],
                },
              },
            },
            {
              name: 'edges',
              type: {
                name: null,
                ofType: {
                  name: 'PlanetResidentsEdge',
                  fields: [
                    {
                      name: 'node',
                    },
                    {
                      name: 'cursor',
                    },
                  ],
                },
              },
            },
            {
              name: 'totalCount',
              type: {
                name: 'Int',
                ofType: null,
              },
            },
            {
              name: 'residents',
              type: {
                name: null,
                ofType: {
                  name: 'Person',
                  fields: [
                    {
                      name: 'name',
                    },
                    {
                      name: 'birthYear',
                    },
                    {
                      name: 'eyeColor',
                    },
                    {
                      name: 'gender',
                    },
                    {
                      name: 'hairColor',
                    },
                    {
                      name: 'height',
                    },
                    {
                      name: 'mass',
                    },
                    {
                      name: 'skinColor',
                    },
                    {
                      name: 'homeworld',
                    },
                    {
                      name: 'filmConnection',
                    },
                    {
                      name: 'species',
                    },
                    {
                      name: 'starshipConnection',
                    },
                    {
                      name: 'vehicleConnection',
                    },
                    {
                      name: 'created',
                    },
                    {
                      name: 'edited',
                    },
                    {
                      name: 'id',
                    },
                  ],
                },
              },
            },
          ],
        },
        {
          name: 'PlanetResidentsEdge',
          fields: [
            {
              name: 'node',
              type: {
                name: 'Person',
                ofType: null,
              },
            },
            {
              name: 'cursor',
              type: {
                name: null,
                ofType: {
                  name: 'String',
                  fields: null,
                },
              },
            },
          ],
        },
        {
          name: 'Person',
          fields: [
            {
              name: 'name',
              type: {
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'birthYear',
              type: {
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'eyeColor',
              type: {
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'gender',
              type: {
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'hairColor',
              type: {
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'height',
              type: {
                name: 'Int',
                ofType: null,
              },
            },
            {
              name: 'mass',
              type: {
                name: 'Float',
                ofType: null,
              },
            },
            {
              name: 'skinColor',
              type: {
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'homeworld',
              type: {
                name: 'Planet',
                ofType: null,
              },
            },
            {
              name: 'filmConnection',
              type: {
                name: 'PersonFilmsConnection',
                ofType: null,
              },
            },
            {
              name: 'species',
              type: {
                name: 'Species',
                ofType: null,
              },
            },
            {
              name: 'starshipConnection',
              type: {
                name: 'PersonStarshipsConnection',
                ofType: null,
              },
            },
            {
              name: 'vehicleConnection',
              type: {
                name: 'PersonVehiclesConnection',
                ofType: null,
              },
            },
            {
              name: 'created',
              type: {
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'edited',
              type: {
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'id',
              type: {
                name: null,
                ofType: {
                  name: 'ID',
                  fields: null,
                },
              },
            },
          ],
        },
        {
          name: 'PersonFilmsConnection',
          fields: [
            {
              name: 'pageInfo',
              type: {
                name: null,
                ofType: {
                  name: 'PageInfo',
                  fields: [
                    {
                      name: 'hasNextPage',
                    },
                    {
                      name: 'hasPreviousPage',
                    },
                    {
                      name: 'startCursor',
                    },
                    {
                      name: 'endCursor',
                    },
                  ],
                },
              },
            },
            {
              name: 'edges',
              type: {
                name: null,
                ofType: {
                  name: 'PersonFilmsEdge',
                  fields: [
                    {
                      name: 'node',
                    },
                    {
                      name: 'cursor',
                    },
                  ],
                },
              },
            },
            {
              name: 'totalCount',
              type: {
                name: 'Int',
                ofType: null,
              },
            },
            {
              name: 'films',
              type: {
                name: null,
                ofType: {
                  name: 'Film',
                  fields: [
                    {
                      name: 'title',
                    },
                    {
                      name: 'episodeID',
                    },
                    {
                      name: 'openingCrawl',
                    },
                    {
                      name: 'director',
                    },
                    {
                      name: 'producers',
                    },
                    {
                      name: 'releaseDate',
                    },
                    {
                      name: 'speciesConnection',
                    },
                    {
                      name: 'starshipConnection',
                    },
                    {
                      name: 'vehicleConnection',
                    },
                    {
                      name: 'characterConnection',
                    },
                    {
                      name: 'planetConnection',
                    },
                    {
                      name: 'created',
                    },
                    {
                      name: 'edited',
                    },
                    {
                      name: 'id',
                    },
                  ],
                },
              },
            },
          ],
        },
        {
          name: 'PersonFilmsEdge',
          fields: [
            {
              name: 'node',
              type: {
                name: 'Film',
                ofType: null,
              },
            },
            {
              name: 'cursor',
              type: {
                name: null,
                ofType: {
                  name: 'String',
                  fields: null,
                },
              },
            },
          ],
        },
        {
          name: 'PersonStarshipsConnection',
          fields: [
            {
              name: 'pageInfo',
              type: {
                name: null,
                ofType: {
                  name: 'PageInfo',
                  fields: [
                    {
                      name: 'hasNextPage',
                    },
                    {
                      name: 'hasPreviousPage',
                    },
                    {
                      name: 'startCursor',
                    },
                    {
                      name: 'endCursor',
                    },
                  ],
                },
              },
            },
            {
              name: 'edges',
              type: {
                name: null,
                ofType: {
                  name: 'PersonStarshipsEdge',
                  fields: [
                    {
                      name: 'node',
                    },
                    {
                      name: 'cursor',
                    },
                  ],
                },
              },
            },
            {
              name: 'totalCount',
              type: {
                name: 'Int',
                ofType: null,
              },
            },
            {
              name: 'starships',
              type: {
                name: null,
                ofType: {
                  name: 'Starship',
                  fields: [
                    {
                      name: 'name',
                    },
                    {
                      name: 'model',
                    },
                    {
                      name: 'starshipClass',
                    },
                    {
                      name: 'manufacturers',
                    },
                    {
                      name: 'costInCredits',
                    },
                    {
                      name: 'length',
                    },
                    {
                      name: 'crew',
                    },
                    {
                      name: 'passengers',
                    },
                    {
                      name: 'maxAtmospheringSpeed',
                    },
                    {
                      name: 'hyperdriveRating',
                    },
                    {
                      name: 'MGLT',
                    },
                    {
                      name: 'cargoCapacity',
                    },
                    {
                      name: 'consumables',
                    },
                    {
                      name: 'pilotConnection',
                    },
                    {
                      name: 'filmConnection',
                    },
                    {
                      name: 'created',
                    },
                    {
                      name: 'edited',
                    },
                    {
                      name: 'id',
                    },
                  ],
                },
              },
            },
          ],
        },
        {
          name: 'PersonStarshipsEdge',
          fields: [
            {
              name: 'node',
              type: {
                name: 'Starship',
                ofType: null,
              },
            },
            {
              name: 'cursor',
              type: {
                name: null,
                ofType: {
                  name: 'String',
                  fields: null,
                },
              },
            },
          ],
        },
        {
          name: 'Starship',
          fields: [
            {
              name: 'name',
              type: {
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'model',
              type: {
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'starshipClass',
              type: {
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'manufacturers',
              type: {
                name: null,
                ofType: {
                  name: 'String',
                  fields: null,
                },
              },
            },
            {
              name: 'costInCredits',
              type: {
                name: 'Float',
                ofType: null,
              },
            },
            {
              name: 'length',
              type: {
                name: 'Float',
                ofType: null,
              },
            },
            {
              name: 'crew',
              type: {
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'passengers',
              type: {
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'maxAtmospheringSpeed',
              type: {
                name: 'Int',
                ofType: null,
              },
            },
            {
              name: 'hyperdriveRating',
              type: {
                name: 'Float',
                ofType: null,
              },
            },
            {
              name: 'MGLT',
              type: {
                name: 'Int',
                ofType: null,
              },
            },
            {
              name: 'cargoCapacity',
              type: {
                name: 'Float',
                ofType: null,
              },
            },
            {
              name: 'consumables',
              type: {
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'pilotConnection',
              type: {
                name: 'StarshipPilotsConnection',
                ofType: null,
              },
            },
            {
              name: 'filmConnection',
              type: {
                name: 'StarshipFilmsConnection',
                ofType: null,
              },
            },
            {
              name: 'created',
              type: {
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'edited',
              type: {
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'id',
              type: {
                name: null,
                ofType: {
                  name: 'ID',
                  fields: null,
                },
              },
            },
          ],
        },
        {
          name: 'StarshipPilotsConnection',
          fields: [
            {
              name: 'pageInfo',
              type: {
                name: null,
                ofType: {
                  name: 'PageInfo',
                  fields: [
                    {
                      name: 'hasNextPage',
                    },
                    {
                      name: 'hasPreviousPage',
                    },
                    {
                      name: 'startCursor',
                    },
                    {
                      name: 'endCursor',
                    },
                  ],
                },
              },
            },
            {
              name: 'edges',
              type: {
                name: null,
                ofType: {
                  name: 'StarshipPilotsEdge',
                  fields: [
                    {
                      name: 'node',
                    },
                    {
                      name: 'cursor',
                    },
                  ],
                },
              },
            },
            {
              name: 'totalCount',
              type: {
                name: 'Int',
                ofType: null,
              },
            },
            {
              name: 'pilots',
              type: {
                name: null,
                ofType: {
                  name: 'Person',
                  fields: [
                    {
                      name: 'name',
                    },
                    {
                      name: 'birthYear',
                    },
                    {
                      name: 'eyeColor',
                    },
                    {
                      name: 'gender',
                    },
                    {
                      name: 'hairColor',
                    },
                    {
                      name: 'height',
                    },
                    {
                      name: 'mass',
                    },
                    {
                      name: 'skinColor',
                    },
                    {
                      name: 'homeworld',
                    },
                    {
                      name: 'filmConnection',
                    },
                    {
                      name: 'species',
                    },
                    {
                      name: 'starshipConnection',
                    },
                    {
                      name: 'vehicleConnection',
                    },
                    {
                      name: 'created',
                    },
                    {
                      name: 'edited',
                    },
                    {
                      name: 'id',
                    },
                  ],
                },
              },
            },
          ],
        },
        {
          name: 'StarshipPilotsEdge',
          fields: [
            {
              name: 'node',
              type: {
                name: 'Person',
                ofType: null,
              },
            },
            {
              name: 'cursor',
              type: {
                name: null,
                ofType: {
                  name: 'String',
                  fields: null,
                },
              },
            },
          ],
        },
        {
          name: 'StarshipFilmsConnection',
          fields: [
            {
              name: 'pageInfo',
              type: {
                name: null,
                ofType: {
                  name: 'PageInfo',
                  fields: [
                    {
                      name: 'hasNextPage',
                    },
                    {
                      name: 'hasPreviousPage',
                    },
                    {
                      name: 'startCursor',
                    },
                    {
                      name: 'endCursor',
                    },
                  ],
                },
              },
            },
            {
              name: 'edges',
              type: {
                name: null,
                ofType: {
                  name: 'StarshipFilmsEdge',
                  fields: [
                    {
                      name: 'node',
                    },
                    {
                      name: 'cursor',
                    },
                  ],
                },
              },
            },
            {
              name: 'totalCount',
              type: {
                name: 'Int',
                ofType: null,
              },
            },
            {
              name: 'films',
              type: {
                name: null,
                ofType: {
                  name: 'Film',
                  fields: [
                    {
                      name: 'title',
                    },
                    {
                      name: 'episodeID',
                    },
                    {
                      name: 'openingCrawl',
                    },
                    {
                      name: 'director',
                    },
                    {
                      name: 'producers',
                    },
                    {
                      name: 'releaseDate',
                    },
                    {
                      name: 'speciesConnection',
                    },
                    {
                      name: 'starshipConnection',
                    },
                    {
                      name: 'vehicleConnection',
                    },
                    {
                      name: 'characterConnection',
                    },
                    {
                      name: 'planetConnection',
                    },
                    {
                      name: 'created',
                    },
                    {
                      name: 'edited',
                    },
                    {
                      name: 'id',
                    },
                  ],
                },
              },
            },
          ],
        },
        {
          name: 'StarshipFilmsEdge',
          fields: [
            {
              name: 'node',
              type: {
                name: 'Film',
                ofType: null,
              },
            },
            {
              name: 'cursor',
              type: {
                name: null,
                ofType: {
                  name: 'String',
                  fields: null,
                },
              },
            },
          ],
        },
        {
          name: 'PersonVehiclesConnection',
          fields: [
            {
              name: 'pageInfo',
              type: {
                name: null,
                ofType: {
                  name: 'PageInfo',
                  fields: [
                    {
                      name: 'hasNextPage',
                    },
                    {
                      name: 'hasPreviousPage',
                    },
                    {
                      name: 'startCursor',
                    },
                    {
                      name: 'endCursor',
                    },
                  ],
                },
              },
            },
            {
              name: 'edges',
              type: {
                name: null,
                ofType: {
                  name: 'PersonVehiclesEdge',
                  fields: [
                    {
                      name: 'node',
                    },
                    {
                      name: 'cursor',
                    },
                  ],
                },
              },
            },
            {
              name: 'totalCount',
              type: {
                name: 'Int',
                ofType: null,
              },
            },
            {
              name: 'vehicles',
              type: {
                name: null,
                ofType: {
                  name: 'Vehicle',
                  fields: [
                    {
                      name: 'name',
                    },
                    {
                      name: 'model',
                    },
                    {
                      name: 'vehicleClass',
                    },
                    {
                      name: 'manufacturers',
                    },
                    {
                      name: 'costInCredits',
                    },
                    {
                      name: 'length',
                    },
                    {
                      name: 'crew',
                    },
                    {
                      name: 'passengers',
                    },
                    {
                      name: 'maxAtmospheringSpeed',
                    },
                    {
                      name: 'cargoCapacity',
                    },
                    {
                      name: 'consumables',
                    },
                    {
                      name: 'pilotConnection',
                    },
                    {
                      name: 'filmConnection',
                    },
                    {
                      name: 'created',
                    },
                    {
                      name: 'edited',
                    },
                    {
                      name: 'id',
                    },
                  ],
                },
              },
            },
          ],
        },
        {
          name: 'PersonVehiclesEdge',
          fields: [
            {
              name: 'node',
              type: {
                name: 'Vehicle',
                ofType: null,
              },
            },
            {
              name: 'cursor',
              type: {
                name: null,
                ofType: {
                  name: 'String',
                  fields: null,
                },
              },
            },
          ],
        },
        {
          name: 'Vehicle',
          fields: [
            {
              name: 'name',
              type: {
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'model',
              type: {
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'vehicleClass',
              type: {
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'manufacturers',
              type: {
                name: null,
                ofType: {
                  name: 'String',
                  fields: null,
                },
              },
            },
            {
              name: 'costInCredits',
              type: {
                name: 'Float',
                ofType: null,
              },
            },
            {
              name: 'length',
              type: {
                name: 'Float',
                ofType: null,
              },
            },
            {
              name: 'crew',
              type: {
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'passengers',
              type: {
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'maxAtmospheringSpeed',
              type: {
                name: 'Int',
                ofType: null,
              },
            },
            {
              name: 'cargoCapacity',
              type: {
                name: 'Float',
                ofType: null,
              },
            },
            {
              name: 'consumables',
              type: {
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'pilotConnection',
              type: {
                name: 'VehiclePilotsConnection',
                ofType: null,
              },
            },
            {
              name: 'filmConnection',
              type: {
                name: 'VehicleFilmsConnection',
                ofType: null,
              },
            },
            {
              name: 'created',
              type: {
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'edited',
              type: {
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'id',
              type: {
                name: null,
                ofType: {
                  name: 'ID',
                  fields: null,
                },
              },
            },
          ],
        },
        {
          name: 'VehiclePilotsConnection',
          fields: [
            {
              name: 'pageInfo',
              type: {
                name: null,
                ofType: {
                  name: 'PageInfo',
                  fields: [
                    {
                      name: 'hasNextPage',
                    },
                    {
                      name: 'hasPreviousPage',
                    },
                    {
                      name: 'startCursor',
                    },
                    {
                      name: 'endCursor',
                    },
                  ],
                },
              },
            },
            {
              name: 'edges',
              type: {
                name: null,
                ofType: {
                  name: 'VehiclePilotsEdge',
                  fields: [
                    {
                      name: 'node',
                    },
                    {
                      name: 'cursor',
                    },
                  ],
                },
              },
            },
            {
              name: 'totalCount',
              type: {
                name: 'Int',
                ofType: null,
              },
            },
            {
              name: 'pilots',
              type: {
                name: null,
                ofType: {
                  name: 'Person',
                  fields: [
                    {
                      name: 'name',
                    },
                    {
                      name: 'birthYear',
                    },
                    {
                      name: 'eyeColor',
                    },
                    {
                      name: 'gender',
                    },
                    {
                      name: 'hairColor',
                    },
                    {
                      name: 'height',
                    },
                    {
                      name: 'mass',
                    },
                    {
                      name: 'skinColor',
                    },
                    {
                      name: 'homeworld',
                    },
                    {
                      name: 'filmConnection',
                    },
                    {
                      name: 'species',
                    },
                    {
                      name: 'starshipConnection',
                    },
                    {
                      name: 'vehicleConnection',
                    },
                    {
                      name: 'created',
                    },
                    {
                      name: 'edited',
                    },
                    {
                      name: 'id',
                    },
                  ],
                },
              },
            },
          ],
        },
        {
          name: 'VehiclePilotsEdge',
          fields: [
            {
              name: 'node',
              type: {
                name: 'Person',
                ofType: null,
              },
            },
            {
              name: 'cursor',
              type: {
                name: null,
                ofType: {
                  name: 'String',
                  fields: null,
                },
              },
            },
          ],
        },
        {
          name: 'VehicleFilmsConnection',
          fields: [
            {
              name: 'pageInfo',
              type: {
                name: null,
                ofType: {
                  name: 'PageInfo',
                  fields: [
                    {
                      name: 'hasNextPage',
                    },
                    {
                      name: 'hasPreviousPage',
                    },
                    {
                      name: 'startCursor',
                    },
                    {
                      name: 'endCursor',
                    },
                  ],
                },
              },
            },
            {
              name: 'edges',
              type: {
                name: null,
                ofType: {
                  name: 'VehicleFilmsEdge',
                  fields: [
                    {
                      name: 'node',
                    },
                    {
                      name: 'cursor',
                    },
                  ],
                },
              },
            },
            {
              name: 'totalCount',
              type: {
                name: 'Int',
                ofType: null,
              },
            },
            {
              name: 'films',
              type: {
                name: null,
                ofType: {
                  name: 'Film',
                  fields: [
                    {
                      name: 'title',
                    },
                    {
                      name: 'episodeID',
                    },
                    {
                      name: 'openingCrawl',
                    },
                    {
                      name: 'director',
                    },
                    {
                      name: 'producers',
                    },
                    {
                      name: 'releaseDate',
                    },
                    {
                      name: 'speciesConnection',
                    },
                    {
                      name: 'starshipConnection',
                    },
                    {
                      name: 'vehicleConnection',
                    },
                    {
                      name: 'characterConnection',
                    },
                    {
                      name: 'planetConnection',
                    },
                    {
                      name: 'created',
                    },
                    {
                      name: 'edited',
                    },
                    {
                      name: 'id',
                    },
                  ],
                },
              },
            },
          ],
        },
        {
          name: 'VehicleFilmsEdge',
          fields: [
            {
              name: 'node',
              type: {
                name: 'Film',
                ofType: null,
              },
            },
            {
              name: 'cursor',
              type: {
                name: null,
                ofType: {
                  name: 'String',
                  fields: null,
                },
              },
            },
          ],
        },
        {
          name: 'PlanetFilmsConnection',
          fields: [
            {
              name: 'pageInfo',
              type: {
                name: null,
                ofType: {
                  name: 'PageInfo',
                  fields: [
                    {
                      name: 'hasNextPage',
                    },
                    {
                      name: 'hasPreviousPage',
                    },
                    {
                      name: 'startCursor',
                    },
                    {
                      name: 'endCursor',
                    },
                  ],
                },
              },
            },
            {
              name: 'edges',
              type: {
                name: null,
                ofType: {
                  name: 'PlanetFilmsEdge',
                  fields: [
                    {
                      name: 'node',
                    },
                    {
                      name: 'cursor',
                    },
                  ],
                },
              },
            },
            {
              name: 'totalCount',
              type: {
                name: 'Int',
                ofType: null,
              },
            },
            {
              name: 'films',
              type: {
                name: null,
                ofType: {
                  name: 'Film',
                  fields: [
                    {
                      name: 'title',
                    },
                    {
                      name: 'episodeID',
                    },
                    {
                      name: 'openingCrawl',
                    },
                    {
                      name: 'director',
                    },
                    {
                      name: 'producers',
                    },
                    {
                      name: 'releaseDate',
                    },
                    {
                      name: 'speciesConnection',
                    },
                    {
                      name: 'starshipConnection',
                    },
                    {
                      name: 'vehicleConnection',
                    },
                    {
                      name: 'characterConnection',
                    },
                    {
                      name: 'planetConnection',
                    },
                    {
                      name: 'created',
                    },
                    {
                      name: 'edited',
                    },
                    {
                      name: 'id',
                    },
                  ],
                },
              },
            },
          ],
        },
        {
          name: 'PlanetFilmsEdge',
          fields: [
            {
              name: 'node',
              type: {
                name: 'Film',
                ofType: null,
              },
            },
            {
              name: 'cursor',
              type: {
                name: null,
                ofType: {
                  name: 'String',
                  fields: null,
                },
              },
            },
          ],
        },
        {
          name: 'SpeciesPeopleConnection',
          fields: [
            {
              name: 'pageInfo',
              type: {
                name: null,
                ofType: {
                  name: 'PageInfo',
                  fields: [
                    {
                      name: 'hasNextPage',
                    },
                    {
                      name: 'hasPreviousPage',
                    },
                    {
                      name: 'startCursor',
                    },
                    {
                      name: 'endCursor',
                    },
                  ],
                },
              },
            },
            {
              name: 'edges',
              type: {
                name: null,
                ofType: {
                  name: 'SpeciesPeopleEdge',
                  fields: [
                    {
                      name: 'node',
                    },
                    {
                      name: 'cursor',
                    },
                  ],
                },
              },
            },
            {
              name: 'totalCount',
              type: {
                name: 'Int',
                ofType: null,
              },
            },
            {
              name: 'people',
              type: {
                name: null,
                ofType: {
                  name: 'Person',
                  fields: [
                    {
                      name: 'name',
                    },
                    {
                      name: 'birthYear',
                    },
                    {
                      name: 'eyeColor',
                    },
                    {
                      name: 'gender',
                    },
                    {
                      name: 'hairColor',
                    },
                    {
                      name: 'height',
                    },
                    {
                      name: 'mass',
                    },
                    {
                      name: 'skinColor',
                    },
                    {
                      name: 'homeworld',
                    },
                    {
                      name: 'filmConnection',
                    },
                    {
                      name: 'species',
                    },
                    {
                      name: 'starshipConnection',
                    },
                    {
                      name: 'vehicleConnection',
                    },
                    {
                      name: 'created',
                    },
                    {
                      name: 'edited',
                    },
                    {
                      name: 'id',
                    },
                  ],
                },
              },
            },
          ],
        },
        {
          name: 'SpeciesPeopleEdge',
          fields: [
            {
              name: 'node',
              type: {
                name: 'Person',
                ofType: null,
              },
            },
            {
              name: 'cursor',
              type: {
                name: null,
                ofType: {
                  name: 'String',
                  fields: null,
                },
              },
            },
          ],
        },
        {
          name: 'SpeciesFilmsConnection',
          fields: [
            {
              name: 'pageInfo',
              type: {
                name: null,
                ofType: {
                  name: 'PageInfo',
                  fields: [
                    {
                      name: 'hasNextPage',
                    },
                    {
                      name: 'hasPreviousPage',
                    },
                    {
                      name: 'startCursor',
                    },
                    {
                      name: 'endCursor',
                    },
                  ],
                },
              },
            },
            {
              name: 'edges',
              type: {
                name: null,
                ofType: {
                  name: 'SpeciesFilmsEdge',
                  fields: [
                    {
                      name: 'node',
                    },
                    {
                      name: 'cursor',
                    },
                  ],
                },
              },
            },
            {
              name: 'totalCount',
              type: {
                name: 'Int',
                ofType: null,
              },
            },
            {
              name: 'films',
              type: {
                name: null,
                ofType: {
                  name: 'Film',
                  fields: [
                    {
                      name: 'title',
                    },
                    {
                      name: 'episodeID',
                    },
                    {
                      name: 'openingCrawl',
                    },
                    {
                      name: 'director',
                    },
                    {
                      name: 'producers',
                    },
                    {
                      name: 'releaseDate',
                    },
                    {
                      name: 'speciesConnection',
                    },
                    {
                      name: 'starshipConnection',
                    },
                    {
                      name: 'vehicleConnection',
                    },
                    {
                      name: 'characterConnection',
                    },
                    {
                      name: 'planetConnection',
                    },
                    {
                      name: 'created',
                    },
                    {
                      name: 'edited',
                    },
                    {
                      name: 'id',
                    },
                  ],
                },
              },
            },
          ],
        },
        {
          name: 'SpeciesFilmsEdge',
          fields: [
            {
              name: 'node',
              type: {
                name: 'Film',
                ofType: null,
              },
            },
            {
              name: 'cursor',
              type: {
                name: null,
                ofType: {
                  name: 'String',
                  fields: null,
                },
              },
            },
          ],
        },
        {
          name: 'FilmStarshipsConnection',
          fields: [
            {
              name: 'pageInfo',
              type: {
                name: null,
                ofType: {
                  name: 'PageInfo',
                  fields: [
                    {
                      name: 'hasNextPage',
                    },
                    {
                      name: 'hasPreviousPage',
                    },
                    {
                      name: 'startCursor',
                    },
                    {
                      name: 'endCursor',
                    },
                  ],
                },
              },
            },
            {
              name: 'edges',
              type: {
                name: null,
                ofType: {
                  name: 'FilmStarshipsEdge',
                  fields: [
                    {
                      name: 'node',
                    },
                    {
                      name: 'cursor',
                    },
                  ],
                },
              },
            },
            {
              name: 'totalCount',
              type: {
                name: 'Int',
                ofType: null,
              },
            },
            {
              name: 'starships',
              type: {
                name: null,
                ofType: {
                  name: 'Starship',
                  fields: [
                    {
                      name: 'name',
                    },
                    {
                      name: 'model',
                    },
                    {
                      name: 'starshipClass',
                    },
                    {
                      name: 'manufacturers',
                    },
                    {
                      name: 'costInCredits',
                    },
                    {
                      name: 'length',
                    },
                    {
                      name: 'crew',
                    },
                    {
                      name: 'passengers',
                    },
                    {
                      name: 'maxAtmospheringSpeed',
                    },
                    {
                      name: 'hyperdriveRating',
                    },
                    {
                      name: 'MGLT',
                    },
                    {
                      name: 'cargoCapacity',
                    },
                    {
                      name: 'consumables',
                    },
                    {
                      name: 'pilotConnection',
                    },
                    {
                      name: 'filmConnection',
                    },
                    {
                      name: 'created',
                    },
                    {
                      name: 'edited',
                    },
                    {
                      name: 'id',
                    },
                  ],
                },
              },
            },
          ],
        },
        {
          name: 'FilmStarshipsEdge',
          fields: [
            {
              name: 'node',
              type: {
                name: 'Starship',
                ofType: null,
              },
            },
            {
              name: 'cursor',
              type: {
                name: null,
                ofType: {
                  name: 'String',
                  fields: null,
                },
              },
            },
          ],
        },
        {
          name: 'FilmVehiclesConnection',
          fields: [
            {
              name: 'pageInfo',
              type: {
                name: null,
                ofType: {
                  name: 'PageInfo',
                  fields: [
                    {
                      name: 'hasNextPage',
                    },
                    {
                      name: 'hasPreviousPage',
                    },
                    {
                      name: 'startCursor',
                    },
                    {
                      name: 'endCursor',
                    },
                  ],
                },
              },
            },
            {
              name: 'edges',
              type: {
                name: null,
                ofType: {
                  name: 'FilmVehiclesEdge',
                  fields: [
                    {
                      name: 'node',
                    },
                    {
                      name: 'cursor',
                    },
                  ],
                },
              },
            },
            {
              name: 'totalCount',
              type: {
                name: 'Int',
                ofType: null,
              },
            },
            {
              name: 'vehicles',
              type: {
                name: null,
                ofType: {
                  name: 'Vehicle',
                  fields: [
                    {
                      name: 'name',
                    },
                    {
                      name: 'model',
                    },
                    {
                      name: 'vehicleClass',
                    },
                    {
                      name: 'manufacturers',
                    },
                    {
                      name: 'costInCredits',
                    },
                    {
                      name: 'length',
                    },
                    {
                      name: 'crew',
                    },
                    {
                      name: 'passengers',
                    },
                    {
                      name: 'maxAtmospheringSpeed',
                    },
                    {
                      name: 'cargoCapacity',
                    },
                    {
                      name: 'consumables',
                    },
                    {
                      name: 'pilotConnection',
                    },
                    {
                      name: 'filmConnection',
                    },
                    {
                      name: 'created',
                    },
                    {
                      name: 'edited',
                    },
                    {
                      name: 'id',
                    },
                  ],
                },
              },
            },
          ],
        },
        {
          name: 'FilmVehiclesEdge',
          fields: [
            {
              name: 'node',
              type: {
                name: 'Vehicle',
                ofType: null,
              },
            },
            {
              name: 'cursor',
              type: {
                name: null,
                ofType: {
                  name: 'String',
                  fields: null,
                },
              },
            },
          ],
        },
        {
          name: 'FilmCharactersConnection',
          fields: [
            {
              name: 'pageInfo',
              type: {
                name: null,
                ofType: {
                  name: 'PageInfo',
                  fields: [
                    {
                      name: 'hasNextPage',
                    },
                    {
                      name: 'hasPreviousPage',
                    },
                    {
                      name: 'startCursor',
                    },
                    {
                      name: 'endCursor',
                    },
                  ],
                },
              },
            },
            {
              name: 'edges',
              type: {
                name: null,
                ofType: {
                  name: 'FilmCharactersEdge',
                  fields: [
                    {
                      name: 'node',
                    },
                    {
                      name: 'cursor',
                    },
                  ],
                },
              },
            },
            {
              name: 'totalCount',
              type: {
                name: 'Int',
                ofType: null,
              },
            },
            {
              name: 'characters',
              type: {
                name: null,
                ofType: {
                  name: 'Person',
                  fields: [
                    {
                      name: 'name',
                    },
                    {
                      name: 'birthYear',
                    },
                    {
                      name: 'eyeColor',
                    },
                    {
                      name: 'gender',
                    },
                    {
                      name: 'hairColor',
                    },
                    {
                      name: 'height',
                    },
                    {
                      name: 'mass',
                    },
                    {
                      name: 'skinColor',
                    },
                    {
                      name: 'homeworld',
                    },
                    {
                      name: 'filmConnection',
                    },
                    {
                      name: 'species',
                    },
                    {
                      name: 'starshipConnection',
                    },
                    {
                      name: 'vehicleConnection',
                    },
                    {
                      name: 'created',
                    },
                    {
                      name: 'edited',
                    },
                    {
                      name: 'id',
                    },
                  ],
                },
              },
            },
          ],
        },
        {
          name: 'FilmCharactersEdge',
          fields: [
            {
              name: 'node',
              type: {
                name: 'Person',
                ofType: null,
              },
            },
            {
              name: 'cursor',
              type: {
                name: null,
                ofType: {
                  name: 'String',
                  fields: null,
                },
              },
            },
          ],
        },
        {
          name: 'FilmPlanetsConnection',
          fields: [
            {
              name: 'pageInfo',
              type: {
                name: null,
                ofType: {
                  name: 'PageInfo',
                  fields: [
                    {
                      name: 'hasNextPage',
                    },
                    {
                      name: 'hasPreviousPage',
                    },
                    {
                      name: 'startCursor',
                    },
                    {
                      name: 'endCursor',
                    },
                  ],
                },
              },
            },
            {
              name: 'edges',
              type: {
                name: null,
                ofType: {
                  name: 'FilmPlanetsEdge',
                  fields: [
                    {
                      name: 'node',
                    },
                    {
                      name: 'cursor',
                    },
                  ],
                },
              },
            },
            {
              name: 'totalCount',
              type: {
                name: 'Int',
                ofType: null,
              },
            },
            {
              name: 'planets',
              type: {
                name: null,
                ofType: {
                  name: 'Planet',
                  fields: [
                    {
                      name: 'name',
                    },
                    {
                      name: 'diameter',
                    },
                    {
                      name: 'rotationPeriod',
                    },
                    {
                      name: 'orbitalPeriod',
                    },
                    {
                      name: 'gravity',
                    },
                    {
                      name: 'population',
                    },
                    {
                      name: 'climates',
                    },
                    {
                      name: 'terrains',
                    },
                    {
                      name: 'surfaceWater',
                    },
                    {
                      name: 'residentConnection',
                    },
                    {
                      name: 'filmConnection',
                    },
                    {
                      name: 'created',
                    },
                    {
                      name: 'edited',
                    },
                    {
                      name: 'id',
                    },
                  ],
                },
              },
            },
          ],
        },
        {
          name: 'FilmPlanetsEdge',
          fields: [
            {
              name: 'node',
              type: {
                name: 'Planet',
                ofType: null,
              },
            },
            {
              name: 'cursor',
              type: {
                name: null,
                ofType: {
                  name: 'String',
                  fields: null,
                },
              },
            },
          ],
        },
        {
          name: 'PeopleConnection',
          fields: [
            {
              name: 'pageInfo',
              type: {
                name: null,
                ofType: {
                  name: 'PageInfo',
                  fields: [
                    {
                      name: 'hasNextPage',
                    },
                    {
                      name: 'hasPreviousPage',
                    },
                    {
                      name: 'startCursor',
                    },
                    {
                      name: 'endCursor',
                    },
                  ],
                },
              },
            },
            {
              name: 'edges',
              type: {
                name: null,
                ofType: {
                  name: 'PeopleEdge',
                  fields: [
                    {
                      name: 'node',
                    },
                    {
                      name: 'cursor',
                    },
                  ],
                },
              },
            },
            {
              name: 'totalCount',
              type: {
                name: 'Int',
                ofType: null,
              },
            },
            {
              name: 'people',
              type: {
                name: null,
                ofType: {
                  name: 'Person',
                  fields: [
                    {
                      name: 'name',
                    },
                    {
                      name: 'birthYear',
                    },
                    {
                      name: 'eyeColor',
                    },
                    {
                      name: 'gender',
                    },
                    {
                      name: 'hairColor',
                    },
                    {
                      name: 'height',
                    },
                    {
                      name: 'mass',
                    },
                    {
                      name: 'skinColor',
                    },
                    {
                      name: 'homeworld',
                    },
                    {
                      name: 'filmConnection',
                    },
                    {
                      name: 'species',
                    },
                    {
                      name: 'starshipConnection',
                    },
                    {
                      name: 'vehicleConnection',
                    },
                    {
                      name: 'created',
                    },
                    {
                      name: 'edited',
                    },
                    {
                      name: 'id',
                    },
                  ],
                },
              },
            },
          ],
        },
        {
          name: 'PeopleEdge',
          fields: [
            {
              name: 'node',
              type: {
                name: 'Person',
                ofType: null,
              },
            },
            {
              name: 'cursor',
              type: {
                name: null,
                ofType: {
                  name: 'String',
                  fields: null,
                },
              },
            },
          ],
        },
        {
          name: 'PlanetsConnection',
          fields: [
            {
              name: 'pageInfo',
              type: {
                name: null,
                ofType: {
                  name: 'PageInfo',
                  fields: [
                    {
                      name: 'hasNextPage',
                    },
                    {
                      name: 'hasPreviousPage',
                    },
                    {
                      name: 'startCursor',
                    },
                    {
                      name: 'endCursor',
                    },
                  ],
                },
              },
            },
            {
              name: 'edges',
              type: {
                name: null,
                ofType: {
                  name: 'PlanetsEdge',
                  fields: [
                    {
                      name: 'node',
                    },
                    {
                      name: 'cursor',
                    },
                  ],
                },
              },
            },
            {
              name: 'totalCount',
              type: {
                name: 'Int',
                ofType: null,
              },
            },
            {
              name: 'planets',
              type: {
                name: null,
                ofType: {
                  name: 'Planet',
                  fields: [
                    {
                      name: 'name',
                    },
                    {
                      name: 'diameter',
                    },
                    {
                      name: 'rotationPeriod',
                    },
                    {
                      name: 'orbitalPeriod',
                    },
                    {
                      name: 'gravity',
                    },
                    {
                      name: 'population',
                    },
                    {
                      name: 'climates',
                    },
                    {
                      name: 'terrains',
                    },
                    {
                      name: 'surfaceWater',
                    },
                    {
                      name: 'residentConnection',
                    },
                    {
                      name: 'filmConnection',
                    },
                    {
                      name: 'created',
                    },
                    {
                      name: 'edited',
                    },
                    {
                      name: 'id',
                    },
                  ],
                },
              },
            },
          ],
        },
        {
          name: 'PlanetsEdge',
          fields: [
            {
              name: 'node',
              type: {
                name: 'Planet',
                ofType: null,
              },
            },
            {
              name: 'cursor',
              type: {
                name: null,
                ofType: {
                  name: 'String',
                  fields: null,
                },
              },
            },
          ],
        },
        {
          name: 'SpeciesConnection',
          fields: [
            {
              name: 'pageInfo',
              type: {
                name: null,
                ofType: {
                  name: 'PageInfo',
                  fields: [
                    {
                      name: 'hasNextPage',
                    },
                    {
                      name: 'hasPreviousPage',
                    },
                    {
                      name: 'startCursor',
                    },
                    {
                      name: 'endCursor',
                    },
                  ],
                },
              },
            },
            {
              name: 'edges',
              type: {
                name: null,
                ofType: {
                  name: 'SpeciesEdge',
                  fields: [
                    {
                      name: 'node',
                    },
                    {
                      name: 'cursor',
                    },
                  ],
                },
              },
            },
            {
              name: 'totalCount',
              type: {
                name: 'Int',
                ofType: null,
              },
            },
            {
              name: 'species',
              type: {
                name: null,
                ofType: {
                  name: 'Species',
                  fields: [
                    {
                      name: 'name',
                    },
                    {
                      name: 'classification',
                    },
                    {
                      name: 'designation',
                    },
                    {
                      name: 'averageHeight',
                    },
                    {
                      name: 'averageLifespan',
                    },
                    {
                      name: 'eyeColors',
                    },
                    {
                      name: 'hairColors',
                    },
                    {
                      name: 'skinColors',
                    },
                    {
                      name: 'language',
                    },
                    {
                      name: 'homeworld',
                    },
                    {
                      name: 'personConnection',
                    },
                    {
                      name: 'filmConnection',
                    },
                    {
                      name: 'created',
                    },
                    {
                      name: 'edited',
                    },
                    {
                      name: 'id',
                    },
                  ],
                },
              },
            },
          ],
        },
        {
          name: 'SpeciesEdge',
          fields: [
            {
              name: 'node',
              type: {
                name: 'Species',
                ofType: null,
              },
            },
            {
              name: 'cursor',
              type: {
                name: null,
                ofType: {
                  name: 'String',
                  fields: null,
                },
              },
            },
          ],
        },
        {
          name: 'StarshipsConnection',
          fields: [
            {
              name: 'pageInfo',
              type: {
                name: null,
                ofType: {
                  name: 'PageInfo',
                  fields: [
                    {
                      name: 'hasNextPage',
                    },
                    {
                      name: 'hasPreviousPage',
                    },
                    {
                      name: 'startCursor',
                    },
                    {
                      name: 'endCursor',
                    },
                  ],
                },
              },
            },
            {
              name: 'edges',
              type: {
                name: null,
                ofType: {
                  name: 'StarshipsEdge',
                  fields: [
                    {
                      name: 'node',
                    },
                    {
                      name: 'cursor',
                    },
                  ],
                },
              },
            },
            {
              name: 'totalCount',
              type: {
                name: 'Int',
                ofType: null,
              },
            },
            {
              name: 'starships',
              type: {
                name: null,
                ofType: {
                  name: 'Starship',
                  fields: [
                    {
                      name: 'name',
                    },
                    {
                      name: 'model',
                    },
                    {
                      name: 'starshipClass',
                    },
                    {
                      name: 'manufacturers',
                    },
                    {
                      name: 'costInCredits',
                    },
                    {
                      name: 'length',
                    },
                    {
                      name: 'crew',
                    },
                    {
                      name: 'passengers',
                    },
                    {
                      name: 'maxAtmospheringSpeed',
                    },
                    {
                      name: 'hyperdriveRating',
                    },
                    {
                      name: 'MGLT',
                    },
                    {
                      name: 'cargoCapacity',
                    },
                    {
                      name: 'consumables',
                    },
                    {
                      name: 'pilotConnection',
                    },
                    {
                      name: 'filmConnection',
                    },
                    {
                      name: 'created',
                    },
                    {
                      name: 'edited',
                    },
                    {
                      name: 'id',
                    },
                  ],
                },
              },
            },
          ],
        },
        {
          name: 'StarshipsEdge',
          fields: [
            {
              name: 'node',
              type: {
                name: 'Starship',
                ofType: null,
              },
            },
            {
              name: 'cursor',
              type: {
                name: null,
                ofType: {
                  name: 'String',
                  fields: null,
                },
              },
            },
          ],
        },
        {
          name: 'VehiclesConnection',
          fields: [
            {
              name: 'pageInfo',
              type: {
                name: null,
                ofType: {
                  name: 'PageInfo',
                  fields: [
                    {
                      name: 'hasNextPage',
                    },
                    {
                      name: 'hasPreviousPage',
                    },
                    {
                      name: 'startCursor',
                    },
                    {
                      name: 'endCursor',
                    },
                  ],
                },
              },
            },
            {
              name: 'edges',
              type: {
                name: null,
                ofType: {
                  name: 'VehiclesEdge',
                  fields: [
                    {
                      name: 'node',
                    },
                    {
                      name: 'cursor',
                    },
                  ],
                },
              },
            },
            {
              name: 'totalCount',
              type: {
                name: 'Int',
                ofType: null,
              },
            },
            {
              name: 'vehicles',
              type: {
                name: null,
                ofType: {
                  name: 'Vehicle',
                  fields: [
                    {
                      name: 'name',
                    },
                    {
                      name: 'model',
                    },
                    {
                      name: 'vehicleClass',
                    },
                    {
                      name: 'manufacturers',
                    },
                    {
                      name: 'costInCredits',
                    },
                    {
                      name: 'length',
                    },
                    {
                      name: 'crew',
                    },
                    {
                      name: 'passengers',
                    },
                    {
                      name: 'maxAtmospheringSpeed',
                    },
                    {
                      name: 'cargoCapacity',
                    },
                    {
                      name: 'consumables',
                    },
                    {
                      name: 'pilotConnection',
                    },
                    {
                      name: 'filmConnection',
                    },
                    {
                      name: 'created',
                    },
                    {
                      name: 'edited',
                    },
                    {
                      name: 'id',
                    },
                  ],
                },
              },
            },
          ],
        },
        {
          name: 'VehiclesEdge',
          fields: [
            {
              name: 'node',
              type: {
                name: 'Vehicle',
                ofType: null,
              },
            },
            {
              name: 'cursor',
              type: {
                name: null,
                ofType: {
                  name: 'String',
                  fields: null,
                },
              },
            },
          ],
        },
        {
          name: '__Schema',
          fields: [
            {
              name: 'types',
              type: {
                name: null,
                ofType: {
                  name: null,
                  fields: null,
                },
              },
            },
            {
              name: 'queryType',
              type: {
                name: null,
                ofType: {
                  name: '__Type',
                  fields: [
                    {
                      name: 'kind',
                    },
                    {
                      name: 'name',
                    },
                    {
                      name: 'description',
                    },
                    {
                      name: 'fields',
                    },
                    {
                      name: 'interfaces',
                    },
                    {
                      name: 'possibleTypes',
                    },
                    {
                      name: 'enumValues',
                    },
                    {
                      name: 'inputFields',
                    },
                    {
                      name: 'ofType',
                    },
                  ],
                },
              },
            },
            {
              name: 'mutationType',
              type: {
                name: '__Type',
                ofType: null,
              },
            },
            {
              name: 'subscriptionType',
              type: {
                name: '__Type',
                ofType: null,
              },
            },
            {
              name: 'directives',
              type: {
                name: null,
                ofType: {
                  name: null,
                  fields: null,
                },
              },
            },
          ],
        },
        {
          name: '__Type',
          fields: [
            {
              name: 'kind',
              type: {
                name: null,
                ofType: {
                  name: '__TypeKind',
                  fields: null,
                },
              },
            },
            {
              name: 'name',
              type: {
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'description',
              type: {
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'fields',
              type: {
                name: null,
                ofType: {
                  name: null,
                  fields: null,
                },
              },
            },
            {
              name: 'interfaces',
              type: {
                name: null,
                ofType: {
                  name: null,
                  fields: null,
                },
              },
            },
            {
              name: 'possibleTypes',
              type: {
                name: null,
                ofType: {
                  name: null,
                  fields: null,
                },
              },
            },
            {
              name: 'enumValues',
              type: {
                name: null,
                ofType: {
                  name: null,
                  fields: null,
                },
              },
            },
            {
              name: 'inputFields',
              type: {
                name: null,
                ofType: {
                  name: null,
                  fields: null,
                },
              },
            },
            {
              name: 'ofType',
              type: {
                name: '__Type',
                ofType: null,
              },
            },
          ],
        },
        {
          name: '__TypeKind',
          fields: null,
        },
        {
          name: '__Field',
          fields: [
            {
              name: 'name',
              type: {
                name: null,
                ofType: {
                  name: 'String',
                  fields: null,
                },
              },
            },
            {
              name: 'description',
              type: {
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'args',
              type: {
                name: null,
                ofType: {
                  name: null,
                  fields: null,
                },
              },
            },
            {
              name: 'type',
              type: {
                name: null,
                ofType: {
                  name: '__Type',
                  fields: [
                    {
                      name: 'kind',
                    },
                    {
                      name: 'name',
                    },
                    {
                      name: 'description',
                    },
                    {
                      name: 'fields',
                    },
                    {
                      name: 'interfaces',
                    },
                    {
                      name: 'possibleTypes',
                    },
                    {
                      name: 'enumValues',
                    },
                    {
                      name: 'inputFields',
                    },
                    {
                      name: 'ofType',
                    },
                  ],
                },
              },
            },
            {
              name: 'isDeprecated',
              type: {
                name: null,
                ofType: {
                  name: 'Boolean',
                  fields: null,
                },
              },
            },
            {
              name: 'deprecationReason',
              type: {
                name: 'String',
                ofType: null,
              },
            },
          ],
        },
        {
          name: '__InputValue',
          fields: [
            {
              name: 'name',
              type: {
                name: null,
                ofType: {
                  name: 'String',
                  fields: null,
                },
              },
            },
            {
              name: 'description',
              type: {
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'type',
              type: {
                name: null,
                ofType: {
                  name: '__Type',
                  fields: [
                    {
                      name: 'kind',
                    },
                    {
                      name: 'name',
                    },
                    {
                      name: 'description',
                    },
                    {
                      name: 'fields',
                    },
                    {
                      name: 'interfaces',
                    },
                    {
                      name: 'possibleTypes',
                    },
                    {
                      name: 'enumValues',
                    },
                    {
                      name: 'inputFields',
                    },
                    {
                      name: 'ofType',
                    },
                  ],
                },
              },
            },
            {
              name: 'defaultValue',
              type: {
                name: 'String',
                ofType: null,
              },
            },
          ],
        },
        {
          name: '__EnumValue',
          fields: [
            {
              name: 'name',
              type: {
                name: null,
                ofType: {
                  name: 'String',
                  fields: null,
                },
              },
            },
            {
              name: 'description',
              type: {
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'isDeprecated',
              type: {
                name: null,
                ofType: {
                  name: 'Boolean',
                  fields: null,
                },
              },
            },
            {
              name: 'deprecationReason',
              type: {
                name: 'String',
                ofType: null,
              },
            },
          ],
        },
        {
          name: '__Directive',
          fields: [
            {
              name: 'name',
              type: {
                name: null,
                ofType: {
                  name: 'String',
                  fields: null,
                },
              },
            },
            {
              name: 'description',
              type: {
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'locations',
              type: {
                name: null,
                ofType: {
                  name: null,
                  fields: null,
                },
              },
            },
            {
              name: 'args',
              type: {
                name: null,
                ofType: {
                  name: null,
                  fields: null,
                },
              },
            },
          ],
        },
        {
          name: '__DirectiveLocation',
          fields: null,
        },
      ],
    },
  },
};
