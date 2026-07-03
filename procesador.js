// archivo: procesador.js
// Ubicación: En la raíz de tu carpeta de proyecto

/**
 * Esta función simula el "Cerebro" de nuestro asistente.
 * Recibe el mensaje del cliente y el perfil del negocio para decidir qué responder.
 */
function generarRespuestaIA(mensajeCliente, perfilEmpresa) {
    // Convertimos el mensaje a minúsculas para que sea fácil de evaluar
    const mensaje = mensajeCliente.toLowerCase();

    // Contexto del negocio que la IA utilizaría para guiar su respuesta
    const contextoIA = `Eres el asistente virtual de ${perfilEmpresa.nombre}. Teléfono: ${perfilEmpresa.telefono}. `;

    // Simulación de lógica de IA (Evaluación de intenciones del cliente)
    if (mensaje.includes("precio") || mensaje.includes("costo") || mensaje.includes("cuánto cuesta")) {
        return `${contextoIA}Por supuesto, nuestros precios base son: ${perfilEmpresa.precios}. ¿Te gustaría agendar un pedido?`;
    } 
    
    if (mensaje.includes("horario") || mensaje.includes("abierto")) {
        return `${contextoIA}Atendemos con gusto en el siguiente horario: ${perfilEmpresa.horario}.`;
    }

    if (mensaje.includes("humano") || mensaje.includes("asesor")) {
        return `Entendido. Te estoy transfiriendo con un asesor humano. Un momento por favor.`;
    }

    // Respuesta por defecto si no entiende la intención exacta
    return `${contextoIA}Hola, recibí tu mensaje: "${mensajeCliente}". ¿En qué puedo ayudarte hoy respecto a nuestros servicios?`;
}

// === DATOS DE PRUEBA (Caso de Estudio: Tienda de Tecnología) ===
const miEmpresaConfigurada = {
    nombre: "TecnoTech Soluciones",
    telefono: "+591 70000000",
    horario: "Lunes a Viernes de 09:00 a 18:30",
    precios: "Sistemas POS desde $150, Soporte Técnico desde $30"
};

// Simulamos un mensaje que llegaría desde WhatsApp
const mensajeSimulado = "Hola, ¿cuál es el precio de los sistemas POS?";

// Ejecutamos la función
const respuestaFinal = generarRespuestaIA(mensajeSimulado, miEmpresaConfigurada);

// Mostramos el resultado en la consola del desarrollador
console.log("=== SIMULADOR DE ASISTENTE VIRTUAL ===");
console.log(`Cliente dijo: "${mensajeSimulado}"`);
console.log(`Asistente IA responde: "${respuestaFinal}"`);
