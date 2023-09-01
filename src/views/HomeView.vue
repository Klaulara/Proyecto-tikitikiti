<template>
  <div class="home">
    <h1>PROYECTO DIECIOCHERO</h1>
    <H2>Calcula la cuota para tu asado</H2>

    <form class="container">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Cantidad de personas</label
        >
        <input
          type="number"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="10"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Cantidad de carne a consumir</label
        >
        <select class="form-select" aria-label="Default select example">
          <option selected>Elije cantidad</option>
          <option value="1">200 gramos</option>
          <option value="2">300 gramos</option>
          <option value="3">500 gramos</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Cantidad de pollo a consumir</label
        >
        <select class="form-select" aria-label="Default select example">
          <option selected>Elije cantidad</option>
          <option value="1">200 gramos</option>
          <option value="2">300 gramos</option>
          <option value="3">500 gramos</option>
        </select>
      </div>
      <input type="submit" value="Calcular" /> <button type="submit" @click="limpiarForm">Limpiar</button>
    </form>

    <div class="mt-5">
      <h3>Resultado</h3>
      <p>El valor de la cuota es de $ 10.000</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
  methods: {
    limpiarForm(event){
      event.preventDefault();
      
    }
  },
};
</script>
