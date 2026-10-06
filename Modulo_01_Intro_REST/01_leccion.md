# Módulo 1: Introducción a API REST

## Qué es una API REST

Básicamente es una forma de que dos programas se hablen por internet. Tú pides algo, el servidor te lo da. Es así de simple.

REST = representación del estado de transferencia (suena complicado pero no lo es)

Lo importante: Usas URLs normales, pides cosas con métodos HTTP (GET, POST, etc), y el servidor te responde con datos.


## Cómo diferencia de otras APIs

SOAP: Es viejo, usa XML, muy complicado. Nadie lo quiere usar.

GraphQL: Te dejas pedir exactamente lo que necesitas, nada más. Menos datos en las peticiones.

REST: Simple, directo, usa URLs normales que todos entienden. Por eso es la más popular.

Básicamente REST ganó porque no se complica.


## Los 6 fundamentos de REST

1. Cliente y servidor separados - El cliente pide, el servidor responde. No se mezclan.

2. Sin estado - El servidor no recuerda nada del cliente. Si le pido algo dos veces, es como dos peticiones completamente nuevas.

3. Se puede guardar en caché - Las respuestas se guardan para no tener que pedir lo mismo mil veces. Más rápido.

4. Interfaz uniforme - Todos hacemos las cosas igual. Si pido un usuario, siempre es /usuarios/123. Sin sorpresas.

5. Sistema en capas - El servidor puede tener varias partes (base de datos, seguridad, etc) pero el cliente no lo ve. Es transparente.

6. Código ejecutable (opcional) - El servidor puede enviar JavaScript u otro código para que el cliente lo ejecute. Casi nadie lo usa.


## Las restricciones de REST

Básicamente son las reglas que debes seguir para que tu API sea realmente REST:

1. Cliente-Servidor separados
2. Sin estado (stateless)
3. Se puede cachear (guardar en memoria)
4. Interfaz uniforme (todos usan los mismos métodos)
5. Sistema en capas (no sabes qué hay atrás)
6. Código ejecutable (opcional)

Si no cumples estas, tu API no es REST.


## URL vs URI

URI: Es un identificador. Dice "este recurso existe"
Ejemplo: /usuarios/123

URL: Es un identificador con la dirección completa. Dice "este recurso está AQUÍ"
Ejemplo: https://miapi.com/usuarios/123

Diferencia: URI dice QUÉ es, URL dice DÓNDE está.

Casi siempre usamos URL pero técnicamente es una URI.


## Lo importante

- REST es simple
- El servidor no recuerda nada
- Las URLs son lógicas
- Usa GET, POST, PUT, DELETE como corresponde
- Las respuestas se guardan en caché

Próximo: Crear tu primer servidor REST.
