// src/scheduler.js
import cron from 'node-cron';
import { processExpirationNotifications } from '../controllers/sendEmail.controller.js';

export function startSchedulers() {
  // Agendamento diário às 8h da manhã
  cron.schedule('0 8 * * *', async () => {
    console.log(" Verificando itens próximos da validade...");
    try {
      await processExpirationNotifications();
      console.log(" Notificação de validade enviada com sucesso!");
    } catch (error) {
      console.error(" Erro ao enviar notificações:", error);
    }
  });

  // Verificação inicial ao iniciar a aplicação
  (async () => {
    console.log(" Verificação inicial de validade...");
    await processExpirationNotifications();
  })();
}
