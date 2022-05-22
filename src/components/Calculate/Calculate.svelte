<h1 class="text-2xl mb-2">Calculator</h1>
<input bind:value={real_1} class="w-10 text-center inline-block bg-zinc-900 border-zinc-800" placeholder="a">
<p class="inline-block">+</p>
<input bind:value={imaginary_1} class="w-10 text-center inline-block bg-zinc-900 border-zinc-800" placeholder="b">
<p class="inline-block ">i</p>

<input bind:value={operation} class="w-10 text-center inline-block bg-zinc-900 border-zinc-800 mx-3" placeholder="+-/*">

<input bind:value={real_2} class="w-10 text-center inline-block bg-zinc-900 border-zinc-800" placeholder="a">
<p class="inline-block">+</p>
<input bind:value={imaginary_2} class="w-10 text-center inline-block bg-zinc-900 border-zinc-800" placeholder="b">
<p class="inline-block ">i</p>

<p></p>
<button class="bg-zinc-900 border-zinc-800 w-6 m-1 rounded" on:click={Calculate}>=</button>
<p></p>

<input bind:value={resultReal} class="w-10 text-center inline-block bg-zinc-900 border-zinc-800" placeholder="">
<p class="inline-block">+</p>
<input bind:value={resultImaginary} class="w-10 text-center inline-block bg-zinc-900 border-zinc-800" placeholder="">
<p class="inline-block ">i</p>

<script>
    import ComplexNumber from "./../../ComplexNumber.js";

    let number = ComplexNumber.Component(1, 1);
    let real_1;
    let imaginary_1;

    let real_2;
    let imaginary_2;

    let operation;

    let resultReal;
    let resultImaginary;

    const Calculate = () => {
        if(real_1 != "" && imaginary_1 != "" && real_2 != "" && imaginary_2 != "" && operation != ""){
            switch (operation) {
                case '+':
                    Add();
                    break;
                case '-':
                    Subtract();
                    break;
                case '*':
                    Mulitply();
                    break;
                case '/':
                    Divide();
                    break;
            }
        }
    }

    const Add = () => {
        resultReal = parseFloat(real_1)  + parseFloat(real_2)
        resultImaginary = parseFloat(imaginary_1) + parseFloat(imaginary_2);
    }

    const Subtract = () => {
        resultReal = parseFloat(real_1) - parseFloat(real_2)
        resultImaginary = parseFloat(imaginary_1) - parseFloat(imaginary_2)
    }

    const Mulitply = () => {
        
    }

    const Divide = () => {

    }
</script>