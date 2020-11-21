require('dotenv').config({
  path: require('path').join(__dirname, '../../../.env'),
});
import db, { ROLES } from '@newspaper/server-postgres';
const { NODE_ENV } = process.env;

export function createMockUsers() {
  if (NODE_ENV === 'development') {
    db.sequelize.sync({ force: true }).then(() => {
      initial();
    });
    function initial() {
      createRoles();
      createUsers();
    }
  } else {
    db.sequelize.sync();
  }
}

function createRoles() {
  const Role = db.Role;
  Role.create({
    id: 1,
    name: ROLES.user,
  });

  Role.create({
    id: 2,
    name: ROLES.moderator,
  });

  Role.create({
    id: 3,
    name: ROLES.admin,
  });
}

function createUsers() {
  const User = db.User;
  User.create({
    username: 'utku',
    password: '1',
    email: 'utku',
  });
}
