import bcrypt from 'bcryptjs';

// 1. Aquí defines la contraseña que quieres usar
const miContrasena = "admin123"; 

// 2. El sistema la encripta (el número 10 es el nivel de seguridad)
const codigoEncriptado = bcrypt.hashSync(miContrasena, 10);

// 3. Te muestra el resultado en la terminal


console.log("\n" + codigoEncriptado + "\n");
