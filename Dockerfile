# Etapa 1: Construção da imagem
# Alteração aqui para a versão padrão x86_64
FROM node:18-alpine AS build  

# Definindo o diretório de trabalho dentro do container
WORKDIR /app

# Copia o arquivo package.json e package-lock.json para instalar as dependências
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia o restante dos arquivos do projeto para o diretório de trabalho
COPY . .

# Etapa 2: Imagem final para produção
# Alteração aqui para a versão padrão x86_64
FROM node:18-alpine  

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia as dependências e o código do container de build
COPY --from=build /app /app

# Definir o volume para persistir os dados do SQLite
VOLUME ["/database"]

# Exponha a porta em que a aplicação irá rodar
EXPOSE 4000

# Comando para rodar a aplicação Node.js
CMD ["node", "./src/app.js"]
