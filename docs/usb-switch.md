# Mecánica del Puerto USB Conmutable

![switch-graphics](images/product/switch-graphics.svg#only-light){:style="width:460px"}
![switch-graphics](images/product/switch-graphics_1.svg#only-dark){:style="width:460px"}

El dispositivo mini-KVM cuenta con un puerto USB-A 2.0 conmutable que puede alternarse entre la computadora anfitriona y la computadora objetivo, pero no puede estar conectado a ambas simultáneamente. Esta funcionalidad se controla tanto mediante un interruptor físico como un interruptor de software en la aplicación del anfitrión. Este documento explica la mecánica y la lógica detrás de estos interruptores.

## Tipos de Interruptores

- **Interruptor de Software**: Un botón de alternancia en la aplicación del anfitrión.
      - Alterna la conexión del puerto USB entre las computadoras anfitriona y objetivo

- ![Toggle Switch](images/shell-icons/toggle-h-t.svg#only-light){:style="height:20px"} ![Toggle Switch](images/shell-icons/toggle-h-t_1.svg#only-dark){:style="height:20px"} **Interruptor de Hardware**: Un interruptor físico de dos posiciones en el dispositivo.
      - Posición hacia adentro: Conecta a la computadora anfitriona
      - Posición hacia afuera: Conecta a la computadora objetivo

## Configuración Inicial y Sincronización

Cuando el mini-KVM está correctamente conectado y se inicia la aplicación del anfitrión:

1. La conexión real del puerto USB del dispositivo (circuito) inicialmente se conecta a la computadora anfitriona.
2. La aplicación del anfitrión detecta la posición actual del interruptor de hardware, que está configurado en la computadora anfitriona o en la computadora objetivo.
3. El interruptor de software se sincroniza con la posición del interruptor de hardware.
4. La conexión del circuito real se actualiza para coincidir con las posiciones de los interruptores.

!!! advertencia "Limitación de Hardware"
    Si una unidad USB ya está conectada al dispositivo antes de encenderlo o iniciar la aplicación del anfitrión, la computadora anfitriona emitirá una advertencia sobre la extracción insegura del dispositivo USB. Esta es una limitación de hardware para la versión 1.9. Por lo tanto, se recomienda no conectar ningún dispositivo USB antes de encender el dispositivo o iniciar nuestra aplicación del anfitrión.

## Estados Operativos

Debido a la presencia de interruptores de hardware y software, pueden ocurrir cuatro estados posibles:

- **Estado 1** (Sincronizado, Conectado al Anfitrión):
      - Interruptor de Hardware: Apunta al Anfitrión ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - Interruptor de Software: Apunta al Anfitrión ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - Conexión del Puerto USB: Conectado al Anfitrión ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}

- **Estado 2** (Sincronizado, Conectado al Objetivo):
      - Interruptor de Hardware: Apunta al Objetivo ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - Interruptor de Software: Apunta al Objetivo ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - Conexión del Puerto USB: Conectado al Objetivo ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}

- **Estado 3** (Fuera de Sincronización, USB Conectado al Anfitrión):
      - Interruptor de Hardware: Apunta al Objetivo ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - Interruptor de Software: Apunta al Anfitrión ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - Conexión del Puerto USB: Conectado al Anfitrión ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}

- **Estado 4** (Fuera de Sincronización, USB Conectado al Objetivo):
      - Interruptor de Hardware: Apunta al Anfitrión ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - Interruptor de Software: Apunta al Objetivo ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - Conexión del Puerto USB: Conectado al Objetivo ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}

## Transiciones de Estado y Lógica

### Desde **Estado 1** (Sincronizado con el Anfitrión)

- ^^***Escenario 1a***^^: El usuario mueve el Interruptor de Hardware al Objetivo
      - Actualizar la variable de estado interno al Objetivo ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - Actualizar la pantalla de la aplicación del anfitrión para mostrar el Objetivo ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - Cambiar la conexión del circuito real al Objetivo ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - Transición al Estado 2, sincronizado

- ***Escenario 1b***: El usuario hace clic en el Interruptor de Software al Objetivo
      - Actualizar la variable de estado interno al Objetivo ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - La posición del interruptor de hardware permanece sin cambios (apuntando al Anfitrión ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"})
      - Cambiar la conexión del circuito real al Objetivo ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - Transición al Estado 3, fuera de sincronización

### Desde **Estado 2** (Sincronizado con el Objetivo)

- ^^***Escenario 2a***^^: El usuario mueve el Interruptor de Hardware al Anfitrión ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}:
      - Actualizar la variable de estado interno al Anfitrión ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - Actualizar la pantalla del interruptor de software para mostrar el Anfitrión ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - Cambiar la conexión del circuito real al Anfitrión ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - Transición al Estado 1, sincronizado

- ***Escenario 2b***: El usuario hace clic en el Interruptor de Software al Anfitrión ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}:
      - Actualizar la variable de estado interno al Anfitrión ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - La posición del interruptor de hardware permanece sin cambios (apuntando al Objetivo ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"})
      - Cambiar la conexión del circuito real al Anfitrión ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - Transición al Estado 4, fuera de sincronización

### Desde **Estado 3** (Fuera de Sincronización, USB Conectado al Anfitrión)

- ^^***Escenario 3a***^^: El usuario mueve el Interruptor de Hardware al Objetivo ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}:
      - No hay cambios en las variables
      - Transición al Estado 2, sincronizado

- ***Escenario 3b***: El usuario hace clic en el Interruptor de Software al Anfitrión ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}:
      - Actualizar la variable de estado interno al Anfitrión ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - La posición del interruptor de hardware permanece sin cambios (apuntando al Objetivo ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"})
      - Cambiar la conexión del circuito real al Anfitrión ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - Transición al Estado 1, sincronizado

### Desde **Estado 4** (Fuera de Sincronización, USB Conectado al Objetivo)

- ^^***Escenario 4a***^^: El usuario mueve el Interruptor de Hardware al Anfitrión ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}:
      - No hay cambios en las variables
      - Transición al Estado 1, sincronizado

- ***Escenario 4b***: El usuario hace clic en el Interruptor de Software al Objetivo ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}:
      - Actualizar la variable de estado interno al Objetivo ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - La posición del interruptor de hardware permanece sin cambios (apuntando al Anfitrión ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"})
      - Cambiar la conexión del circuito real al Objetivo ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - Transición al Estado 2, sincronizado

!!! advertencia "Recuerde expulsar la unidad flash antes de alternar el interruptor"
    Si el puerto USB está siendo utilizado por una unidad flash, asegúrese de expulsar la unidad flash antes de alternar el interruptor para transferir el uso del puerto a otra computadora.

!!! advertencia "Limitaciones de energía del USB"
    La energía suministrada por el puerto USB depende de la placa base del Anfitrión. No se recomienda conectar dispositivos USB que requieran mucha energía. Típicamente, el consumo de energía no debe exceder los 1.5W. Conectar dispositivos de alta potencia puede resultar en una operación inestable o daño potencial.

!!! Nota "Guía para el Usuario"
    - **Prioridad del Interruptor de Software**: Independientemente de la posición del interruptor de hardware, hacer clic en el interruptor de software cambiará inmediatamente la dirección del circuito.

    - **Sincronización del Interruptor de Hardware**: Cualquier alternancia manual del Interruptor de Hardware alineará su estado con el Interruptor de Software, pasando al Estado 1 o Estado 2 desde el Estado 3 o Estado 4 fuera de sincronización. Sin embargo, esta sincronización no necesariamente alterará la conexión real del circuito.

    - **Monitoreo del Interruptor de Hardware**: El Interruptor de Hardware, a pesar de ser físico, es monitoreado por el software y no controla directamente la dirección del circuito. En su lugar, el software interpreta la posición del interruptor y gestiona el cambio real del circuito.

## Por Qué Importa la Conmutación USB Controlada por Software

La mejora de la conmutación USB controlada por software introducida en la versión 1.9 es una característica fundamental para nuestros planes de desarrollo futuro, particularmente en el soporte de soluciones KVM-over-IP como VNC (que aún no hemos implementado). Esta capacidad permite a los usuarios alternar y compartir el puerto USB entre las computadoras objetivo y anfitriona de forma remota, lo cual es especialmente crucial para facilitar la transferencia de archivos en una configuración remota.

Esta característica abre un mundo de posibilidades para la gestión y el control remoto. Por ejemplo, permite transferencias de archivos entre dispositivos sin intervención física, mejorando la eficiencia de la solución de problemas y la gestión del sistema de forma remota.

¿Tienes ideas creativas sobre cómo aprovechar esta característica? ¡Nos encantaría hablar contigo! Únete a la comunidad de Openterface [community](/community/) y comparte tus pensamientos 😃
