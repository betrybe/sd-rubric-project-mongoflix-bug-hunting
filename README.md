# Boas vindas ao repositório do projeto Mongoflix Bug Hunting!

Você já usa o GitHub diariamente para desenvolver os exercícios, certo? Agora, para desenvolver os projetos, você deverá seguir as instruções a seguir. Fique atento a cada passo e, se tiver qualquer dúvida, nos envie por _Slack_! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir deste repositório, utilizando uma branch específica e um _Pull Request_ para colocar seus códigos.

---

## Instruções para entregar seu projeto:

### ANTES DE COMEÇAR A DESENVOLVER:

1. Clone o repositório
  * `git clone git@github.com:tryber/sd-0x-project-mongoflix-bug-hunting.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd sd-0x-project-mongoflix-bug-hunting`

2. Crie uma branch a partir da branch `master`
  * Verifique que você está na branch `master`
    * Exemplo: `git branch`
  * Se não estiver, mude para a branch `master`
    * Exemplo: `git checkout master`
  * Agora crie uma branch à qual você vai submeter os `commits` do seu projeto
    * Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
    * Exemplo: `git checkout -b seu-nome-mongoflix-bug-hunting`

3. Adicione as mudanças ao _stage_ do Git e faça um `commit`
  * Verifique que as mudanças ainda não estão no _stage_
    * Exemplo: `git status` (deve aparecer o arquivo que você alterou como desafio1.js)
  * Adicione o novo arquivo ao _stage_ do Git
      * Exemplo:
        * `git add .` (adicionando arquivo de solução _challenges/desafio1.js_ para desafio 1)
        * `git status` (deve aparecer listado o arquivo _challenges/desafio1.js_ em verde)
  * Faça o `commit` inicial
      * Exemplo:
        * `git commit -m 'iniciando o projeto MongoDB mongoflix'` (fazendo o primeiro commit)
        * `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

4. Adicione a sua branch com o novo `commit` ao repositório remoto
  * Usando o exemplo anterior: `git push -u origin seu-nome-mongoflix-bug-hunting`

6. Crie um novo `Pull Request` _(PR)_
  * Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-0x-project-mongoflix-bug-hunting/pulls)
  * Clique no botão verde _"New pull request"_
  * Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
  * Clique no botão verde _"Create pull request"_
  * Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
  * **Não se preocupe em preencher mais nada por enquanto!**
  * Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-0x-project-mongoflix-bug-hunting/pulls) e confira que o seu _Pull Request_ está criado

---

## O que deverá ser desenvolvido?

Uma equipe de pessoas desenvolvedoras estava encarregada de criar relatórios a partir de um banco de dados de filmes.

Porém, a equipe que estava encarregada não conhecia muito sobre Mongo. Com isso, as queries para gerar esses relatórios possuem bugs que fez alguns relatórios apresentarem dados errados ou mesmo não funcionarem,

Dito isso, vocês foram selecionados para este desafio, por já conhecerem o Mongo.

Sendo assim, vocês estão encarregados desta demanda de retificar os relatório. A retificação consiste em encontrar e corrigir os famigerados bugs nas queries.

Para isso você deve corrigir cada um dos arquivos do desafio 1 a 7 a fim de que eles atendam os requisitos necessários e que retornem os dados solicitados. Para confirmar que os dados estão corretos, compare cada um dos resultados com o respectivo arquivo existente em `.trybe/expected-results`.

---

# Instruções para restaurar o banco de dados `mongoflix`

1. Abra o terminal e conecte-se à sua instância local do **MongoDB**. Se você receber uma mensagem de erro com uma mensagem como ***Connection refused***, tente reiniciar sua instância ([veja como fazer isso aqui](https://course.betrybe.com/back-end/mongodb/introduction/#conectando)).

2. Agora que você tem certeza de que a sua instância está no ar e que você está conectado a ela, digite `exit`. Você voltará ao terminal para iniciar a importação dos dados.

3. Na raiz do diretório do projeto, execute o seguinte comando que fará a restauração da base de dados `mongoflix`:
    ```sh
    DBNAME=mongoflix ./scripts/resetdb.sh assets
    ```

  * A execução desse script criará um banco de dados chamado `mongoflix` e importará todas as suas coleções.

⚠️ Como tanto esse script quanto o script de execução local dos testes (mostrado na [seção seguinte](#implementações-técnicas)), **restauram a base de dados `mongoflix`**, se atente a salvar seu progresso nos arquivos de desafio! ⚠️

---

## Implementações técnicas

Para executar localmente os testes, é preciso escrever o seguinte comando no seu terminal, estando na raiz do diretório do projeto:
```sh
./scripts/evaluate.sh
```

Esse script passará por **todos os desafios** e imprimirá um relatório indicando se passou ou não para cada desafio.

⚠️ Como na avaliação o banco de dados `mongoflix` é restaurado de um teste para outro, **se atente a fazer uso do banco restaurado na hora de fazer um desafio**. ⚠️

---

# Requisitos do projeto

Monte queries para encontrar as informações dos desafios a seguir.

##### Desafio 1

A partir da coleção movies, retornar os 10 diretores com a maior quantidade de filmes ordenados pela quantidade e em caso de empate por nome na ordem alfabética.

O resultado da sua query deve ter o seguinte formato:

```javascript
{ "diretor": "Woody Allen", "filmes": 40 }
// Demais documentos
```


##### Desafio 2

Traga a média de `imdb.rating` (arredondando para 1 casa decimal), a somatória de `imdb.votes` e a quantidade dos filmes de drama lançados no ano de 1984. 

```javascript
{ "total": 109, "mediaIMDB": 6.8, "votosIMDB": 980013 }
// Demais documentos
```

##### Desafio 3

Liste os atores do filme de maior duração do ano de 2001 no seguinte padrão.

O resultado da sua query deve ter o seguinte formato:

```javascript
{ "nome": "Alan Howard" }
// Demais documentos
```

##### Desafio 4

Liste os filmes que tem mais de 150 comentários ordenando pelo número de comentários de forma descrescente e pelo título de forma alfabética.

O resultado da sua query deve ter o seguinte formato:

```javascript
{ "filme": "The Taking of Pelham 1 2 3", "totalComentarios": 161 }
// Demais documentos
```

##### Desafio 5

Descubra qual o gênero de filme que o usuário `Petyr Baelish` mais fez comentários.

```javascript
{ "genero": "Comedy", "total": 88 }
```

##### Desafio 6

Liste os países que tiveram séries nomeadas ao Oscar no ano de 2015 no seguinte formato.

O resultado da sua query deve ter o seguinte formato:

```javascript
{ "country": "UK", "nominations": 5 }
{ "country": "USA", "nominations": 6 }
```

##### Desafio 7

Liste o filme que mais ganhou Oscar em 2003 no seguinte formato.

O resultado da sua query deve ter o seguinte formato:

```javascript
{ "title": "The Lord of the Rings: The Return of the King", "oscarWins": 11 }
```

---

### DURANTE O DESENVOLVIMENTO

* ⚠ **LEMBRE-SE DE CRIAR TODOS OS ARQUIVOS DENTRO DA PASTA `challenges`** ⚠

* Faça `commits` das alterações que você fizer no código regularmente

* Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto

* Os comandos que você utilizará com mais frequência são:
  1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
  2. `git add` _(para adicionar arquivos ao stage do Git)_
  3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
  4. `git push -u nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
  5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

---

### DEPOIS DE TERMINAR O DESENVOLVIMENTO (OPCIONAL)

Para sinalizar que o seu projeto está pronto para o _"Code Review"_ dos seus colegas, faça o seguinte:

* Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas:

  * No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**;

  * No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**;

  * No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-0x`.

Caso tenha alguma dúvida, [aqui tem um video explicativo](https://vimeo.com/362189205).

---

### REVISANDO UM PULL REQUEST

Use o conteúdo sobre [Code Review](https://course.betrybe.com/real-life-engineer/code-review/) para te ajudar a revisar os _Pull Requests_.

#VQV 🚀
