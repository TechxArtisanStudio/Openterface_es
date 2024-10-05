# Guía de Pines de Extensión

![change-cap](images/product/change-cap.svg#only-light){:style="height:300px"}
![change-cap](images/product/change-cap_1.svg#only-dark){:style="height:300px"}

El Openterface Mini-KVM cuenta con pines de extensión para desarrollo avanzado y experimentación con [Software Abierto](/app). Estos pines no están expuestos en la configuración estándar del dispositivo.

### Acceso a los Pines de Extensión para Desarrollo

Para acceder a los pines de extensión:

1. Desmonta el dispositivo
2. Sustituye la tapa original del dispositivo con una tapa especializada para pines de extensión
3. Descarga el modelo 3D de la tapa para pines de extensión desde nuestro [repositorio de GitHub](https://github.com/TechxArtisanStudio/Openterface_Mini-KVM_Hardware)

!!! warning "Garantía Anulada"
    Al retirar la tapa original, se anula la garantía del producto. Todas las modificaciones o desmontajes se realizan bajo el propio riesgo del usuario.

!!! note "Características Experimentales"
    Las características desarrolladas utilizando estos pines son experimentales y no han sido completamente probadas. Openterface no se hace responsable de cualquier daño, lesión o mal funcionamiento resultante de modificaciones, exposición de los pines de extensión u otras alteraciones al dispositivo.

### Distribución de los Pines

![target-side](images/product/extension-pins-1.svg#only-light){:style="height:200px"}
![host-side](images/product/extension-pins-2.svg#only-light){:style="height:200px"}
![target-side](images/product/extension-pins-1_1.svg#only-dark){:style="height:200px"}
![host-side](images/product/extension-pins-2_1.svg#only-dark){:style="height:200px"}

Los pines de extensión proporcionan las siguientes conexiones:

1. Suministro de energía USB de 5V para componentes externos
2. Datos positivos al hub USB del host
3. Datos negativos al hub USB del host
4. Datos positivos al hub USB del target
5. Datos negativos al hub USB del target
6. Tierra

!!! danger "Conexiones Incorrectas"
    Confundir VCC y GND puede causar daños graves al dispositivo y a los componentes conectados. Siempre verifica las conexiones de los pines antes de encender el dispositivo.
