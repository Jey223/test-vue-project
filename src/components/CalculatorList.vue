<template>
    <section id="btns">
        <div id="input-box">
            <input type="text" v-model="num1" />
            <span>{{ operandFunc() }}</span>
            <input type="text" v-model="num2" />
            <div>{{ operandValue }}</div>
        </div>
        <div class="btn-flex">
            <button @click="inputNum1(1)">1</button>
            <button @click="addNum">+</button>
            <button @click="subtractNum">-</button>
            <button @click="inputNum2(2)">2</button>
        </div>
        <h2>{{ result }}</h2>

    </section>
</template>

<script>
    export default {
        data(){
            return {
                num1: '',
                num2: '',
                operand: false,
                operandValue: 'Add / subtract',
                result:'',
            }
        },
        methods: {
            inputNum1(value){
                this.num1 = value;
            },
            inputNum2(value){
                this.num2 = value;
            },
            
            operandFunc(){
                if (this.operand && this.operandValue === "+") {
                    this.operandValue = "+"
                } else if (this.operand && this.operandValue === "-") {
                    this.operandValue = "-"
                }
            },
            addNum(){
                this.operandValue = "+"
                this.operand = true
                this.result = this.num1 + this.num2
            },
            subtractNum(){
                this.operandValue = "-"
                this.operand = true
                this.result = this.num1 - this.num2
            }
        }

    }

</script>

<style>

    *{
        box-sizing: border-box;
    }

    #btns {
        margin: 0 auto;
        width: 60%;
        background: yellow;
    }

    #input-box {
        margin-bottom: 20px;
    }

    .btn-grid {
        margin: auto;
        display: flex;
        flex-direction: row;
        width: 50%;
        justify-content: space-between;
        align-content: center;
    }
    button{
        /* align-items: center; */
        padding: 15px;
        
    }

</style>