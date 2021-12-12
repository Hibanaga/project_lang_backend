import { IConfigProps } from '../types/config.types';

export const config: IConfigProps = {
  uri:
    process.env.MONGO_URI ||
    `mongodb+srv://hibana_main:Zaxscd1212@clusterprojectlang.jt1vg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  creator_mail: process.env.CREATOR_MAIL || 'coollearn.info@gmail.com',
  creator_pass: process.env.CREATOR_PASS || 'Zaxscd1212',
};
