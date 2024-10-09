const { Client, LocalAuth } = require('whatsapp-web.js');

// Criar uma instância do cliente com autenticação local
const client = new Client({
    authStrategy: new LocalAuth(),
});

// Evento quando o cliente estiver pronto
client.on('ready', () => {
    console.log('Bot está pronto e conectado!');
});

// Função para mostrar o menu
function showMenu(from) {
    const menuMessage = `✨🎉 *Bem-vindo à Ma&JuModas, onde a moda encontra a sua essência!* 🎉✨\n\n` +
                        `🌟 Escolha uma das opções abaixo para explorar nosso mundo:\n` +
                        `1️⃣ *🔥 Promoções Exclusivas*: Descubra ofertas que vão fazer seu coração bater mais forte! 💖\n` +
                        `2️⃣ *🛍️ Comprar*: Navegue por nossa coleção e encontre peças que refletem o seu estilo único! 💎\n` +
                        `3️⃣ *🤝 Suporte Personalizado*: Precisa de ajuda? Estamos prontos para oferecer o suporte que você merece! 📞\n\n` +
                        `👉 *Responda com o número da opção desejada e embarque nessa jornada fashion!* 👈`;

    client.sendMessage(from, menuMessage);
}

// Evento quando uma nova mensagem é recebida
client.on('message', (message) => {
    const from = message.from;

    // Se for a primeira mensagem, mostra o menu
    if (message.body.toLowerCase() === 'ola' || message.body.toLowerCase() === 'oi') {
        showMenu(from);
    } else {
        handleResponse(from, message.body);
    }
});

// Função para lidar com as respostas
async function handleResponse(from, choice) {
    switch (choice.toLowerCase()) {
        case '1':
            case 'promoções':
                await client.sendMessage(from, '🎉✨ *Descubra Nossas Ofertas Imperdíveis!* ✨🎉\n' +
                    `🛍️ *Aproveite as promoções que preparamos especialmente para você!*\n` +
                    `🌟 Clique aqui e comece a economizar: [link para catálogo] 🔥`);
                break;
            case '2':
            case 'comprar':
                await client.sendMessage(from, '🛒💖 *Encontre o Que Você Ama em Nossa Loja!* 💖🛒\n' +
                    `✨ Explore as últimas tendências e produtos que vão conquistar seu coração!\n` +
                    `👉 Acesse agora: [link para página de vendas]. Não perca! 🌈`);
                break;
            case '3':
            case 'suporte':
                await client.sendMessage(from, '📞💬 *Estamos Aqui Para Ajudar Você!* 💬📞\n' +
                    `⏰ Nosso suporte está disponível de 9h às 18h.\n` +
                    `💻 *Qualquer dúvida, entre em contato pelo nosso site e teremos prazer em ajudar!*\n` +
                    `👉 [link para o site de suporte].`);
                break;
            default:
                await client.sendMessage(from, '❌🚫 *Oops! Essa opção não é válida.* 🚫❌\n' +
                    `🔍 *Por favor, escolha uma das opções abaixo:* \n` +
                    `1️⃣ *Promoções* \n` +
                    `2️⃣ *Comprar* \n` +
                    `3️⃣ *Suporte* \n` +
                    `💬 Responda com o número da opção desejada!`);
                break;
    }
}

// Iniciar o cliente
client.initialize();
