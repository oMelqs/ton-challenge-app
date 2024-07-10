<!DOCTYPE html>
<body style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 800px; margin: 0 auto; padding: 20px;">

  <h1 style="color: #FFF;">Ton Challenge React Native Application</h1>
  
  <div style="margin-bottom: 40px;">
    <h2 style="color: #FFF;">Descrição</h2>
    <p>Esta aplicação é um exemplo de aplicativo React Native utilizando Expo. Ela lista produtos e permite adicionar ou remover itens de um carrinho de compras.</p>
  </div>

  <div style="margin-bottom: 40px;">
    <h2 style="color: #FFF;">Pre-requisitos</h2>
    <p>Para rodar esta aplicação é necessário alguns pre-requisitos</p>
    <div style="background-color: #333; border: 1px solid #ccc; padding: 10px;">
      <code style="background-color: #333; padding: 2px 4px; border-radius: 4px; font-size: 0.9em;">
        # NodeJS<br/>
        # Algum device ou Emulador instalado no seu computador<br/>
      </code>
    </div>
  </div>
  
  <div style="margin-bottom: 40px;">
    <h2 style="color: #FFF;">Como Rodar</h2>
    <p>Para rodar esta aplicação em seu ambiente local, siga os passos abaixo:</p>
    <div style="background-color: #333; border: 1px solid #ccc; padding: 10px;">
      <code style="background-color: #333; padding: 2px 4px; border-radius: 4px; font-size: 0.9em;">
        # Clone o repositório usando o comando:
        git clone https://github.com/oMelqs/ton-challenge-app.git<br/>
        # Dentro da pasta do repositório instale as dependências usando o comando:
        npm install<br/>
        # Executar o projeto usando o comando:
        npm run start<br/>
      </code>
    </div>
    <p style="margin-top: 20px;">Ao rodar <code>npm run start</code>, uma página será aberta no seu navegador com um código QR. Use o aplicativo Expo no seu dispositivo móvel para escanear o QR e abrir o aplicativo.</p>
    <p>Ou aperte A para abrir o aplicativo em um emulador Android ou I para abrir no emulador IOS.</p>
  </div>
  
  <div style="margin-bottom: 40px;">
    <h2 style="color: #FFF;">Como Rodar os Testes</h2>
    <p>Para rodar os testes unitários, execute o seguinte comando:</p>
    <div style="background-color: #333; border: 1px solid #ccc; padding: 10px;">
      <code style="background-color: #333; padding: 2px 4px; border-radius: 4px; font-size: 0.9em;">
        npm test
      </code>
    </div>
    <p style="margin-top: 20px;">Isso executará todos os testes unitários definidos para o projeto.</p>
  </div>
  
  <div style="margin-bottom: 40px;">
    <h2 style="color: #FFF;">Como Ejetar a Aplicação</h2>
    <p>Para ejetar a aplicação Expo e gerar um projeto React Native puro, execute:</p>
    <div style="background-color: #333; border: 1px solid #ccc; padding: 10px;">
      <code style="background-color: #333; padding: 2px 4px; border-radius: 4px; font-size: 0.9em;">
        expo eject (depreciado) ou npx expo prebuild
      </code>
    </div>
    <p style="margin-top: 20px;">Este comando moverá seu projeto Expo para um projeto React Native padrão, permitindo maior controle sobre dependências nativas e builds.</p>
  </div>

</body>
</html>
