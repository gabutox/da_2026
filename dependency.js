const dependencies = new Map();

export function getDependency(name) {
    return dependencies.get(name);
}//Esto es un contenedor de dependencias muy simple. Permite registrar dependencias con un nombre y luego recuperarlas en cualquier parte de la aplicación usando ese nombre. Es útil para desacoplar componentes y facilitar la gestión de dependencias.

export function addDependency(name, dependency) {
    if (dependencies.has(name)) {
        throw new Error(`Dependency with name ${name} already exists`);
    }
    dependencies.set(name, dependency);
}