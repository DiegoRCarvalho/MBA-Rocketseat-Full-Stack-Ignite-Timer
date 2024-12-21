# Ignite Timer

Sistema de Pomodoro criado durante o MBA Rocketseat Full Stack.

[Projeto no Figma](https://www.figma.com/design/JIuZaE47W92sSlRBdjNvwi/Ignite-Timer-(Community)?node-id=0-1&p=f&t=trNEzTdfEJAwD3gN-0)

![alt](./readme-images/0001.png)

## Criar o projeto

```
npm create vite@latest
```

- Informar o nome do projeto;

- Escolher React;

- Escolher TypeScript;

- Abrir o diretório do projeto e editar o arquivo package.json para alterar as versões das bibliotecas de dependências para que fiquem idênticas as que foram informadas no curso, dessa forma, iremos evitar problemas de compatibilidade com versões novas;

- Abrir um terminal e digitar:

  ```
  npm install
  ```

## Remover arquivos que não iremos utilizar

- public
- src/assets
- src/App.css
- src/index.css

        Em seguida remover importações dos arquivos apagados anteriormente.

### Trocar a função de App.tsx de Default exports para Named Exports

- Default exports

  - Função

    ![alt](./readme-images/0002.png)

  - Importação

    ![alt](./readme-images/0003.png)

- Named Exports

  - Função

    ![alt](./readme-images/0004.png)

  - Importação

    ![alt](./readme-images/0005.png)

### Se necessário, altere a porta padrão do Vite

![alt](./readme-images/0006.png)
