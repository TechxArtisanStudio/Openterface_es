---
title: "Cómo Conectar"
description: "Guía paso a paso para configurar el Mini-KVM Openterface. Aprende cómo conectar tu computadora host y dispositivo objetivo con instrucciones detalladas para conexiones USB-C, HDMI y periféricas. Incluye descripciones de interfaces y consejos importantes de configuración."
keywords: "configuración Mini-KVM, guía de conexión KVM, configuración KVM USB-C, conexión KVM HDMI, guía de instalación KVM, configuración de periféricos de computadora, conexión de dispositivos USB, guía de interfaz KVM, configuración de computadora sin cabeza, configuración KVM"
---

# **Cómo Conectar** | Guía de Configuración | Mini-KVM Openterface

## Pasos de Conexión

![to-host](https://assets.openterface.com/images/product/to-host.svg#only-light){:style="height:260px"} ![to-host](https://assets.openterface.com/images/product/to-host_1.svg#only-dark){:style="height:260px"}
![to-target](https://assets.openterface.com/images/product/to-target.svg#only-light){:style="height:260px"} ![to-target](https://assets.openterface.com/images/product/to-target_1.svg#only-dark){:style="height:260px"}

Para configurar tu Mini-KVM, sigue estos pasos en orden:

1. **Conexión de la Computadora Host** (Lado Naranja):
    - Conecta la computadora host al mini-KVM utilizando el cable USB Type-C naranja de 1.5m. Conéctalo al puerto Type-C hembra en el lado naranja del mini-KVM.

    !!! note "Aplicación Host Requerida"
        La computadora host necesita tener instalada la aplicación host. Para más información y enlaces de descarga, consulta la página de [Aplicación](/app).

2. **Conexión del Dispositivo Objetivo** (Lado Negro):
    - Conecta el dispositivo objetivo al mini-KVM utilizando el cable USB Type-C negro de 0.3m. Conéctalo al puerto Type-C hembra en el lado negro del mini-KVM.

3. **Conexión de Salida de Video del Objetivo** (Lado Negro):
    - Conecta el puerto de salida de video del dispositivo objetivo al puerto HDMI hembra en el lado negro del mini-KVM. Utiliza el cable HDMI negro de 0.3m, o cualquier otro cable apropiado de fuente de video a HDMI, como un cable convertidor de VGA a HDMI.

    !!! note "No se Requiere Aplicación para el Objetivo"
        No se requiere preinstalación ni configuración en el dispositivo objetivo. Siempre que el dispositivo objetivo soporte operaciones de UI con salida de video (HDMI, VGA, etc.) y tenga un puerto USB para recibir señales de control emuladas de teclado y ratón (HID), puede ser utilizado. Por lo tanto, las plataformas de dispositivos objetivo soportadas incluyen Windows, macOS, Linux, Android e iOS.

4. **Conexión del Puerto USB-A 2.0 Conmutable** (Opcional):
    - Si deseas conectar un dispositivo USB al Puerto USB-A 2.0 Conmutable, se recomienda hacerlo después de completar las tres conexiones anteriores y asegurarte de que la aplicación host esté abierta.


## Interfaces

![host-side](https://assets.openterface.com/images/product/host-htc.svg#only-light){:style="width:360px"}

![target-side](https://assets.openterface.com/images/product/target-htc.svg#only-light){:style="width:360px"}

![host-side](https://assets.openterface.com/images/product/host-htc_1.svg#only-dark){:style="width:360px"}

![target-side](https://assets.openterface.com/images/product/target-htc_1.svg#only-dark){:style="width:360px"}

① ![Type-C to Host](/images/shell-icons/host.svg#only-light){:style="height:15px"} ![Type-C to Host](/images/shell-icons/host_1.svg#only-dark){:style="height:15px"} - **Puerto USB-C Host** (Hembra): Como un puerto de dispositivo USB, conectándose a la computadora Host para transferencia de datos a través del hub USB integrado

② ![Type-C to Target](/images/shell-icons/target.svg#only-light){:style="height:18px"} ![Type-C to Target](/images/shell-icons/target_1.svg#only-dark){:style="height:18px"} - **Puerto USB-C Objetivo** (Hembra): Como un puerto de dispositivo USB, conectándose a la computadora Host para emular la salida HID de teclado y ratón a través del hub USB integrado

③ ![HDMI Input](/images/shell-icons/input.svg#only-light){:style="height:18px"} ![HDMI Input](/images/shell-icons/input_1.svg#only-dark){:style="height:18px"} - **Puerto de Entrada HDMI** (Hembra): Entrada de fuente HDMI desde la computadora Objetivo

④ ![USB-A Port](/images/shell-icons/switchable-usb.svg#only-light){:style="height:26px"} ![USB-A Port](/images/shell-icons/switchable-usb_1.svg#only-dark){:style="height:26px"} - **Puerto USB-A 2.0 Conmutable** (Hembra): Como un puerto host USB, utilizado por la computadora host o la computadora objetivo en cualquier momento, pero no simultáneamente. Consulta la [Guía de Conmutación de Puertos USB](../usb-switch) para más información.

!!! warning "Limitaciones de Potencia USB"
    La potencia suministrada por el puerto USB depende de la placa base del Host. No se recomienda conectar dispositivos USB que requieran mucha potencia. Típicamente, el consumo de energía no debe exceder 1.5W. Conectar dispositivos de alta potencia puede resultar en un funcionamiento inestable o daños potenciales.

!!! warning "El Puerto USB-A Tiene un Mecanismo de Bloqueo Firme"
    El puerto USB-A incluye un mecanismo de bloqueo que requiere fuerza adicional al conectar o desconectar dispositivos. Esto es intencional y asegura una conexión segura. **Evita usar dispositivos USB muy pequeños** (como unidades USB ultra-compactas), ya que pueden ser difíciles de agarrar y quitar, lo que puede llevar a daños.

!!! warning "Un Hub USB Adicional Requiere Alimentación Externa y Puede Afectar la Compatibilidad"
    El mini-KVM ya incluye un hub USB integrado que se conecta tanto a la computadora host como a la computadora objetivo. Si conectas un hub USB externo adicional al puerto USB-A, cualquier dispositivo USB conectado a él operará a un nivel más profundo en el árbol de dispositivos USB. Algunas computadoras pueden tener limitaciones en la profundidad del árbol USB, lo que puede causar problemas de compatibilidad o impedir que ciertos dispositivos funcionen correctamente.

    Además, asegúrate de que cualquier hub USB conectado tenga alimentación externa. Los hubs no alimentados pueden causar inestabilidad o mal funcionamiento de toda la configuración del mini-KVM.

⑤ ![Toggle Switch](/images/shell-icons/toggle-h-t.svg#only-light){:style="height:20px"} ![Toggle Switch](/images/shell-icons/toggle-h-t_1.svg#only-dark){:style="height:20px"} - **Interruptor de Conmutación**: Para alternar la conexión del puerto USB-A 2.0 entre la computadora host y la computadora objetivo

⑥ ![Extension Pins](/images/shell-icons/pins.svg#only-light){:style="height:15px"} ![Extension Pins](/images/shell-icons/pins_1.svg#only-dark){:style="height:15px"} - **Pines de Extensión**: Ocultos por defecto y solo accesibles al reemplazar la tapa superior con una tapa alternativa. Para más información, consulta [Pines de Extensión](../extension-pins) para uso de desarrolladores.