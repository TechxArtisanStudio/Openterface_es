---
title: "Pines de Extensión"
description: "Explora el potencial de los pines de extensión del Mini-KVM Openterface para el desarrollo de hardware personalizado y proyectos de código abierto."
keywords: "pines de extensión Mini-KVM, desarrollo personalizado, modificación de hardware, KVM de código abierto"
---

# **Pines de Extensión** | Modo Desarrollador | Mini-KVM Openterface

![mini-kvm-pins-port](/images/product/mini-kvm-pins-port.png){:style="height:360px"}
![pin-cap](/images/product/part/pin-cap.jpg){:style="height:300px"}

El Mini-KVM Openterface cuenta con pines de extensión para el desarrollo avanzado y la experimentación con [Software Abierto](/app). Estos pines no están expuestos en la configuración estándar de la carcasa.

## Cómo Acceder a los Pines

1. Desmonta el dispositivo.
2. Reemplaza la tapa original de la carcasa con una tapa de pines de extensión especializada.
3. Descarga el [modelo 3D](https://github.com/TechxArtisanStudio/Openterface_Mini-KVM_Hardware/tree/main/models) para la tapa de pines de extensión.
4. Consulta nuestro [repositorio de Hardware en GitHub](https://github.com/TechxArtisanStudio/Openterface_Mini-KVM_Hardware).

![change-cap](/images/product/change-cap.svg#only-light){:style="height:300px"}
![change-cap](/images/product/change-cap_1.svg#only-dark){:style="height:300px"}

!!! warning "Garantía Nula"
    Retirar la carcasa original puede anular la garantía del producto. Todas las modificaciones o desmontajes se realizan bajo el propio riesgo del usuario.

!!! note "Características Experimentales"
    Las características desarrolladas utilizando estos pines son experimentales y no han sido completamente probadas. Openterface no se hace responsable de ningún daño, lesión o mal funcionamiento resultante de modificaciones, exposición de los pines de extensión u otras alteraciones del dispositivo.

## Configuración de Pines

![target-side](/images/product/extension-pins-1.svg#only-light){:style="height:200px"}
![host-side](/images/product/extension-pins-2.svg#only-light){:style="height:200px"}
![target-side](/images/product/extension-pins-1_1.svg#only-dark){:style="height:200px"}
![host-side](/images/product/extension-pins-2_1.svg#only-dark){:style="height:200px"}

Los pines de extensión proporcionan las siguientes conexiones:

1. Suministro de energía USB 5V para componentes externos
2. Datos positivos al hub USB del host
3. Datos negativos al hub USB del host
4. Datos positivos al hub USB del objetivo
5. Datos negativos al hub USB del objetivo
6. Tierra

!!! danger "Conexiones Incorrectas Causan Daños"
    Mezclar VCC y GND puede causar daños severos al dispositivo y a los componentes conectados. Siempre verifica las conexiones de los pines antes de encender el dispositivo.

## Tapa de Pines de Extensión

![pin-cap](/images/product/part/pin-cap.jpg){:style="height:360px"}

Esta tapa de pines de extensión impresa en 3D reemplaza la tapa original del Mini-KVM Openterface, permitiendo a los usuarios avanzados exponer y acceder a los pines de extensión para el desarrollo personalizado. Puedes descargar los archivos del modelo 3D de nuestro repositorio de GitHub e imprimir la tapa tú mismo.

- **Uso**: Proporciona acceso a los pines de extensión para el desarrollo avanzado de hardware.
- **Descarga**: [Archivos del Modelo 3D](https://github.com/TechxArtisanStudio/Openterface_Mini-KVM_Hardware/tree/main/models)

## Involúcrate en el Desarrollo

A medida que continuamos desarrollando y experimentando, actualizaremos esta sección con más información sobre lo que estos pines pueden hacer y cómo se pueden utilizar de manera creativa. Tu creatividad y experiencia pueden ayudar a ampliar los límites de lo que es posible con el Mini-KVM Openterface. Por favor, involúcrate:

1. **Comparte tus Ideas**: ¿Tienes un concepto interesante para usar estos pines? ¡Nos encantaría escucharlo!
2. **Contribuye con Proyectos DIY**: Si has creado algo interesante, considera compartirlo con nuestra comunidad de [Discord Openterface](/discord).
3. **Únete a la Discusión**: Conéctate con otros desarrolladores y entusiastas para intercambiar ideas y colaborar.

¡Construyamos e innovemos juntos!