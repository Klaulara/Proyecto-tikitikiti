<template>
  <div class="home">
    <h1>PROYECTO DIECIOCHERO</h1>
    <h2>Calcula la cuota para tu asado</h2>

    <form class="container" @submit.prevent="onSubmit">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Cantidad de personas</label
        >
        <input
          type="number"
          class="form-control"
          v-model="cantidadPersonas"
          id="exampleFormControlInput1"
          placeholder="10"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Cantidad de carne a consumir por persona</label
        >
        <select class="form-select" aria-label="Default select example" v-model="cantidadCarne">
          <option selected>Elije cantidad</option>
          <option value="200">200 gramos</option>
          <option value="300">300 gramos</option>
          <option value="500">500 gramos</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Cantidad de pollo a consumir por persona</label
        >
        <select class="form-select" aria-label="Default select example" v-model="cantidadPollo">
          <option selected>Elije cantidad</option>
          <option value="200">200 gramos</option>
          <option value="300">300 gramos</option>
          <option value="500">500 gramos</option>
        </select>
      </div>
      <input type="submit" value="Calcular" />
    </form>

    <div class="mt-5">
      <h3>Resultado</h3>
      <p v-if="valorCuota > 0" >La cuota por persona es {{ valorCuota }}</p>
      <p>Carne: {{ totalCarne }} kilos</p>
      <p>Pollo: {{ totalPollo }} kilos</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      cantidadPersonas: null,
      cantidadCarne: "Elije cantidad",
      cantidadPollo: "Elije cantidad",
      totalCarne: 0,
      totalPollo: 0,
      valorCuota: 0,
    };
  },
  components: {},
  methods: {
    onSubmit() {
      if(this.cantidadCarne === "Elije cantidad" || this.cantidadPollo === "Elije cantidad" || this.cantidadPersonas === 0){
        alert("Debes completar todos los campos");
      }
      this.totalCarne = (this.cantidadPersonas * this.cantidadCarne) / 1000;
      this.totalPollo = (this.cantidadPersonas * this.cantidadPollo) / 1000;
      const valorTotal = this.totalCarne * 9000 + this.totalPollo * 5000;
      this.valorCuota = valorTotal / this.cantidadPersonas;
    },
  },
};
</script>
