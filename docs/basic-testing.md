# Pruebas de Operación Básicas

<iframe width="560" height="315" src="https://www.youtube.com/embed/m7OpUem0zqY?si=3kHl1kmk6VQRnPu7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/ERzpGtRvP2o?si=2DQrHqk-GhzvvL24" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Ratón 🖱

- Modo Absoluto y Relativo
    - Latencia de movimiento, para garantizar un control suave y receptivo.
    - Precisión del mapeo de la posición del ratón.
    - Prueba de clic (clic único, doble clic)
    - Prueba de arrastre

## Teclado ⌨️
- Prueba de mapeo de teclado, especialmente para varios símbolos especiales.
- Prueba de respuesta al escribir.
- Prueba de presión de teclas múltiples.
- Prueba de tecla de función.
- Pruebas con diferentes distribuciones de teclado de países para garantizar un emparejamiento consistente.

!!! consejo

    Puede utilizar una herramienta de prueba de teclado en línea tanto en la computadora anfitriona como en la de destino para verificar si sus pulsaciones de teclas están sincronizadas.

## Transferencia de Texto 📝
- Funcionalidad de Transferencia de Texto: Verifique que la aplicación anfitriona pueda transferir texto con éxito desde la computadora anfitriona al dispositivo de destino utilizando [códigos ASCII](https://theasciicode.com.ar/).
- Integridad del Contenido: Asegúrese de que el contenido de texto transferido desde el anfitrión al dispositivo de destino permanezca intacto y se reproduzca con precisión.
- Manejo de Caracteres Especiales: Pruebe la función de transferencia de texto con varios caracteres ASCII, incluidos símbolos, signos de puntuación y caracteres no alfanuméricos, para garantizar un manejo adecuado y una reproducción correcta en el dispositivo de destino.
- Pruebas de Longitud de Texto: Pruebe la función de transferencia de texto con texto de diferentes longitudes, desde cadenas cortas hasta párrafos más largos, para verificar que pueda acomodar diferentes tamaños de texto sin problemas.
- Manejo de Errores: Pruebe escenarios de error, como pérdida de conexión o interrupción durante la transferencia de texto, para garantizar que la aplicación anfitriona maneje estas situaciones de manera adecuada y proporcione comentarios apropiados al usuario.
- Pruebas de Rendimiento: Evalúe el rendimiento de la función de transferencia de texto bajo diversas condiciones, incluidas computadoras más antiguas o más lentas, para identificar posibles problemas con la recepción incorrecta de señales de entrada HID y garantizar un funcionamiento fluido.
- Pruebas de Interfaz de Usuario: Asegúrese de que la interfaz de usuario de la aplicación anfitriona proporcione controles intuitivos y retroalimentación para iniciar y monitorear las operaciones de transferencia de texto, facilitando que los usuarios comprendan y utilicen esta función de manera efectiva.

!!! nota

    La función de transferencia de texto está diseñada para emular el comportamiento de escribir para reproducir contenido de texto en la computadora de destino. No admite integración de portapapeles, por lo tanto, no puede transferir contenido no textual, como imágenes. Esta función admite exclusivamente la transferencia de texto basada en códigos ASCII. Por lo tanto, no admite idiomas que no estén basados en códigos ASCII, como caracteres chinos, japoneses, coreanos, etc. Además, no se recomienda transferir demasiado texto a la vez.


## Acceso a Nivel de BIOS ⚙️
- Si la aplicación puede acceder a la BIOS de diferentes dispositivos objetivo.

## Sonido 🔊
- Si el sonido del ordenador objetivo se puede reproducir normalmente en el ordenador de control.

## Vídeo 🎥
- Si la aplicación puede mostrar correctamente el ordenador objetivo con diferentes resoluciones y frecuencias.

## Conectar y Desconectar 🔌
- Secuencia de conexión recomendada de dispositivos.
- Interrumpir la secuencia de acuerdo con las recomendaciones anteriores, probar diferentes escenarios para garantizar un funcionamiento normal.

## Puerto USB Conmutable y Su Interruptor de Palanca 🔄
- Prueba del Interruptor de Palanca: Probar el interruptor de palanca bajo varios escenarios para garantizar que funcione de manera confiable y cambie efectivamente entre las conexiones del ordenador host y el objetivo.
- Compatibilidad de Puerto: Verificar que el puerto USB-A 2.0 admita la conexión tanto con los ordenadores host como con los objetivos según lo previsto para varios dispositivos USB, como una memoria USB o una cámara web.


!!! nota

    Solo un ordenador puede usar el puerto a la vez. Si el puerto está siendo utilizado por una memoria USB, asegúrese de expulsar la memoria USB antes de cambiar el interruptor para cambiar el uso del puerto a otro ordenador.

!!! advertencia
    El puerto USB puede suministrar 5V de energía a un dispositivo USB externo, pero tiene una capacidad de suministro de energía muy limitada, aproximadamente 10W. Tenga en cuenta que esto puede no ser suficiente para alimentar ciertos dispositivos externos, como un Jetson Nano ejecutando tareas intensivas de GPU.

## Objetivo Diferente 💻🎯
- Pruebas con diferentes dispositivos objetivos, como diferentes versiones de macOS, Windows, Linux, Android, iOS, etc.

## Host Diferente 💻👑
- Pruebas con nuestro software de prueba interno actualmente lanzado, como las versiones compatibles para macOS, Windows o Linux.
- Pruebas para determinar si diferentes versiones de sistemas operativos pueden usar la aplicación de host correspondiente.

# Pruebas Adicionales
- Pruebas de Interfaz de Usuario: Verificar que la interfaz de usuario de las aplicaciones de host sea intuitiva y fácil de usar, proporcionando un fácil acceso a las características y configuraciones esenciales.
- Pruebas de Manejo de Errores: Probar los mecanismos de manejo de errores para garantizar una recuperación elegante de situaciones inesperadas, como interrupciones de conexión o mal funcionamiento del dispositivo.
- Revisión de Documentación: Revisar manuales de usuario y documentación para garantizar que sean completos, precisos y fáciles de entender, proporcionando instrucciones claras para la configuración, operación y solución de problemas.
- Pruebas de Rendimiento: Evaluar el rendimiento del dispositivo mini-KVM bajo varios escenarios de carga de trabajo para garantizar que cumpla con los estándares de rendimiento requeridos y no degrade el rendimiento del sistema durante la operación.
- Pruebas de Estabilidad: Realizar pruebas de estrés y pruebas de larga duración para evaluar la estabilidad y confiabilidad del dispositivo mini-KVM bajo uso continuo.