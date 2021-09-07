<template>
  <section class="calculator-page">
    <CalculatorComponent />
  </section>
</template>

<script>
import CalculatorComponent from '../components/CalculatorComponent.vue'

export default {
  name: 'Calculator', 
  components: {
    CalculatorComponent
  },
  data() {
    return {

    }
  }
}
</script>


<style>

  .calculator-page {
    width: 100%;
    min-height: 100vh;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
