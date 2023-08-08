// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Partida, User, MixJSON, ControlJSON } = initSchema(schema);

export {
  Partida,
  User,
  MixJSON,
  ControlJSON
};