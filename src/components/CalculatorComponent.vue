<template>
  <article class="calculator">
    <div class="calculator-result">{{result}}</div>
    <div class="calculator-screen">{{operation}}</div>

    <a @click="addChar('(')" class="calculator-item tool">(</a>
    <a @click="addChar(')')" class="calculator-item tool">)</a>
    <a @click="deleteChar()" class="calculator-item tool"><b>del</b></a>
    <a @click="addChar('+')" class="calculator-item operation">+</a>

    <a @click="addChar('1')" class="calculator-item number">1</a>
    <a @click="addChar('2')" class="calculator-item number">2</a>
    <a @click="addChar('3')" class="calculator-item number">3</a>
    <a @click="addChar('-')" class="calculator-item operation">-</a>
    
    <a @click="addChar('4')" class="calculator-item number">4</a>
    <a @click="addChar('5')" class="calculator-item number">5</a>
    <a @click="addChar('6')" class="calculator-item number">6</a>
    <a @click="addChar('*')" class="calculator-item operation">*</a>

    <a @click="addChar('7')" class="calculator-item number">7</a>
    <a @click="addChar('8')" class="calculator-item number">8</a>
    <a @click="addChar('9')" class="calculator-item number">9</a>
    <a @click="addChar('/')" class="calculator-item operation">/</a>

    <a @click="clearAll()" class="calculator-item tool"><b>C</b></a>
    <a @click="addChar('0')" class="calculator-item tool">0</a>
    <a @click="addChar('.')" class="calculator-item tool">.</a>
    <a @click="calculate()" class="calculator-item operation"><b> = </b></a>
  </article>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {

  data() {
    return {
      operation: '0'
    }
  },
  computed: {
    ...mapState(['result'])
  },
  methods: {
    ...mapActions(['setResult', 'clear']),
    /**
      * add character to arithmetic expression.
      * @param char {string}
     */
    addChar(char) {
      if(this.operation === '0') {
        this.operation = char
      } else if(char) {
        this.operation += char
      }
    },
    /**
     * transform and calculate arithmetic expression.
     */
    calculate() {
      try {
        const result = eval(this.operation)
        this.setResult({newResult: result})
      } catch (error) {
        alert('Invalid operation')
      }
      this.operation = '0'
    }, 
    /**
     * remove a character from arithmetic expression.
     */
    deleteChar() {
      if(this.operation !== '0') {
        this.operation = this.operation.slice(0, this.operation.length - 1)
      }
    }, 
    /**
     * Reset calculator.
     */
    clearAll() {
      this.clear()
      this.operation = '0'
    }
  }
}
</script>

<style>
  /* Main container */
  .calculator {
    background-color: var(--bg-calc);
    border-radius: 1rem;
    display: grid;
    height: 80%;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(7, 1fr);
    width: 50%;
  }

  /* Calculator screens */
  .calculator-result, .calculator-screen {
    align-items: flex-end;
    background-color: var(--bg-calc-results);
    display: flex;
    font-size: 1.7rem;
    height: 100%;
    justify-content: flex-end;
    padding: 10px;
    width: 100%;
  }

  .calculator-result {
    grid-column: 1 / -1;
    grid-row: 1 / 2;
  }

  .calculator-screen {
    grid-column:  1 / -1;
    grid-row: 2 / 3;
  }

  /* Calculator items / numbers / tools / operations */
  .calculator-item {
    align-items: center;
    cursor: pointer;
    display: flex;
    height: 100%;
    justify-content: center;
    margin: auto;
    transition: background-color 200ms;
    width: 100%;
  }

  .number:hover, .tool:hover {
    background-color: var(--bg-calc-hover);
    transition: background-color 200ms;
  }

  .operation {
    background-color: var(--bg-calc-operations);
  }

  .operation:hover {
    background-color: var(--bg-calc-operations-hover);
    transition: background-color 200ms;
  }

  .operation:last-of-type {
    border-bottom-right-radius: 10px;
  }

  /* Media queries */
  @media screen and (max-width:1000px) {
    .calculator {
      width: 90%;
      height: 80%;
    }
  }
  
</style>