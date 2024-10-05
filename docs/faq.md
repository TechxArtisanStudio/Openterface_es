---
tags:
  - File Transfer
  - mini-KVM
  - Switchable USB
  - BIOS
  - USBKVM
---
# Preguntas Frecuentes (FAQs)

¡Estamos encantados de tenerte aquí! 🌟 Esta sección está diseñada para responder a las preguntas más frecuentes sobre el Openterface Mini-KVM, que nuestro equipo organiza periódicamente.

Vamos a sumergirnos en las preguntas más comunes sobre el Openterface Mini-KVM.

*Actualizado: 20 de agosto de 2024*

### Básico

#### ¿Qué es el Openterface Mini-KVM?
El Openterface Mini-KVM te permite usar tu laptop o computadora para mostrar y controlar dispositivos sin pantalla a través de una conexión USB y HDMI. Esta solución KVM sobre USB ofrece un control KVM ligero, rápido y sin interrupciones. Elimina la necesidad de monitores, teclados y ratones adicionales, proporcionando una solución conveniente en lugares donde las conexiones de red son poco fiables o inexistentes. Es especialmente útil para [una amplia gama de aplicaciones](/use-cases/), especialmente para profesionales de la tecnología que solucionan problemas en dispositivos sin pantalla o computadoras de placa única. Con el uso de un adaptador de video, también puede soportar [VGA](https://www.crowdsupply.com/techxartisan/openterface-mini-kvm#product-3914), Micro HDMI, DVI y otras fuentes de entrada.

El Openterface Mini-KVM es ==completamente de código abierto== tanto en [hardware](/how-it-works/#explore-hardware-details) como en [software](/quick-start/#install-host-application), certificado por [OSHWA](https://certification.oshwa.org/cn000015.html) y respaldado por [una comunidad vibrante](/community/).

#### ¿Por qué marca la diferencia el Openterface Mini-KVM?

Con varias soluciones KVM disponibles, aquí está por qué el Openterface Mini-KVM se destaca:

- Portabilidad y Funcionalidad
- Solución sin red y para solucionar problemas al instante
- Precio accesible
- Completamente de código abierto y con comunidad

Para leer más, visita nuestra página [Por qué Openterface Mini-KVM](/why-openterface).

#### ¿Cuáles son los casos de uso para este mini-KVM?
El Openterface Mini-KVM es el compañero perfecto para una amplia gama de usuarios y escenarios:

- Profesionales de TI solucionando problemas en servidores
- Técnicos que dan servicio a cajeros automáticos, VLTs y quioscos
- Desarrolladores gestionando dispositivos de computación en el borde
- Entusiastas de la tecnología experimentando con computadoras de placa única
- Profesionales que requieren operaciones locales seguras en la segregación de redes, como aquellos que gestionan activos criptográficos
- Cualquiera que necesite flujos de trabajo integrados frecuentemente entre computadoras personales y de trabajo.

Por favor, también revisa esta página: [Casos de Uso](/use-cases/)

#### ¿Qué computadoras host son compatibles con el Openterface Mini-KVM?
Para usar este mini-KVM, la computadora host debe instalar una de estas [aplicaciones host](/quick-start/#install-host-application) para soportar MacOS, Windows, Linux y Android.

#### ¿Qué dispositivos objetivo son compatibles con el Openterface Mini-KVM?
No se requiere preinstalación ni configuración en el dispositivo objetivo. Siempre que el dispositivo objetivo soporte operaciones de interfaz de usuario con salida de video (por ejemplo, HDMI, VGA) y tenga un puerto USB para recibir señales de control de teclado y ratón emulados (HID), se puede usar. Por lo tanto, las plataformas de dispositivos objetivo compatibles incluyen Windows, MacOS, Linux, Android y iOS.

#### ¿Habrá soporte técnico y documentación disponible para el Openterface Mini-KVM?
Puedes encontrar documentación extensa para el Openterface Mini-KVM en nuestro sitio web en [Openterface.com](/). Continuamente actualizamos estos recursos para optimizar tu experiencia con el dispositivo.
Para soporte técnico, te invitamos a unirte a nuestra [comunidad](/community/) para compartir consultas e ideas con otros usuarios y nuestro equipo de expertos. Si tu problema persiste, nuestro equipo está disponible para proporcionar asistencia técnica adicional. Puedes contactarnos a través de este correo electrónico: info@techxartisan.com.

### Software

#### ¿Dónde puedo descargar las aplicaciones host?
Visita nuestra página [Instalar Aplicación Host](/quick-start/#install-host-application) para descargas oficiales.

??? advertencia "Privacidad y Seguridad: Ten cuidado al usar aplicaciones host de terceros"
    Como nuestro proyecto es de código abierto, puedes encontrar versiones alternativas de aplicaciones host compatibles con nuestro Mini-KVM desarrolladas por otros. Aunque estas pueden ofrecer características adicionales, asegúrate de revisar sus prácticas de seguridad y privacidad. **El equipo de Openterface no puede garantizar ni ser responsable de la seguridad de las aplicaciones de terceros**.

#### ¿Hay una aplicación host que soporte ChromeOS?
Sí, pero actualmente está en desarrollo. Estamos planeando crear una extensión web diseñada para soportar tanto los navegadores Chrome como Firefox. Aunque su prioridad de desarrollo es ligeramente menor que la de los sistemas operativos principales como macOS, Windows y Linux, estamos trabajando activamente en ello. ¡Por favor, ten paciencia y mantente atento a las actualizaciones! Si estás interesado en ayudar con nuestro desarrollo, únete a nosotros en la comunidad o envíanos un correo electrónico.

#### ¿Hay una aplicación host que soporte dispositivos móviles de Apple?
Actualmente estamos explorando la compatibilidad con los sistemas móviles de Apple, como iOS y iPadOS. Debido a los estrictos controles de Apple, es posible que estas plataformas no soporten conexiones por cable con dispositivos de terceros. Sin embargo, la situación podría cambiar, o podría haber soluciones alternativas. Si tienes alguna idea o sugerencia, te invitamos a unirte a nuestra comunidad para discutirlas con nosotros. Estamos comprometidos a mejorar la conveniencia de nuestro dispositivo al soportar la mayor cantidad de sistemas posible. Si estás interesado en ayudar con nuestro desarrollo, únete a nosotros en la comunidad o envíanos un correo electrónico.

#### ¿Qué hacer si F11 no funciona en aplicaciones de macOS?
En macOS, al presionar F11 se muestra el escritorio de macOS en lugar de pasar la tecla F11 a la aplicación y al computador objetivo. Para solucionar esto, puedes desvincular F11 de la función "Mostrar Escritorio". Aquí te explicamos cómo:

1. Ve a Configuración del Sistema.
2. Selecciona Escritorio y Dock.
3. Desplázate hacia abajo y haz clic en el botón "Atajos...".
4. Encuentra "Mostrar Escritorio" y configúralo en el guion (-) en la parte inferior de la lista desplegable.
5. Este cambio permitirá que la tecla F11 pase a tu aplicación en el computador objetivo.

### Puerto USB Conmutable y Transferencia de Archivos

#### ¿El Openterface Mini-KVM soporta transferencias de archivos?
Sí, el Openterface Mini-KVM incluye un puerto USB-A conmutable compartido entre los dispositivos host y objetivo.

??? nota "¿Cómo compartir una memoria USB entre los dispositivos Host y Objetivo?"
    Los archivos pueden transferirse entre el host y el objetivo siguiendo estos pasos:

    1. Monta una memoria USB en el host cuando el pequeño interruptor negro esté en el lado del puerto Type-C del host.
    2. Copia los archivos en esta memoria montada.
    3. Después de copiar, desmonta la memoria sin desconectarla físicamente.
    4. Mueve el pequeño interruptor negro al otro lado. Esta acción cambia la conexión del puerto USB-A al objetivo.
    5. Monta la memoria USB en el dispositivo objetivo y copia/mueve los archivos de la memoria, completando el proceso de transferencia de archivos del host al objetivo.

    Este método también puede usarse en la dirección opuesta.

??? nota "Recuerda expulsar la memoria USB antes de cambiar el interruptor"
    Si el puerto USB está siendo usado por una memoria USB, asegúrate de expulsar la memoria antes de cambiar el interruptor para transferir el uso del puerto a otra computadora.

#### ¿El puerto USB-A conmutable puede cambiarse a nivel de software?
¡Con la actualización de hardware a la versión 1.9, sí! Actualmente estamos trabajando en codificar esta función en nuestra aplicación. Una vez implementada, soportará tanto el cambio físico como el conmutado a nivel de software. Consulta con nuestro equipo de desarrollo en Discord para saber más sobre este progreso.

#### ¿Por qué USB 2.0 y no USB 3.0 para este puerto USB conmutable?
USB 2.0 es completamente capaz de manejar la captura de video a 1080p@30Hz, transmitir señales HID (para teclado y ratón) y gestionar transferencias de archivos a velocidad estándar entre los computadores objetivo y host. Esto hace que nuestro producto sea una solución rápida, ligera y portátil, tal como fue diseñada.

Usar USB 3.0 haría el diseño de la PCB mucho más complejo y aumentaría significativamente los costos de producción. Además, aunque USB 3.0 ofrece transferencias de archivos más rápidas, también genera más calor, lo que podría acortar la vida útil del dispositivo.

Estamos considerando la aplicación de USB 3.0 para la próxima versión, dirigida a escenarios de uso más profesionales y soluciones KVM estacionarias.
### Técnico

#### ¿El Openterface Mini-KVM es de código abierto?
¡Sí! El Openterface Mini-KVM es completamente de código abierto tanto en [hardware](/how-it-works/#explore-hardware-details) como en [software](/quick-start/#install-host-application), certificado por [OSHWA](https://certification.oshwa.org/cn000015.html) y respaldado por [una comunidad vibrante](/community/). Si estás interesado en [contribuir](/contributing/), contáctanos en info@techxartisan.com. ¡Mantente al tanto!

#### ¿Puedo acceder a la configuración del BIOS de un dispositivo?
Sí, la conexión directa del Openterface Mini-KVM permite el acceso a configuraciones de bajo nivel del BIOS o firmware.

Esta característica contrasta con las soluciones KVM basadas en software o aplicaciones de control remoto como TeamViewer y VNC, que generalmente no pueden interactuar a nivel de BIOS.

#### ¿Por qué el teclado no funciona a nivel de BIOS en algunos ordenadores antiguos?
Parece que algunos BIOS de ordenadores antiguos no pueden reconocer el hub USB de nuestro dispositivo, lo que puede causar problemas con nuestro teclado y ratón emulados a nivel de BIOS. Estamos atentos a este problema.

Hemos recibido un informe de que en un ordenador HP específico, el HP Engage Flex Pro, el teclado no funciona en la pantalla del BIOS, aunque funciona normalmente una vez que el sistema operativo se inicia.

Si encuentras el mismo problema, por favor repórtalo a través de un issue en GitHub.

#### ¿Cómo se transmite el video/datos entre dispositivos?
Los datos de video se capturan a través de HDMI y se transmiten por USB 2.0 al ordenador host para su visualización. El puerto USB 2.0 conmutable permite compartir unidades USB u otros dispositivos USB entre el objetivo y el host.

#### ¿Cómo maneja la energía el Openterface Mini-KVM?
El dispositivo no requiere una fuente de alimentación externa, ya que está diseñado para ser alimentado a través de sus conexiones USB Type-C desde el host, mejorando su portabilidad. En escenarios donde el dispositivo objetivo es un micro-ordenador de bajo consumo, como un Raspberry Pi, podría ser alimentado a través del host mediante el puerto USB conmutable del Mini-KVM. Sin embargo, esto no es recomendable. El método estándar de operación es tener una fuente de alimentación externa para el dispositivo objetivo.

#### ¿Puedo construir este dispositivo por mí mismo?
¡Por supuesto! Somos un grupo de apasionados creadores que aman el DIY, y nos aseguramos de que este proyecto sea de código abierto tanto en hardware como en software. Técnicamente, puedes construirlo desde cero. Incluso estamos pensando en publicar una guía sobre cómo hacer una versión en protoboard de nuestro producto que también sea compatible con nuestro software.

Nuestra comunidad ya está experimentando con diferentes versiones de hardware. ¡Consulta nuestras publicaciones comunitarias para aprender más o comparte tus propias experiencias DIY! Podría enriquecer mucho nuestra comunidad. Además, podrías descubrir que con algunos ajustes en el código, nuestro software podría funcionar perfectamente con tu configuración DIY creativa.

### Mecanismo de Control

#### ¿Hay planes para una versión con conectividad inalámbrica o Ethernet?
Actualmente, no estamos planeando agregar conectividad inalámbrica o Ethernet a nuestros productos Openterface. Nos enfocamos en proporcionar un control rápido y estable a través de USB directamente a tu dispositivo objetivo, para que no tengas que preocuparte por problemas de red.

¡Pero estamos siempre abiertos a comentarios! Si crees que hay una necesidad real de esta característica, o si estás teniendo dificultades para encontrar una buena solución KVM-over-IP, envíanos un correo electrónico a info@techxartisan.com. Y recuerda, si decidimos expandir nuestras opciones de conectividad, nuestra [comunidad](/reddit) será la primera en saberlo.

#### ¿En qué se diferencia esto de otras soluciones KVM como KVM tradicionales, KVM-over-IP y VNC, etc.?
¿Tienes curiosidad sobre cómo se compara el Openterface Mini-KVM con otras soluciones? Consulta nuestra detallada [Comparación](/comparison) página.

#### ¿Funciona con un ordenador objetivo que requiere PS/2?
No. Sabemos que todavía hay muchos ordenadores antiguos sin monitor que requieren teclados y ratones PS/2. Hasta donde sabemos, aún no existe una solución elegante para convertir señales HID USB en señales divididas de teclado y ratón PS/2. Estamos investigando este asunto y considerando cómo soportar PS/2 en futuras versiones del Mini-KVM. Si conoces alguna solución que podría funcionar elegantemente con nuestro Mini-KVM, por favor compártela con nosotros. ¡Gracias!

#### ¿Puedo usar múltiples Mini-KVMs para controlar múltiples dispositivos objetivo desde un ordenador maestro?
¡Sí, puedes! Nuestro Mini-KVM puede manejar esto técnicamente, pero aún estamos ajustando el código y realizando pruebas. Nos estamos enfocando en asegurarnos de que nuestro software pueda vincular automáticamente el teclado y el ratón con la fuente de video correcta cuando uses más de un Mini-KVM a la vez. Además, estamos mejorando la interfaz de usuario del software para que sea mejor para este tipo de configuración. ¡Mantente al tanto de las actualizaciones de nuestra comunidad para cuando lancemos esta función!

#### ¿Es capaz de encender/apagar el ordenador al que está conectado?
Nuestro dispositivo no soporta ATX (control de encendido/apagado para el ordenador objetivo). Lo diseñamos para ser portátil, rápido para la resolución de problemas y estable para el control local. Realmente está destinado a ser usado cuando estás allí con tu portátil, gestionando uno o varios ordenadores objetivo. Podríamos construir una versión profesional en el futuro con ATX y más características.

### Relacionado con Video

#### ¿Qué pasa con la latencia y resolución de video?
Nuestro dispositivo maneja video 1080p con menos de 140 milisegundos de latencia, haciendo que tu experiencia de control sea fluida y sin interrupciones.

#### ¿Es el Openterface Mini-KVM adecuado para juegos de alta calidad?
El diseño actual se enfoca en operaciones técnicas y de TI, proporcionando un control confiable para la configuración y resolución de problemas de dispositivos en lugar de juegos de alta resolución. Aunque es excelente para muchas tareas, este mini-KVM podría no cumplir con las necesidades de visualización de juegos de alta calidad.

#### ¿Habrá soporte para pantallas de alta calidad en futuras versiones del Openterface Mini-KVM?
Sabemos que muchos de ustedes buscan características de visualización de primera calidad. Aunque no es nuestro enfoque principal en este momento, basándonos en sus comentarios, estamos considerando agregar capacidades de visualización mejoradas en una versión profesional del Openterface Mini-KVM.

#### ¿Por qué el Openterface Mini-KVM no transmite video a través de IP local?
El Openterface Mini-KVM ha sido diseñado para asegurar un rendimiento confiable y estable a través de conexiones cableadas, utilizando HDMI y USB. Aunque es técnicamente posible transmitir video a través de una red mediante nuestras aplicaciones host, estamos considerando agregar una función de VLC e incluso VNC a nuestras aplicaciones host en el futuro.

#### ¿Puede funcionar con diferentes salidas de video como VGA, DVI, DisplayPort, etc.?
Más o menos. El Openterface Mini-KVM captura video a través de un puerto HDMI. Sin embargo, puedes usar varios adaptadores de video como [VGA-a-HDMI](/use-cases/#streamlined-server-management), [DVI-a-HDMI](/use-cases/#unified-control-for-diverse-devices), [miniHDMI-a-HDMI](/use-cases/#simplified-setup-for-tech-enthusiasts), o DP-a-HDMI, para conectar diferentes fuentes de video.

### Solución de Problemas

#### ¿Por qué el Openterface Mini-KVM a veces experimenta problemas cuando se conecta a través de un hub USB?
Cuando se usa un hub USB en el lado del objetivo, el Openterface Mini-KVM puede volverse inestable. Esto se debe a que el Openterface Mini-KVM depende principalmente del puerto objetivo para la energía. Si el hub USB conectado al objetivo está completamente cargado, puede causar una caída significativa de voltaje, lo que lleva a la inestabilidad del Openterface Mini-KVM debido a la falta de energía. Si necesitas usar un hub USB en el lado del objetivo, considera usar un hub USB alimentado con una fuente de alimentación externa para asegurar una operación estable.

#### ¿Qué debo hacer si el Openterface Mini-KVM se vuelve inestable, como cuando la aplicación no muestra la pantalla del objetivo o el ratón y el teclado no responden?
Si encuentras inestabilidad con el Openterface Mini-KVM, como que la aplicación no muestre la pantalla del objetivo o la incapacidad de controlar el ratón y el teclado, intenta desconectar todos los cables. Después de un breve momento, vuelve a conectar los cables y prueba de nuevo. Este simple reinicio a menudo resuelve los problemas de conexión.

### Más

#### ¿Cómo puedo contribuir a este proyecto?
¡Por supuesto! Hay muchas maneras en las que puedes colaborar:

- Si te gusta programar, ayúdanos reportando y solucionando errores.
- ¿Eres bueno con las palabras y la tecnología? Podrías echar una mano con nuestra documentación.
- Y si eres un mago con los idiomas, ¿por qué no ayudar a traducir nuestros documentos para que más personas puedan unirse?
- Si el diseño es lo tuyo, siempre estamos buscando nuevas ideas para el diseño gráfico, la interfaz de la aplicación y hacer que nuestro dispositivo sea aún más fácil de usar.
- ¿Te gustaría ayudar a mantener nuestra comunidad activa? También podríamos usar tus habilidades allí.

Tu apoyo y [contribuciones](/contributing/) son lo que mantiene creciendo al Openterface Mini-KVM. ¡Gracias por ser parte de nuestra aventura! 🚀 ¿Tienes ganas de ayudar pero no ves un ajuste perfecto? ¡Solo envíanos un correo electrónico!

#### ¿Quieres revisar nuestro práctico gadget?
¡Nos encanta hacer ruido y correr la voz sobre nuestro Mini-KVM! Si eres de la prensa o te destacas en las redes sociales y te gustaría probar nuestro producto, estamos a tu disposición. Ya sea que te gusten las reseñas detalladas, los videos de unboxing o simplemente quieras darnos un saludo, estamos aquí para ello y ¡hagamos algo de ruido juntos! 🎉 Solo envíanos un correo electrónico AHORA.

#### ¿Cuáles son las características avanzadas planeadas para el mini-KVM?
Estamos emocionados por el potencial del mini-KVM y estamos comprometidos a documentar todas nuestras ideas actuales en una hoja de ruta completa. Esta hoja de ruta delineará las características avanzadas y los desarrollos futuros que imaginamos para el dispositivo. Esperamos desarrollar estas características en colaboración con nuestra comunidad. Mantente al tanto de más actualizaciones mientras seguimos creciendo e innovando juntos.

#### ¿Cómo se integra el mini-KVM con la IA y cuáles son sus posibilidades futuras?
Nuestro objetivo final es permitir que la IA controle los ordenadores objetivo, y el Openterface juega un papel crucial en esta visión. Inspirados por proyectos como [OthersideAI's self-operating computer](https://github.com/OthersideAI/self-operating-computer), nuestro objetivo es que el mini-KVM actúe como una extensión de las 'manos' (proporcionando control de teclado y ratón) y 'ojos' (capturando la fuente de video) para el ordenador host. Si el ordenador host es lo suficientemente potente, podría emular las capacidades vistas en la película de 2013 "Her". Aunque esto es una aspiración futura, destaca las emocionantes posibilidades que vemos para el mini-KVM.

#### ¿Qué accesorios están disponibles para el Openterface Mini-KVM?
Ofrecemos una gama de accesorios para mejorar tu experiencia con el Openterface Mini-KVM. Consulta nuestra sección de [Accesorios](accessories.md) para más detalles sobre los productos disponibles, incluyendo nuestro Cable Convertidor de VGA a HDMI.

--------

Tu curiosidad y apoyo impulsan nuestro progreso, y queremos asegurarnos de que cada una de tus preguntas encuentre una respuesta. Ten en cuenta que, a medida que pasa el tiempo, el contenido anterior en nuestras preguntas frecuentes puede quedar desactualizado. Si tu consulta no está cubierta en estas preguntas frecuentes, siempre consulta nuestro sitio web [openterface.com](/) para obtener la información más actual. Además, no dudes en unirte a nuestra entusiasta comunidad. Estamos activos en nuestro Subreddit en [/r/Openterface_miniKVM/](/reddit) y en nuestro servidor de Discord, [TechxArtisan](/discord), donde puedes hacer preguntas, compartir ideas o simplemente charlar sobre todo lo relacionado con la tecnología.

Además, no dudes en ponerte en contacto directamente con nuestro equipo dedicado enviando un correo electrónico a info@techxartisan.com. Nos encanta saber de ti y siempre estamos aquí para ayudar.