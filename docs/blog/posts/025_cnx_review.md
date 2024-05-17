---
date: 2024-05-09
authors:
  - CNXSOFT
categories:
  - Reseñas de influencers
---

# Reseña de producto por CNX Software: Openterface Mini-KVM - un dispositivo KVM-over-USB asequible (Crowdfunding)
**9 DE MAYO DE 2024 POR JEAN-LUC AUFRANC (CNXSOFT)**

**Openterface Mini-KVM** es un dispositivo compacto de hardware de código abierto KVM-over-USB con entradas HDMI y de audio que se conecta a través de un puerto USB-C al ordenador anfitrión.

Hemos visto bastantes soluciones económicas de [KVM-over-IP](https://www.cnx-software.com/2023/04/18/blikvm-open-source-kvm-over-ip-raspberry-pi-cm4-raspberry-pi-hat-pcie-board-allwinner-h616/) basadas en ordenadores de placa única a lo largo de los años, pero el **Openterface Mini-KVM** es bastante diferente (y más barato) al ser un dispositivo KVM-over-USB plug-and-play e independiente de la red que establece una conexión directa HDMI y USB entre el ordenador anfitrión y el dispositivo objetivo. Soporta muchas de las mismas funciones que las soluciones KVM-over-IP, excepto algunas funciones como el soporte ATX que se encuentra en el [PiKVM v4 Plus](https://docs.pikvm.org/v4/) o el [Pi-Cast KVM](https://www.cnx-software.com/2023/12/24/pi-cast-portable-kvm-switch-raspberry-pi-cm4/) con una placa de expansión que permite apagar el dispositivo objetivo desde el dispositivo anfitrión.

<!-- more -->

![Openinterface-Mini-KVM-1](https://www.cnx-software.com/wp-content/uploads/2024/05/Openinterface-Mini-KVM-1.jpg)

## Especificaciones del Mini-KVM (modelo LIG03D01):
- **Método de control**: KVM-over-USB
- **Captura de vídeo**: Hasta 1920×1080 @ 30 Hz con menos de 140ms de latencia a través de HDMI o VGA (este último requiere un cable adicional VGA a HDMI)
- **Captura de audio**: A través de HDMI
- **Transferencia de texto**: El texto se puede enviar desde el anfitrión al dispositivo objetivo mediante la salida del teclado emulado. Útil para copiar nombres de usuario, contraseñas o fragmentos de código.
- **Puerto USB**: Puerto USB 2.0 Tipo-A conmutado al anfitrión o al objetivo para transferir archivos desde/hacia un controlador USB o compartir otros dispositivos USB
- **Acceso a la BIOS**: Acceso directo a la BIOS del dispositivo objetivo para actualizaciones de firmware y gestión de inicio.
- **Fuente de alimentación**: A través de USB-C desde el ordenador anfitrión
- **Dimensiones**: 61 x 53 x 13.5 mm
- **Peso**: 48 gramos

![KVM-over-USB-Raspberry-Pi-target-laptop-guest.webp](https://www.cnx-software.com/wp-content/uploads/2024/05/KVM-over-USB-Raspberry-Pi-target-laptop-guest.webp)

La aplicación del anfitrión estará pronto disponible para **macOS, Windows, Linux y Android**. Podrá seguir el desarrollo de cada aplicación y acceder a los archivos de diseño de hardware en [GitHub](https://github.com/TechxArtisanStudio) en los siguientes repositorios (actualmente todos vacíos):
- **Openterface_MacOS** – Aplicaciones del anfitrión para MacOS
- **Openterface_QT** – Aplicaciones del anfitrión para Windows y Linux
- **Openterface_Android** – Aplicaciones del anfitrión para soporte Android
- **Openterface_Mini-KVM_Hardware** – Diseño de hardware, esquemas y componentes

La empresa (TECHxARTISAN) dice que la solución KVM-over-USB puede ser útil para:
- Profesionales de TI que solucionan problemas de servidores
- Técnicos que reparan cajeros automáticos, VLTs y quioscos
- Desarrolladores que gestionan dispositivos de computación en el borde
- Entusiastas de la tecnología que experimentan con ordenadores de placa única
- Profesionales que requieren operaciones locales seguras en segregación de redes, como aquellos que gestionan activos criptográficos
- Cualquier persona que necesite flujos de trabajo integrados frecuentemente entre ordenadores personales y de trabajo

Parece especialmente útil para acceder a hardware sin cabeza con un portátil sin pantalla, teclado y ratón adicionales.

![Mini-KVM-vs-StarTech-Crash-Cart-NOTECONS02-KVM-over-USB](https://www.cnx-software.com/wp-content/uploads/2024/05/Mini-KVM-vs-StarTech-Crash-Cart-NOTECONS02-KVM-over-USB.webp)

El kit Mini-KVM es bastante más barato que el dispositivo KVM-over-USB StarTech Crash Cart NOTECONS02 que soporta entrada VGA y [se vende por unos $400](https://amzn.to/4boOmXw), así como las soluciones KVM-over-IP aunque no seleccionaron exactamente [la opción más barata](https://www.cnx-software.com/2023/04/18/blikvm-open-source-kvm-over-ip-raspberry-pi-cm4-raspberry-pi-hat-pcie-board-allwinner-h616/) en esta tabla de comparación...

La empresa acaba de lanzar el Mini-KVM [en Crowd Supply](https://www.crowdsupply.com/techxartisan/openterface-mini-kvm) con una meta de $12,000 que ya ha sido superada. Hay dos recompensas principales disponibles:

- **$79**: Openterface Mini-KVM con Guía de Inicio Rápido
- **$99**: Openterface Mini-KVM Toolkit con los mismos artículos que en la recompensa de $79, además de un cable HDMI macho a macho de 30 cm, un cable USB-C macho a USB-A macho de 30 cm con adaptador de USB-A hembra a USB-C macho, un cable USB-C macho a macho de 1.5 metros y una bolsa de herramientas.

También hay un convertidor de VGA + audio a HDMI que podría ser útil para sistemas de servidores o sistemas más antiguos que solo tienen un puerto VGA. El envío añade $8 a los EE.UU., y $18 al resto del mundo. Los patrocinadores deberían esperar que sus recompensas se envíen a finales de septiembre de 2024 si todo va según lo planeado. También se pueden encontrar detalles adicionales en [el sitio web del proyecto](http://openterface.com/).

<iframe width="560" height="315" src="https://www.youtube.com/embed/6OWaVIRXCaw?si=KpzsXY0ET8KnG8qT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
