"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Post",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://us1.prisma.sh/public-ceruleanforger-651/todo-in-react-apollo/dev`
});
exports.prisma = new exports.Prisma();
var models = [
  {
    name: "Post",
    embedded: false
  }
];
