# Pruebas y Desarrollo

## 💻 Compatibilidad

- **Soporte de OS**: Verificar que diferentes versiones de sistemas operativos puedan usar la aplicación correspondiente.
- **Pruebas de Rendimiento**: Evaluar el rendimiento en varios sistemas anfitriones.
- **Pruebas de Versiones de OS**: Asegurar la compatibilidad a través de diferentes versiones de sistemas operativos.
- **Problemas Específicos de Dispositivos**: Identificar y resolver problemas específicos de ciertos dispositivos o versiones de sistemas operativos.

## 🖱 Control del Ratón

<div class="annotate" markdown>

- **Latencia de Movimiento**: Asegurar un control suave y responsivo.
- **Botones del Ratón**: Probar los botones izquierdo, derecho y central; clic y arrastre.
- **Desplazamiento**: Evaluar la velocidad y dirección del desplazamiento.
- **Precisión** del mapeo de la posición del ratón en modo *Absoluto* (1)
- **Sensibilidad** del movimiento del ratón en modo *Relativo* (2)

</div>

1. Asegurar que la posición del ratón del objetivo se mapea con precisión en el anfitrión. Esto puede verse afectado por la resolución del objetivo y los cambios en el tamaño de la ventana de la aplicación.
2. Asegurar que el movimiento del ratón cumpla con las expectativas intuitivas.

## ⌨️ Teclado

<div class="annotate" markdown>

- **Respuesta al Escribir**: Asegurar que cumpla con las expectativas intuitivas.
- **Mapeo Completo del Teclado**: Especialmente para varios símbolos especiales.
- **Modificadores**: Teclas como `Ctrl`, `Shift`, `Alt` y `Cmd`, o `Win`.
- **Combinaciones de Teclas**: Soporta técnicamente hasta 8 teclas modificadoras y 6 teclas adicionales presionadas simultáneamente.
- **Teclas de Medios y ACPI**: Teclas como `Volumen-`, `Volumen+`, `Silencio`, `Despertar`, `Dormir` y `Encendido`.
- **Distribuciones de Teclado**: Asegurar un emparejamiento consistente para varias distribuciones. (1)

!!! tip

    - **Probador de Teclado**: Puedes utilizar una herramienta de prueba de teclado en línea tanto en el anfitrión como en los equipos objetivo para verificar si sus pulsaciones están sincronizadas.
    - **Chip CH9329**: Consulta [los detalles](https://github.com/TechxArtisanStudio/Openterface_Mini-KVM_Hardware/tree/main/CH9329) para entender los límites del control de teclado/ratón en el Openterface Mini-KVM.

</div>

1. ⌨️ 🌏 Las distribuciones de teclado varían globalmente a través de regiones e idiomas, con tipos populares como QWERTY, AZERTY, QWERTZ y Dvorak.

## ⚙️ Acceso a Nivel de BIOS

- **Entrada al BIOS**: Probar la entrada al BIOS durante la secuencia de arranque.
- **Funcionalidad**: Asegurar el control completo del teclado y ratón dentro del BIOS.
- **Compatibilidad**: Verificar el acceso al BIOS en diferentes marcas y modelos de placas base.

## 🔊 Sonido

- **Calidad de Sonido**: Evaluar la claridad y sincronización de la reproducción de audio.
- **Latencia**: Medir cualquier retraso entre las acciones y su sonido correspondiente.
- **Compatibilidad**: Probar varias salidas de audio en diferentes sistemas operativos.

## 🎥 Video

- **Soporte de Resolución**: Probar varias resoluciones de pantalla y relaciones de aspecto.
- **Tasa de Fotogramas**: Evaluar el rendimiento a diferentes tasas de refresco.
- **Calidad de la Pantalla**: Verificar la presencia de artefactos visuales o problemas de latencia.

## 🔄 Puerto USB Conmutable

- **Pruebas del Interruptor de Conmutación**: Probar el interruptor de conmutación en varios escenarios para asegurar su fiabilidad.
- **Compatibilidad del Puerto**: Asegurar que el puerto USB-A 2.0 soporte varios dispositivos USB como memorias flash y cámaras web.
- **Limitaciones de Potencia**: Confirmar la capacidad de suministro de energía del puerto y su adecuación para diferentes dispositivos.

## 🔌 Conectar y Desconectar

- **Pruebas de Conexión**: Probar escenarios con diferentes secuencias de conexión y desconexión.
- **Manejo de Errores**: Asegurar que el dispositivo reconozca y se recupere de conexiones incorrectas.
- **Estabilidad**: Verificar la estabilidad cuando los dispositivos se conectan y desconectan repetidamente.

## 📝 Transferencia de Texto

- **Pruebas de Funcionalidad**: Verificar que la aplicación anfitriona pueda transferir texto exitosamente desde el ordenador anfitrión al dispositivo objetivo usando códigos ASCII.

- **Integridad del Contenido**: Asegurar que el contenido del texto transferido desde el anfitrión al dispositivo objetivo permanezca intacto y se reproduzca con precisión.

- **Manejo de Caracteres Especiales**: Probar la función de transferencia de texto con varios caracteres ASCII para asegurar un manejo y reproducción adecuados en el dispositivo objetivo.

- **Pruebas de Longitud de Texto**: Probar la función de transferencia de texto con textos de diferentes longitudes para verificar que pueda acomodar diferentes tamaños de texto sin problemas.

- **Manejo de Errores**: Probar escenarios de error, como pérdida de conexión o interrupción durante la transferencia de texto, para asegurar que la aplicación anfitriona maneje estas situaciones de manera adecuada y proporcione retroalimentación apropiada al usuario.

- **Pruebas de Rendimiento**: Evaluar el rendimiento de la función de transferencia de texto bajo varias condiciones, incluyendo en ordenadores más antiguos o lentos, para identificar posibles problemas con la recepción incorrecta de señales de entrada HID y asegurar un funcionamiento fluido.

- **Pruebas de Interfaz de Usuario**: Asegurar que la interfaz de usuario de la aplicación anfitriona proporcione controles intuitivos y retroalimentación para iniciar y monitorear las operaciones de transferencia de texto, facilitando a los usuarios la comprensión y uso efectivo de esta función.

## Adicional

- **Manejo de Errores**: Probar los mecanismos de manejo de errores para una recuperación adecuada de las interrupciones.
- **Rendimiento**: Evaluar el rendimiento del mini-KVM bajo varios escenarios de carga de trabajo.
- **Estabilidad**: Realizar pruebas de estrés para la estabilidad y fiabilidad a largo plazo.