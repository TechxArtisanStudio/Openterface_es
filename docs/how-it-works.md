---
comments: true
---

# Cómo Funciona

## Desglose del Proceso

- **Transmisión de Pantalla**: El mini-KVM captura el flujo de pantalla desde el ordenador objetivo y lo muestra en la aplicación del ordenador host. Esto permite a los usuarios ver y gestionar el sistema objetivo directamente desde su máquina principal.
- **Control de Cursor y Ratón**: Moviendo el ratón a la ventana de la aplicación en el ordenador host, los usuarios pueden controlar el cursor en el dispositivo objetivo como si estuvieran utilizando un VNC. Esta funcionalidad permite operar dos sistemas simultáneamente en una misma pantalla.
- **Entrada de Teclado**: Cuando la ventana de la aplicación está activa, cualquier pulsación de tecla realizada en el teclado del ordenador host se transmite al dispositivo objetivo, permitiendo una escritura y entrada de comandos sin problemas.
- **Conversión de Señal HID**: Todas las entradas de teclado y ratón dentro de la aplicación se convierten en señales de control de Dispositivo de Interfaz Humana (HID), que luego se envían al ordenador objetivo.
- **Sincronización**: La aplicación garantiza que la pantalla y el cursor del ordenador objetivo estén sincronizados con la pantalla del ordenador host, facilitando una experiencia de usuario unificada.

## Explorar Detalles del Hardware

- [Openterface_Mini-KVM_Hardware](https://github.com/TechxArtisanStudio/Openterface_Mini-KVM_Hardware): Explora nuestro diseño de hardware completo, esquemas y componentes.

![openterface-mini-kvm-product-with-PCB](/images/product/openterface-mini-kvm-product-with-PCB.jpg)

<section class="dialogue-section-white" id="dialogues-section">
    <div class="container">
        <div class="callout-button-container">
            <div class="dialogue-bubble" id="op-bubble">
                <img src="/images/op-avatar.jpg" alt="avatar" class="avatar" draggable="false">
                <p>Leer más 📖</p>
                <a href="/faq" class="md-button md-button--primary" id="join-waitlist-button">Preguntas frecuentes</a>
            </div>
            <div class="dialogue-bubble" id="op-bubble">
                <img src="/images/op-avatar.jpg" alt="avatar" class="avatar" draggable="false">
                <p>¿Pregunta?🤔</p>
                <a href="https://www.reddit.com/r/Openterface_miniKVM/" class="md-button md-button--primary" id="join-waitlist-button">Preguntar en el Subreddit</a>
            </div>
        </div>
    </div>
</section>