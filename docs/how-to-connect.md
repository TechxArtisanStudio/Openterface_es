# Cómo Conectar

## Interfaces

![host-side](images/product/host-htc.svg#only-light){:style="width:360px"}

![target-side](images/product/target-htc.svg#only-light){:style="width:360px"}

![host-side](images/product/host-htc_1.svg#only-dark){:style="width:360px"}

![target-side](images/product/target-htc_1.svg#only-dark){:style="width:360px"}

① ![Type-C to Host](images/shell-icons/host.svg#only-light){:style="height:15px"} ![Type-C to Host](images/shell-icons/host_1.svg#only-dark){:style="height:15px"} - **Puerto USB-C del Host** (Hembra): Conecta el puerto USB-C del Host para la transferencia de datos a través del hub USB integrado.

② ![Type-C to Target](images/shell-icons/target.svg#only-light){:style="height:18px"} ![Type-C to Target](images/shell-icons/target_1.svg#only-dark){:style="height:18px"} - **Puerto USB-C del Target** (Hembra): Conecta el puerto USB-C del Target para emular la salida de teclado y ratón HID a través del hub USB integrado.

③ ![HDMI Input](images/shell-icons/input.svg#only-light){:style="height:18px"} ![HDMI Input](images/shell-icons/input_1.svg#only-dark){:style="height:18px"} - **Puerto de Entrada HDMI** (Hembra): Entrada de fuente HDMI desde el dispositivo Target.

④ ![USB-A Port](images/shell-icons/switchable-usb.svg#only-light){:style="height:26px"} ![USB-A Port](images/shell-icons/switchable-usb_1.svg#only-dark){:style="height:26px"} - **Puerto USB-A 2.0 Conmutable** (Hembra): Utilizado por el Host o el Target, pero no simultáneamente.

!!! warning "Ajuste Ajustado"
    Ten en cuenta que este puerto USB-A hembra tiene un mecanismo de bloqueo, lo que requiere un poco más de fuerza para conectar y desconectar tus dispositivos USB.

⑤ ![Toggle Switch](images/shell-icons/toggle-h-t.svg#only-light){:style="height:20px"} ![Toggle Switch](images/shell-icons/toggle-h-t_1.svg#only-dark){:style="height:20px"} - **Interruptor de Conmutación**: Para alternar la conexión del puerto USB-A 2.0 entre el Host y el Target.

⑥ ![Extension Pins](images/shell-icons/pins.svg#only-light){:style="height:15px"} ![Extension Pins](images/shell-icons/pins_1.svg#only-dark){:style="height:15px"} - **Pines de Extensión**: Para más información, consulta [Pines de Extensión](/extension-pin) para uso de desarrolladores.

## Pasos de Conexión

![to-host](images/product/to-host.svg#only-light){:style="height:260px"} ![to-host](images/product/to-host_1.svg#only-dark){:style="height:260px"}
![to-target](images/product/to-target.svg#only-light){:style="height:260px"} ![to-target](images/product/to-target_1.svg#only-dark){:style="height:260px"}

Para configurar tu Mini-KVM, sigue estos pasos en orden:

1. **Conexión del Host** (Lado Naranja):
    - Conecta el Host al mini-KVM usando el cable USB Tipo-C naranja de 1.5m. Enchúfalo en el puerto USB-C hembra del lado naranja del mini-KVM.

    !!! note "App del Host Requerida"
        El Host necesita tener instalada la app del Host. Para más información y enlaces de descarga, consulta la [Documentación de la App](/app).

2. **Conexión del Dispositivo Target** (Lado Negro):
    - Conecta el dispositivo Target al mini-KVM usando el cable USB Tipo-C negro de 0.3m. Enchúfalo en el puerto USB-C hembra del lado negro del mini-KVM.

3. **Conexión de Salida de Video del Target** (Lado Negro):
    - Conecta el puerto de salida de video del dispositivo Target al puerto HDMI hembra del lado negro del mini-KVM. Usa el cable HDMI negro de 0.3m, o cualquier otro cable adecuado de fuente de video a HDMI, como un cable convertidor de VGA a HDMI.

    !!! note "No se Requiere App para el Target"
        No se necesita preinstalación o configuración en el dispositivo Target. Siempre que el dispositivo Target soporte operaciones de UI con salida de video (HDMI, VGA, etc.) y tenga un puerto USB para recibir señales de control de teclado y ratón emuladas (HID), puede ser utilizado. Por lo tanto, las plataformas de dispositivos Target compatibles incluyen Windows, macOS, Linux, Android y iOS.

4. **Conexión del Puerto USB-A 2.0 Conmutable** (Opcional):
    - Si deseas conectar un dispositivo USB al puerto USB-A 2.0 conmutable, se recomienda hacerlo después de completar las tres conexiones anteriores y asegurarte de que la app del Host esté abierta.

