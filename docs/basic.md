# Control Básico

![use-case-pc-angled-view](images/product/use-case-pc-angled-view.jpg)

## 💻 Compatibilidad

- **Software del Host**: Instala nuestra [aplicación de host](/app) para macOS, Windows y Linux para controlar tus dispositivos objetivo. Asegúrate de que tu sistema host sea compatible con la versión correspondiente de la aplicación.
- **Compatibilidad del Dispositivo Objetivo**: No se requiere preinstalación ni configuración en el dispositivo objetivo. Siempre que el dispositivo objetivo soporte operaciones de UI con salida de video (por ejemplo, HDMI, VGA) y tenga un puerto USB para recibir señales emuladas de control de teclado y ratón (HID), se puede utilizar. Las plataformas objetivo compatibles incluyen Windows, macOS, Linux, Android y iOS.

## 🖱 Control del Ratón

- **Modo Absoluto**: El cursor del ratón del dispositivo objetivo se mapea directamente a una posición específica en la pantalla del host a través de nuestra aplicación. Esto significa que donde muevas el ratón del host dentro de nuestra aplicación, el ratón del objetivo seguirá el mismo movimiento. Ten en cuenta que puede haber un ligero retraso en los movimientos del cursor. Puedes elegir ocultar o mostrar el cursor del ratón del host mientras está en nuestra aplicación.

- **Modo Relativo**: El movimiento del ratón del objetivo es relativo a la posición actual del ratón del host. Esto significa que mover el ratón del host desplazará el cursor del objetivo una cierta distancia en la misma dirección, sin un punto de inicio o fin fijo. Puedes salir de este modo relativo usando un atajo específico.

## ⌨️ Teclado

Cuando la aplicación está enfocada, puedes escribir cualquier cosa directamente, y estas pulsaciones de teclas se pasarán a la computadora objetivo.

## ⚙️ Acceso a Nivel de BIOS

- **Acceso a BIOS**: Usa nuestra aplicación para acceder al BIOS de tus dispositivos objetivo. Esto te permite controlar y configurar ajustes directamente desde el BIOS.

??? tip "Pulsaciones de teclas para entrar al BIOS en diferentes placas base"

    - F2: Dell, Lenovo, ASUS, Acer, Toshiba, Samsung, Sony
    - F1: Lenovo
    - Del: ASUS, Acer, Gigabyte, MSI
    - F10: HP
    - Botón Assist: Sony
    - Tecla Option (⌥): Apple (para acceder al gestor de arranque)

## 🔊 Sonido

- **Transmisión de Audio**: El audio de la computadora objetivo se transmite a través del puerto de entrada HDMI del mini-KVM. Al usar nuestra aplicación, el sonido de la computadora objetivo se reproducirá a través de la computadora host, asegurando que escuches todo sin problemas.

## 🎥 Video

- **Visualización de Video**: Nuestra aplicación te permite ver la pantalla de la computadora objetivo sin problemas. Soporta resoluciones de video de hasta 1920x1080 a 30Hz para visualización dentro de la aplicación. La entrada de video máxima soportada es de hasta 3840x2160 a 30Hz a través de HDMI. Además, con el uso de un adaptador, también puede acomodar VGA, Micro HDMI, DVI y otras fuentes de entrada de video.

## 🔄 Puerto USB Conmutable

- **Uso del Puerto USB**: El mini-KVM cuenta con un puerto USB-A 2.0 conmutable que se puede alternar entre las computadoras host y objetivo, pero no ambas simultáneamente.
- **Métodos de Conmutación**: 
    - Conmutador de Hardware: Un interruptor físico en el dispositivo
    - Conmutador de Software: Un botón en la aplicación del host
- **Lógica de Conmutación**: Para obtener información más detallada sobre la lógica de cómo opera el puerto USB conmutable, incluyendo la interacción entre los conmutadores de hardware y software, configuración inicial, estados operativos y transiciones de estado, consulta la [documentación del Conmutador USB](usb-switch.md).

!!! warning "Importante"
    - Recuerda expulsar cualquier unidad USB conectada antes de cambiar la conexión del puerto.
    - El puerto USB tiene limitaciones de potencia. No conectes dispositivos que requieran mucha energía, ya que esto puede resultar en una operación inestable o daño potencial.
