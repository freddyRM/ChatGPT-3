# ChatGPT-3
Este proyecto esta hecho en GoogleScript con el api de Telegram y el api de OpenAI.

## _¿Como empezamos?_

### _- Crear Bot de Telegram_
- Escribe @BotFather en la barra de búsqueda de Telegram o sino clickar [aqui](https://t.me/BotFather).
- Elige la primera opción, que aparece con un “check” azul de verificación (demuestra que es el bot oficial de Telegram).
- Clica en INICIAR.
- Escribe el comando /newbot o haz clic sobre el mismo en la lista de comandos que se muestra en el chat.
- Seguidamente, escribe un nombre para tu bot y pulsa enter (Ejemplo: Lead2Team).
- Ahora se te pedirá establecer un nombre de usuario, que en este caso debe terminar en “bot” (Ejemplo: Lead2TeamBot).
- Paso circunstancial: en caso de que el nombre de usuario de tu bot ya esté siendo usado, deberás establecer otro o probar con variantes similares hasta dar con uno disponible.
- Guarda el token de autenticación asignado por el sistema, será necesario para que puedas acceder a la API de Telegram Bot.
- Revisa el [manual de la API](https://core.telegram.org/bots/api) para conocer todo lo que puedes enseñarle a tu nuevo Bot y sigue las instrucciones para cada función que deseas añadir.
- Prueba tu Telegram Bot chateando con él desde tu perfil empresarial o personal de Telegram.

> Informacion suministrada de [lead2team](https://www.lead2team.com/academy/telegram-business/bot-de-telegram/)


### _- Crear una Hoja de calculo en googleSheets_

##### _Nota: este paso es opcional ya que es usado solo para mostrar errores que ocurren durante pruebas o despues de ellas._

![Crear un Documento Sheet](/Guide/Paso1.png "Crear un Documento Sheet")
- Crear un Documento Sheet
![Guardar el ID del documento sheet y el nombre de la hoja](/Guide/Paso3.png "Guardar datos")
- Guardar el ID del documento sheet y el nombre de la hoja

### _- Crear el token en OpenAI_

- [Ir a la siguiente pagina](https://openai.com/api/)
- Iniciar sesion en caso de tener cuenta sino crearla. (nota: Hay paises en donde no es posible acceder tener en cuenta eso)
- Ahora, visite su página de claves de OpenAI https://beta.openai.com/account/api-keys
- Cree una nueva clave haciendo clic en el botón "Crear nueva clave secreta".
- Guarde la clave.

>Importante: 
>Tenga en cuenta que se le cobrará en función de su uso mensual. La estructura de costos es, para 750 >palabras (también conocidas como 1000 tokens), $0.02 si usa el modelo más avanzado.
>OpenAI otorga $18 en créditos gratuitos que puede consumir dentro de los primeros 3 meses. Esta es una gran manera de probar el servicio.
>Por ejemplo, si usa 2500 tokens por día durante 20 días al mes, se le cobrará $1 por mes.

### _- Entrar en GoogleScript_

- Crear un nuevo proyecto.
- Copiar y pegar la estructura que esta [aqui](https://github.com/freddyRM/ChatGPT-3/blob/main/ChatGPT-3.js)
- Agregar el token del telegram en el lugar correspondiente.
- Agregar el Id de el documento sheet en el lugar correspondiente.
- Agregar el nombre de la hoja en el lugar correspondiente.
- Agregar el token de OpenAI en el lugar correspondiente.
- una vez culminado debemos regresar y comprobar una serie de pasos en telegram
- https://api.telegram.org/bot + tokenTelegram .Esto nos llevara a una ventana en donde todavia no esta listo para recibir.
- https://api.telegram.org/bot + tokenTelegram/getUpdates esto habilitar recibir informacion.
![una vez realizado estas acciones se procede a Implementar el proyecto](/Guide/Paso4.png "Implementar Proyecto")
![una vez realizado estas acciones se procede a Implementar el proyecto](/Guide/Paso5.png "Implementar Proyecto")
- una vez realizado estas acciones se procede a Implementar el proyecto
- Luego aceptar los permisos y copiar la url de la aplicacion web
- Una vez realizado esto se procede a aplicar la ruta https://api.telegram.org/bot + tokenTelegram/setWebhook?url= + "Url de la aplicacion web".
- Con esto ya deberia funcionar!. Saludos.
- Nota: cuando indico: + tokenTelegram todo deberia estar junto ejemplo: https://api.telegram.org/bot12345678
- lo mismo sucede con este: https://api.telegram.org/bot12345678/setWebhook?url=https://script.google.com/macros/s/ABCDEF/exec