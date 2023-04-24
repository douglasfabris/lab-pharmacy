# Pharmacy Central System

Este repositório contem o projeto de desenvolvimento de um sistema para a empresa LabPharmacy Ink. chamado Pharmacy Central System. Esse sistema conta com com uma tela de login e cadastro de usuário (utilizando um sistema de autenticação simples por json-server, sem criptografia), uma página de cadastro de farmácias, uma página com um mapa para visualizar as farmácias cadastradas e as suas informações, uma página de cadastro de informações de medicamentos e uma página para visualizar esses medicamentos. O sistema foi desenvolvido com front-end em React, e as informações de usuários, medicamentos e farmácias são armazenadas num arquivo de base de dados (data.json), que é lido através do simulador de servidor "json-server".

# Utilização

Para utilizar esse projeto, primeiramente clone esse repositório:

```bash
git clone git@github.com:douglasfabris/lab-pharmacy.git
```

Instale a dependencias através do seguinte comando na pasta do projeto:

```bash
npm install
```

Inicie o servidor JSON para simular um banco de dados:

```bash
json-server --watch src/data/data.json
```

Rode o projeto

```bash
npm run dev
```

# Extras

Em relação às funcionalidades extras e possíveis pontos de melhor, o projeto conta com:

- Responsividade utilizando Flexbox e Grid Layout. Não foram utilizados frameworks externos, como bootstrap. No entanto alguns pontos precisam de melhoria, como a responsividade do mapa e da barra de navegação.

- A página de cadastro do usuário é uma funcionalidade extra, sendo cadastrado no arquivo data.json. Os cadastros são utilizados para realizar o login na página inicial.

- O projeto conta com uma página que mostra a localização de todas as farmácias cadastradas em um mapa. As coordenadas do mapa são baseadas no endereço fornecido, sendo utilizado a API Nominatim para fazer a consulta à latitude e longitude.

- O dado do usuário logado fica guardado num estado no Context API, o que significa que ele não persiste caso a página seja atualizada. Para resolver esse problema, essa informação teria que ser guardada no próprio servidor ou no navegador (localStorage ou cookies, por exemplo)

- O sistema de autentificação do usuário é feito através de um arquivo de base de dados utilizando um fetch comum, sem nenhum tipo de criptografia. Esse sistema é extremamente inseguro, e foi utilizado somente para fins de demonstração nesse projeto.

- O tratamento de erros das respostas da API deve ser melhorada, com aviso ao usuário do que ocorreu errado e possível solução. Atualmente, o projeto mostra o erro (se presente) no console do navegador.

---

Desenvolvido por Douglas Fabris como projeto de avaliação do Módulo 1 do curso de FullStack (turma Itaguaçu) do FloripaMaisTec.
