<template>
  <div class="home vh-100">
    <h1>PROYECTO DIECIOCHERO</h1>
    <h2>Calcula la cuota para tu asado</h2>

    <form class="container mt-4" @submit.prevent="onSubmit">
      <div class="mb-4 col-md-3 container text-start ">
        <label for="exampleFormControlInput1" class="form-label"
          >Cantidad de personas</label
        >
        <input
          type="number"
          class="form-control text-center mt-1"
          v-model="cantidadPersonas"
          id="exampleFormControlInput1"
          placeholder="Ingresa el número de..."
          min="0"
        />
      </div>
      <div class="d-flex flex-row">
    <div class="container col-4 d-flex justify-content-around">
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label"
        >Corte de carne a elegir</label
      >
      <select
        class="form-select"
        aria-label="Default select example"
        v-model="corteCarne"
      >
        <option aria-label="Disabled select example" disabled>Elige corte</option>
        <option value="200">200 gramos</option>
        <option value="300">300 gramos</option>
        <option value="500">500 gramos</option>
      </select>
    </div>
    
    </div>
    <div class="container col-4 d-flex justify-content-around">
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label"
        >Cantidad de carne a consumir por persona</label
      >
      <select
        class="form-select"
        aria-label="Default select example"
        v-model="cantidadCarne"
      >
        <option  aria-label="Disabled select example" disabled>Elige cantidad</option>
        <option value="200">200 gramos</option>
        <option value="300">300 gramos</option>
        <option value="500">500 gramos</option>
      </select>
    </div>
    
    </div>
    <div class="container col-4 d-flex justify-content-around">
    <div class="mb-3 text-start">
      <label for="exampleFormControlInput1" class="form-label"
          >Precio por kilo</label
        >
        <div class="input-group mb-3">
  <span class="input-group-text">$</span>
  <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" :placeholder="precioKilo"> 
</div>
    </div>
    
    </div>
  </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Cantidad de pollo a consumir por persona</label
        >
        <select class="form-select" aria-label="Default select example" v-model="cantidadPollo">
          <option selected aria-label="Disabled select example" disabled>Elige cantidad</option>
          <option value="200">200 gramos</option>
          <option value="300">300 gramos</option>
          <option value="500">500 gramos</option>
        </select>
      </div>
      <button type="submit" class="btn btn-success me-1" value="Calcular" >Calcular</button>  <button type="submit" class="btn btn-warning text-light ms-1" @click="limpiarForm">Limpiar</button>
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
      cantidadCarne: "Elige cantidad",
      cantidadPollo: "Elige cantidad",
      corteCarne: "Elige corte",
      cortePollo: "Elige corte",
      precioKilo: "Ingresa el precio",
      totalCarne: 0,
      totalPollo: 0,
      valorCuota: 0,
    };
  },
  components: {},
  methods: {
    onSubmit() {
      if(this.cantidadCarne === "Elige cantidad" || this.cantidadPollo === "Elige cantidad" || this.cantidadPersonas === 0){
        alert("Debes completar todos los campos");
      }
      this.totalCarne = (this.cantidadPersonas * this.cantidadCarne) / 1000;
      this.totalPollo = (this.cantidadPersonas * this.cantidadPollo) / 1000;
      const valorTotal = this.totalCarne * 9000 + this.totalPollo * 5000;
      this.valorCuota = valorTotal / this.cantidadPersonas;
    },
    limpiarForm(event){
      event.preventDefault();
      
      let limpiar = confirm('Seguro deseas limpiar los campos?');
      if(limpiar){
        this.cantidadCarne = "Elije cantidad";
        this.cantidadPollo = "Elije cantidad";
        this.cantidadPersonas = null;
        this.totalCarne = 0;
        this.totalPollo = 0;
        this.valorCuota = 0;
      }
      
    }
  },
  
};
</script>

<style scoped>

</style>