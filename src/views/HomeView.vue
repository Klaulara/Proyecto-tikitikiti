<template>
  <div class="home">
    <h1 class="pt-2">PROYECTO DIECIOCHERO</h1>
    <h2>Calcula la cuota para tu asado</h2>

    <form class="container mt-4 d-none d-md-block" @submit.prevent="onSubmit">
      <div class="mb-4 col-md-3 container text-start">
        <label for="exampleFormControlInput1" class="form-label">Cantidad de personas</label>
        <input type="number" id="exampleFormControlInput1 personas" v-model="cantidadPersonas" @blur="validate"
          placeholder="Ingresa el número de invitados" class="form-control text-start mt-1" pattern="^[1-9][0-9]*$" >
        <div v-if="mostrarAlerta">

        </div>
       
      </div>
      <div class="d-flex flex-row text-start">
        <div class="container col-4 d-flex justify-content-around">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Corte de carne</label>
            <select class="form-select" aria-label="Default select example" v-model="corteCarne">
              <option aria-label="Disabled select example" disabled>
                Elige corte
              </option>
              <option value="Abastero">Abastero</option>
              <option value="Lomo liso">Lomo liso</option>
              <option value="Lomo vetado">Lomo vetado</option>
            </select>
          </div>
        </div>
        <div class="container col-4 d-flex justify-content-around">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Cantidad por persona</label>
            <select class="form-select" aria-label="Default select example" v-model="cantidadCarne">
              <option aria-label="Disabled select example" disabled>
                Elige cantidad
              </option>
              <option value="200">200 gramos</option>
              <option value="300">300 gramos</option>
              <option value="500">500 gramos</option>
            </select>
          </div>
        </div>
        <div class="container col-4 d-flex justify-content-around">
          <div class="mb-3 text-start">
            <label for="exampleFormControlInput1" class="form-label">Precio por kilo</label>
            <div class="input-group mb-3">
              <span class="input-group-text">$</span>
              <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)"
                placeholder="Ingrese el precio" v-model="precioKiloCarne" />
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex flex-row text-start">
        <div class="container col-4 d-flex justify-content-around">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Corte de pollo</label>
            <select class="form-select" aria-label="Default select example" v-model="cortePollo">
              <option aria-label="Disabled select example" disabled>
                Elige presa
              </option>
              <option value="Alitas">Alitas</option>
              <option value="Truto corto">Truto corto</option>
              <option value="Truto largo">Truto largo</option>
            </select>
          </div>
        </div>
        <div class="container col-4 d-flex justify-content-around">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Cantidad por persona</label>
            <select class="form-select" aria-label="Default select example" v-model="cantidadPollo">
              <option aria-label="Disabled select example" disabled>
                Elige cantidad
              </option>
              <option value="200">200 gramos</option>
              <option value="300">300 gramos</option>
              <option value="500">500 gramos</option>
            </select>
          </div>
        </div>
        <div class="container col-4 d-flex justify-content-around">
          <div class="mb-3 text-start">
            <label for="exampleFormControlInput1" class="form-label">Precio por kilo</label>
            <div class="input-group mb-3">
              <span class="input-group-text">$</span>
              <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)"
                placeholder="Ingrese el precio" v-model="precioKiloPollo" />
            </div>
          </div>
        </div>
      </div>
      <button type="submit" class="btn btn-success me-1" value="Calcular">
        Calcular
      </button>
      <button type="submit" class="btn btn-warning text-light ms-1" @click="limpiarForm">
        Limpiar
      </button>
    </form>

    <!-- ACORDEON -->

    <div class="row d-sm-block d-md-none">
      <div class="container">
        <div class="accordion accordion-flush" id="accordionFlushExample">
          <form class="container mt-4" @submit.prevent="onSubmit">
            <div class="mb-4 col-md-3 container text-start">
              <label for="exampleFormControlInput1" class="form-label">Cantidad de personas</label>
              <input type="number" id="exampleFormControlInput1 personas" v-model="cantidadPersonas" @blur="validate"
          placeholder="Ingresa el número de invitados" class="form-control text-start mt-1" pattern="^[1-9][0-9]*$" >
        <div v-if="mostrarAlerta">

        </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  Carnes
                </button>
              </h2>
              <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  <div class="d-flex flex-row">
                    <div class="container col-4 d-flex justify-content-around">
                      <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Corte de carne</label>
                        <select class="form-select" aria-label="Default select example" v-model="corteCarne">
                          <option aria-label="Disabled select example" disabled>
                            Elige corte
                          </option>
                          <option value="">Abastero</option>
                          <option value="">Lomo liso</option>
                          <option value="">Lomo vetado</option>
                        </select>
                      </div>
                    </div>
                    <div class="container col-4 d-flex justify-content-around">
                      <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Cantidad de carne</label>
                        <select class="form-select" aria-label="Default select example" v-model="cantidadCarne">
                          <option aria-label="Disabled select example" disabled>
                            Elige cantidad
                          </option>
                          <option value="200">200 gramos</option>
                          <option value="300">300 gramos</option>
                          <option value="500">500 gramos</option>
                        </select>
                      </div>
                    </div>
                    <div class="container col-4 d-flex justify-content-around">
                      <div class="mb-3 text-start">
                        <label for="exampleFormControlInput1" class="form-label">Precio por kilo</label>
                        <div class="input-group mb-3">
                          <span class="input-group-text">$</span>
                          <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)"
                            placeholder="Ingrese el precio" v-model="precioKiloCarne" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  Aves
                </button>
              </h2>
              <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  <div class="d-flex flex-row text-start">
                    <div class="container col-4 d-flex justify-content-around">
                      <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Corte de pollo</label>
                        <select class="form-select" aria-label="Default select example" v-model="cortePollo">
                          <option aria-label="Disabled select example" disabled>
                            Elige presa
                          </option>
                          <option value="">Alitas</option>
                          <option value="">Truto corto</option>
                          <option value="">Truto largo</option>
                        </select>
                      </div>
                    </div>
                    <div class="container col-4 d-flex justify-content-around">
                      <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Cantidad de pollo</label>
                        <select class="form-select" aria-label="Default select example" v-model="cantidadPollo">
                          <option aria-label="Disabled select example" disabled>
                            Elige cantidad
                          </option>
                          <option value="200">200 gramos</option>
                          <option value="300">300 gramos</option>
                          <option value="500">500 gramos</option>
                        </select>
                      </div>
                    </div>
                    <div class="container col-4 d-flex justify-content-around">
                      <div class="mb-3 text-start">
                        <label for="exampleFormControlInput1" class="form-label">Precio por kilo</label>
                        <div class="input-group mb-3">
                          <span class="input-group-text">$</span>
                          <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)"
                            placeholder="Ingrese el precio" v-model="precioKiloPollo" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                  Accordion Item #3
                </button>
              </h2>
              <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is
                  the third item's accordion body. Nothing more exciting
                  happening here in terms of content, but just filling up the
                  space to make it look, at least at first glance, a bit more
                  representative of how this would look in a real-world
                  application.
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="mt-5">
      <h3>Resultado</h3>
      <p v-if="valorCuota > 0">La cuota por persona es {{ valorCuota }}</p>
      <p>Carne: {{ totalCarne }} kilos</p>
      <p>Pollo: {{ totalPollo }} kilos</p>
    </div>
  </div>
  <FooterComponent />
</template>



<script>
import FooterComponent from "@/components/FooterComponent.vue"
export default {
  name: "HomeView",
  data() {
    return {
      mostrarAlerta: false,
      cantidadPersonas: null,
      cantidadCarne: "Elige cantidad",
      cantidadPollo: "Elige cantidad",
      corteCarne: "Elige corte",
      cortePollo: "Elige presa",
      precioKiloCarne: '',
      precioKiloPollo: '',
      totalCarne: 0,
      totalPollo: 0,
      valorCuota: 0,
    };
  },
  components: {FooterComponent},
  methods: {
    onSubmit() {
      if (
        this.cantidadCarne === "Elige cantidad" ||
        this.cantidadPollo === "Elige cantidad" ||
        this.cantidadPersonas === null ||
        this.precioKiloCarne === '' ||
        this.precioKiloPollo === ''
      ) {
        alert("Debes completar todos los campos");
      }
      this.totalCarne = (this.cantidadPersonas * this.cantidadCarne) / 1000;
      this.totalPollo = (this.cantidadPersonas * this.cantidadPollo) / 1000;
      const valorTotal = this.totalCarne * parseInt(this.precioKiloCarne) + this.totalPollo * parseInt(this.precioKiloPollo);
      this.valorCuota = (valorTotal / this.cantidadPersonas).toFixed(0);
    },
    limpiarForm(event) {
      event.preventDefault();

      let limpiar = confirm("Seguro deseas limpiar los campos?");
      if (limpiar) {
        this.cantidadCarne = "Elige cantidad";
        this.cantidadPollo = "Elige cantidad";
        this.corteCarne = "Elige corte";
        this.cortePollo = "Elige presa";
        this.precioKiloCarne= '',
        this.precioKiloPollo= '',
        this.cantidadPersonas = null;
        this.totalCarne = 0;
        this.totalPollo = 0;
        this.valorCuota = 0;
        this.mostrarAlerta= false;
      }
    },
    validate() {
      let valor = parseInt(this.cantidadPersonas);
      if (isNaN(valor) || valor <= 1) {
        this.mostrarAlerta = true;
        alert("El valor debe ser igual o mayor a 2");
        this.cantidadPersonas = "";
      } else {
        this.mostrarAlerta = false;
      }
    },
  },
};
</script>

<style scoped></style>