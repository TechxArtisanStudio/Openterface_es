---
description: "Guía completa de los controles básicos de Openterface Mini-KVM: modos de mouse, entrada de teclado, acceso a BIOS, soporte de audio/video y conmutación USB. Compatible con múltiples sistemas operativos y dispositivos, soportando entrada de video de hasta 4K@30Hz."
keywords: "Controles Mini-KVM, modos de control de mouse, entrada de teclado, acceso a BIOS, transmisión de audio, visualización de video, conmutación USB, compatibilidad de dispositivos, configuración de KVM, control de hardware, soporte 4K, señales HID, control de dispositivo objetivo, software de host, entrada HDMI"
---

# Control Básico para Aplicaciones de Host

![use-case-pc-angled-view](https://assets.openterface.com/images/product/use-case-pc-angled-view.jpg){ width=600 }

## 💻 Compatibilidad

- **Software de Host**: Instala nuestra [aplicación de host](/app) para macOS, Windows y Linux para controlar tus dispositivos objetivo. Asegúrate de que tu sistema host sea compatible con la versión correspondiente de la aplicación.
- **Compatibilidad del Dispositivo Objetivo**: No se requiere preinstalación ni configuración en el dispositivo objetivo. Siempre que el dispositivo objetivo soporte operaciones de UI con salida de video (por ejemplo, HDMI, VGA) y tenga un puerto USB para recibir señales de control de teclado y mouse emuladas (HID), se puede utilizar. Las plataformas objetivo soportadas incluyen Windows, macOS, Linux, Android e iOS.

## 🖱 Control del Mouse

- **Modo Absoluto**: El cursor del mouse del objetivo está mapeado directamente a una posición específica en la pantalla del host a través de nuestra aplicación. Esto significa que donde sea que muevas el mouse del host dentro de nuestra aplicación, el mouse del objetivo seguirá el mismo movimiento. Ten en cuenta que puede haber un ligero retraso en los movimientos del cursor. Puedes elegir ocultar o mostrar el cursor del mouse del host mientras está en nuestra aplicación.

- **Modo Relativo**: El movimiento del mouse del objetivo es relativo a la posición actual del mouse del host. Esto significa que mover el mouse del host desplazará el cursor del objetivo por una cierta distancia en la misma dirección, sin un punto de inicio o final fijo. Puedes salir de este modo relativo usando un atajo específico.

## ⌨️ Teclado

Cuando la aplicación está enfocada, puedes escribir cualquier cosa directamente, y estas pulsaciones de teclas se pasarán a la computadora del objetivo.

## ⚙️ Acceso a Nivel de BIOS

- **Acceso a BIOS**: Usa nuestra aplicación para acceder a la BIOS de tus dispositivos objetivo. Esto te permite controlar y configurar ajustes directamente desde la BIOS.

??? tip "Pulsaciones de teclas para entrar a la BIOS en diferentes placas base"

    - F2: Dell, Lenovo, ASUS, Acer, Toshiba, Samsung, Sony
    - F1: Lenovo
    - Del: ASUS, Acer, Gigabyte, MSI
    - F10: HP
    - Botón de Asistencia: Sony
    - Tecla Opción (⌥): Apple (para acceder al gestor de inicio)

## 🔊 Sonido

- **Transmisión de Audio**: El audio de la computadora objetivo se transmite a través del puerto de entrada HDMI del mini-KVM. Al usar nuestra aplicación, el sonido de la computadora objetivo se reproducirá a través de la computadora host, asegurando que escuches todo sin problemas.

## 🎥 Video

- **Visualización de Video**: Nuestra aplicación te permite ver la pantalla de la computadora objetivo sin problemas. Soporta resoluciones de video de hasta 1920x1080 a 30Hz para visualización dentro de la aplicación. La entrada de video máxima soportada es de hasta 3840x2160 a 30Hz a través de HDMI. Además, con el uso de un adaptador, también puede acomodar VGA, Micro HDMI, DVI y otras fuentes de entrada de video.

## 🔄 Puerto USB Conmutable

- **Uso del Puerto USB**: El mini-KVM cuenta con un puerto USB-A 2.0 conmutable que se puede alternar entre las computadoras host y objetivo, pero no ambas simultáneamente.
- **Métodos de Conmutación**: 
    - Interruptor de Hardware: Un interruptor físico en el dispositivo
    - Interruptor de Software: Un botón en la aplicación de host
- **Lógica de Conmutación**: Para más información detallada sobre la lógica de cómo opera el puerto USB conmutable, incluyendo la interacción entre los interruptores de hardware y software, la configuración inicial, los estados operativos y las transiciones de estado, consulta la [documentación del Interruptor USB](/usb-switch).

!!! warning "Importante"
    - Recuerda expulsar cualquier unidad USB conectada antes de cambiar la conexión del puerto.
    - El puerto USB tiene limitaciones de potencia. No conectes dispositivos que requieran mucha potencia, ya que esto puede resultar en un funcionamiento inestable o daños potenciales.
