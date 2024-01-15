const aguardarTempo = async () => {
  const aguardar = (duration) => {
    return new Promise((resolve) => {
      setTimeout(resolve, duration);
    });
  };

  try {
    await aguardar(2000);
    console.log("Resolvido depois de 2 segundos");

    await aguardar(3000);
    console.log("Resolvido depois de 3 segundos");

    await aguardar(1000);
    console.log("Resolvido depois de 1 segundos");
  } catch (erro) {
    console.log("Ocorreu um erro!", erro.message);
  }
};

aguardarTempo();