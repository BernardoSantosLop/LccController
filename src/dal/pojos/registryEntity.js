module.exports = class Registry {
  registryId;

  temperatura;

  presion;

  caudal;

  velocidad;

  cbdEstimado;

  constructor(
    registryId,
    temperatura,
    presion,
    caudal,
    velocidad,
    cbdEstimado,
  ) {
    this.registryId = registryId;
    this.temperatura = temperatura;
    this.presion = presion;
    this.caudal = caudal;
    this.velocidad = velocidad;
    this.cbdEstimado = cbdEstimado;
  }
};
