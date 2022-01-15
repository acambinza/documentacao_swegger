# configurar o typescript no projecto

yarn tsc --init 

-- vai gerar um arquivo de configuracao do typescript

# add path do typeorm projecto
"typeorm": "ts-node-dev ./node_modules/typeorm/cli.js"

# criando uma migration com TypeORM
yarn typeorm migration:create -n Categories

# executando as migrations
yarn typeorm migration:run




