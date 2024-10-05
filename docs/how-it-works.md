# Cómo Funciona

## Desglose del Proceso

- **Transmisión de Pantalla**: El mini-KVM captura la transmisión de pantalla de la computadora objetivo y la muestra en la aplicación del host. Esto permite a los usuarios ver y gestionar el sistema objetivo directamente desde su máquina host.
- **Control del Cursor y Ratón**: Al mover el ratón a la ventana de la aplicación en la computadora host, los usuarios pueden controlar el cursor en el dispositivo objetivo como si estuvieran usando un VNC. Esta funcionalidad permite operar dos sistemas simultáneamente en una sola pantalla.
- **Entrada de Teclado**: Cuando la ventana de la aplicación está activa, cualquier pulsación de teclas realizada en el teclado de la computadora host se transmite al dispositivo objetivo, permitiendo una escritura y entrada de comandos sin interrupciones.
- **Conversión de Señales HID**: Todas las entradas de teclado y ratón dentro de la aplicación se convierten en señales de control de Dispositivo de Interfaz Humana (HID), que luego se envían a la computadora objetivo.
- **Sincronización**: La aplicación asegura que la pantalla y el cursor de la computadora objetivo estén sincronizados con la pantalla de la computadora host, facilitando una experiencia de usuario unificada.

Puedes explorar el [Software](/app) y [Hardware](/open-hardware) de código abierto de Openterface para más detalles.