import Sequelize from 'sequelize';

import dbConfig from '../config/database';
import Aluno from '../models/Aluno';
import User from '../models/User';
import Image from '../models/Image';

const models = [Aluno, User, Image];
const connection = new Sequelize(dbConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
